using AspNetCore.Identity.MongoDbCore.Models;
using JobSite.Common;
using JobSite.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using Realms.Sync.Exceptions;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobSite
{
    public class JobSiteService
    {
        private readonly IMongoCollection<ApplicationUser> Users;
        private readonly IMongoCollection<ApplicationRole> Roles;
        private IMongoCollection<SkillSet> Skills;
        private ITokenManager _tokenManager;
        [Obsolete]
        public JobSiteService(IJobSiteDatabaseSettings settings, ITokenManager tokenmanager)
        {
            _tokenManager = tokenmanager;
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            Users = database.GetCollection<ApplicationUser>(settings.Users);
            Roles = database.GetCollection<ApplicationRole>(settings.Roles);
            Skills = database.GetCollection<SkillSet>(settings.Skills);

            if (Roles.Count(filter: r => true) == 0)
            {
                Roles.InsertOne( new ApplicationRole { Name = "Administrator" });
                Roles.InsertOne( new ApplicationRole { Name = "Candidater" });
                Roles.InsertOne( new ApplicationRole { Name = "Employeer" });
            }

            if(Users.Count(filter: u => true) == 0)
            {
                var selRoles = Roles.Find(r => r.Name == "Administrator").ToList();
                if(selRoles != null)
                {
                    string passwordHash;
                    byte[] passwordSalt;
                    CreatePasswordHash("elder*6430", out passwordHash, out passwordSalt);

                    Users.InsertOne(new ApplicationUser
                    {
                        UserName = "Administrator",
                        Email = "admin@gmail.com",
                        PasswordHash = passwordHash,
                        PasswordSalt = passwordSalt,
                        Roles = selRoles.Select(r => r.Id).ToList()
                    }) ;
                }
            }

            if(Skills.Count(filter: s => true) == 0)
            {
                Skills.InsertOne(new SkillSet { SkillSetName = "Angular" });
                Skills.InsertOne(new SkillSet { SkillSetName = "React" });
                Skills.InsertOne(new SkillSet { SkillSetName = "Vue" });
                Skills.InsertOne(new SkillSet { SkillSetName = "ASP.NET" });
                Skills.InsertOne(new SkillSet { SkillSetName = "Laravel" });
                Skills.InsertOne(new SkillSet { SkillSetName = "Django" });
                Skills.InsertOne(new SkillSet { SkillSetName = "Blockchain" });
                Skills.InsertOne(new SkillSet { SkillSetName = "Smart Contract" });
                Skills.InsertOne(new SkillSet { SkillSetName = "Unity 3D" });
                Skills.InsertOne(new SkillSet { SkillSetName = "NextJS" });
                Skills.InsertOne(new SkillSet { SkillSetName = "Redux" });
            }
        }

        public List<ApplicationUser> GetUsers() =>
            Users.Find(User => true).ToList();

        public ApplicationUser GetUserById(string id) =>
            Users.Find<ApplicationUser>(User => User.Id.ToString() == id).FirstOrDefault();

        [Obsolete]
        public ApplicationUser RegisterUser(RegisterModel User)
        {
            if (string.IsNullOrWhiteSpace(User.Password))
                throw new Exception("Password is required");

            if (Users.Find(x => x.Email == User.Email).Count() > 0)
                throw new Exception("EMAIL_EXISTS");

            string passwordHash;
            byte[] passwordSalt;
            CreatePasswordHash(User.Password, out passwordHash, out passwordSalt);

            ApplicationRole role = Roles.Find(r => r.Name == User.Roles[0]).FirstOrDefault();
            if(role == null) throw new Exception("ROLE_IS_NOT_EXISTS");

            ApplicationUser newUser = new ApplicationUser();
            newUser.PasswordHash = passwordHash;
            newUser.PasswordSalt = passwordSalt;
            newUser.Email = User.Email;
            newUser.UserName = User.FirstName + User.LastName;
            newUser.Roles.Add(role.Id);
            newUser.Token = _tokenManager.Generate(newUser);
            Users.InsertOne(newUser);
            newUser.Role = Roles.Find(r => r.Id == newUser.Roles[0]).First();
            return newUser;
            
        }
        public ApplicationUser Authenticate(string Email, string Password)
        {
            if (string.IsNullOrEmpty(Email) || string.IsNullOrEmpty(Password))
                return null;

            ApplicationUser User = Users.Find(x => x.Email == Email).FirstOrDefault();

            // check if UserName exists
            if (User == null)
                throw new Exception("EMAIL_NOT_EXISTS");
            // check if Password is correct

            if (!VerifyPasswordHash(Password, User.PasswordHash, User.PasswordSalt))
                throw new Exception("INVALID_PASSWORD");

            // authentication successful
            User.Token = _tokenManager.Generate(User);

            var update = Builders<ApplicationUser>.Update.Set(u => u.Token, User.Token);
            var filter = Builders<ApplicationUser>.Filter.Eq(u => u.Id, User.Id);
            var options = new UpdateOptions { IsUpsert = true };
            User.Role = Roles.Find(r => r.Id == User.Roles[0]).First();

            Users.UpdateOne(filter, update, options);

            return User;
        }

        public void UpdateUser(string id, ApplicationUser UserIn) =>
            Users.ReplaceOne(User => User.Id.ToString() == id, UserIn);

        public void RemoveUser(ApplicationUser UserIn) =>
            Users.DeleteOne(User => User.Id == UserIn.Id);

        public void RemoveUser(string id) =>
            Users.DeleteOne(User => User.Id.ToString() == id);
        public List<SkillSet> GetAllSkills() => Skills.Find(filter: s => true).ToList();
        private static void CreatePasswordHash(string password, out string passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                byte[] bytes = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }

                passwordHash = builder.ToString();
            }
        }

        private static bool VerifyPasswordHash(string password, string storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 128) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                byte[] computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < computedHash.Length; i++)
                {
                    builder.Append(computedHash[i].ToString("x2"));
                }

                if (builder.ToString() != storedHash) return false;
            }

            return true;
        }
    }
}
