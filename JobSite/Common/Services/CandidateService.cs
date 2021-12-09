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
    public class CandidateService
    {
        private readonly IMongoCollection<CandidateProfile> Candidates;
        private readonly IMongoCollection<ApplicationUser> Users;
        private readonly IMongoCollection<ApplicationRole> Roles;


        [Obsolete]
        public CandidateService(IJobSiteDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            Candidates = database.GetCollection<CandidateProfile>(settings.CandidateProfiles);
            Users = database.GetCollection<ApplicationUser>(settings.Users);
            Roles = database.GetCollection<ApplicationRole>(settings.Roles);
        }   

        public List<Candidate> GetCandidates()
        {
            var result = from user in Users.AsQueryable()
                         join can in Candidates.AsQueryable()
                         on user.Id equals can.UserId
                         select new Candidate
                         {
                             Id = can.Id,
                             UserId = user.Id,
                             UserName = user.UserName,
                             NormalizedUserNamge = user.NormalizedUserName,
                             Email = user.Email,
                             NormalizedEmail = user.NormalizedEmail,
                             EmailConfirmed = user.EmailConfirmed,
                             PhoneNumber = user.PhoneNumber,
                             PhoneNumberConfirmed = user.PhoneNumberConfirmed,
                             TwoFactorEnabled = user.TwoFactorEnabled,
                             CreatedOn = user.CreatedOn,
                             Gender = user.Gender,
                             IsActive = user.IsActive,
                             ImageURL = user.ImageURL,
                             DateOfBirth = user.DateOfBirth,
                             ProTitle = can.ProTitle,
                             CurrentSalary = can.CurrentSalery,
                             ExpectedSalary = can.ExpectedSalary,
                             Description = can.Description,
                             PostCode = can.PostCode,
                             City = can.City,
                             FullAddress = can.FullAddress,
                             Languages = can.Languages,
                             Skills = can.Skills,
                         };

            return new List<Candidate>();
        }

        public Candidate GetCandidateById(string id)
        {
            var result = (from user in Users.AsQueryable()
                         join can in Candidates.AsQueryable()
                         on user.Id equals can.UserId
                         where user.Id == id
                         select new Candidate
                         {
                             Id = can.Id,
                             UserId = user.Id,
                             UserName = user.UserName,
                             NormalizedUserNamge = user.NormalizedUserName,
                             Email = user.Email,
                             NormalizedEmail = user.NormalizedEmail,
                             EmailConfirmed = user.EmailConfirmed,
                             PhoneNumber = user.PhoneNumber,
                             PhoneNumberConfirmed = user.PhoneNumberConfirmed,
                             TwoFactorEnabled = user.TwoFactorEnabled,
                             CreatedOn = user.CreatedOn,
                             Gender = user.Gender,
                             IsActive = user.IsActive,
                             ImageURL = user.ImageURL,
                             DateOfBirth = user.DateOfBirth,
                             ProTitle = can.ProTitle,
                             CurrentSalary = can.CurrentSalery,
                             ExpectedSalary = can.ExpectedSalary,
                             Description = can.Description,
                             PostCode = can.PostCode,
                             City = can.City,
                             Country = user.Country,
                             FullAddress = can.FullAddress,
                             Languages = can.Languages,
                             Skills = can.Skills,
                         }).ToList();

            return result.FirstOrDefault();
        }

        public void EditProfile(CandidateEdit profile)
        {
            
            var userUpdate = Builders<ApplicationUser>.Update
                    .Set(u => u.Email, profile.Email)
                    .Set(u => u.PhoneNumber, profile.PhoneNumber)
                    .Set(u => u.Country, profile.Country)
                    .Set(u => u.UserName, profile.UserName)
                    .Set(u => u.Age, profile.Age);

            Users.FindOneAndUpdate(u => u.Id == profile.UserId, userUpdate);

            var selProfile = Candidates.Find(c => c.UserId == profile.UserId).FirstOrDefault();
            if(selProfile != null)
            {
                var profileUpdate = Builders<CandidateProfile>.Update
                    .Set(c => c.ProTitle, profile.ProTitle)
                    .Set(c => c.CurrentSalery, profile.CurrentSalary)
                    .Set(c => c.ExpectedSalary, profile.ExpectedSalary)
                    .Set(c => c.Description, profile.Description)
                    .Set(c => c.PostCode, profile.PostCode)
                    .Set(c => c.City, profile.City)
                    .Set(c => c.FullAddress, profile.FullAddress)
                    .Set(c => c.Skills, profile.Skills)
                    .Set(c => c.Languages, profile.Languages);
                Candidates.FindOneAndUpdate(c => c.UserId == profile.UserId, profileUpdate);
            }
            else
            {
                var candidateProfile = new CandidateProfile
                {
                    ProTitle = profile.ProTitle,
                    CurrentSalery = profile.CurrentSalary,
                    ExpectedSalary = profile.ExpectedSalary,
                    Description = profile.Description,
                    PostCode = profile.PostCode,
                    City = profile.City,
                    FullAddress = profile.FullAddress,
                    Skills = profile.Skills,
                    Languages = profile.Languages,
                    UserId = profile.UserId
                };
                Candidates.InsertOne(candidateProfile);
            }

            
        }

    }
}
