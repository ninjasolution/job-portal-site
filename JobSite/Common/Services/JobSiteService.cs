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

        [Obsolete]
        public JobSiteService(IJobSiteDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            Users = database.GetCollection<ApplicationUser>(settings.Users);
            Roles = database.GetCollection<ApplicationRole>(settings.Roles);

            if (Roles.Count(filter: r => true) > 0)
            {
                Roles.InsertOne( new ApplicationRole { RoleName = "Administrator" });
                Roles.InsertOne( new ApplicationRole { RoleName = "Candidater" });
                Roles.InsertOne( new ApplicationRole { RoleName = "Emmployeer" });
            }
        }

        public List<ApplicationUser> GetUsers() =>
            Users.Find(User => true).ToList();

        public ApplicationUser GetUserById(ObjectId id) =>
            Users.Find<ApplicationUser>(User => User.Id == id).FirstOrDefault();

        [Obsolete]
        public void RegisterUser(RegisterModel User)
        {
            if (string.IsNullOrWhiteSpace(User.Password))
                throw new Exception("Password is required");

            if (Users.Find(x => x.Email == User.Email).Count() > 0)
                throw new Exception("Username \"" + User.Email + "\" is already taken");

            string passwordHash;
            byte[] passwordSalt;
            CreatePasswordHash(User.Password, out passwordHash, out passwordSalt);

            ApplicationUser newUser = new ApplicationUser();
            newUser.PasswordHash = passwordHash;
            newUser.PasswordSalt = passwordSalt;
            newUser.Email = User.Email;
            newUser.UserName = User.FirstName + User.LastName;

            Users.InsertOne(newUser);

        }
        public ApplicationUser Authenticate(string Email, string Password)
        {
            if (string.IsNullOrEmpty(Email) || string.IsNullOrEmpty(Password))
                return null;

            ApplicationUser User = Users.Find(x => x.Email == Email).FirstOrDefault();

            // check if UserName exists
            if (User == null)
                return null;
            // check if Password is correct

            if (!VerifyPasswordHash(Password, User.PasswordHash, User.PasswordSalt))
                return null;

            // authentication successful
            return User;
        }

        public void UpdateUser(ObjectId id, ApplicationUser UserIn) =>
            Users.ReplaceOne(User => User.Id == id, UserIn);

        public void RemoveUser(ApplicationUser UserIn) =>
            Users.DeleteOne(User => User.Id == UserIn.Id);

        public void RemoveUser(ObjectId id) =>
            Users.DeleteOne(User => User.Id == id);

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
