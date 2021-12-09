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
    public class CompanyService
    {
        private readonly IMongoCollection<CompanyProfile> Companies;
        private readonly IMongoCollection<ApplicationUser> Users;

        [Obsolete]
        public CompanyService(IJobSiteDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            Companies = database.GetCollection<CompanyProfile>(settings.CompanyProfiles);
            Users = database.GetCollection<ApplicationUser>(settings.Users);

        }

        public List<Company> GetCompanies()
        {
            var result = from user in Users.AsQueryable()
                         join com in Companies.AsQueryable()
                         on user.Id equals com.UserId

                         select new Company
                         {
                             Id = com.Id,
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
                             CompanyName = com.CompanyName,
                             Category = com.Category,
                             ContactEmail = com.ContactEmail,
                             ContactCountry = com.ContactCountry,
                             ContactCity = com.ContactCity,
                             Zip = com.Zip,
                             Address = com.Address,
                             Description = com.Description,
                             WebSiteUrl = com.CompanyWebSiteUrl,
                             EstablishmentDate = com.EstablishmentDate,
                             FaceBookLink = com.FaceBookLink,
                             TwitterLink = com.TwitterLink,
                             GoogleLink = com.GoogleLink,
                             LinkedinLink = com.LinkedinLink,
                         };

            return result.ToList();
        }

        public Company GetCompanyById(string id)
        {
            var result = (from user in Users.AsQueryable()
                          join com in Companies.AsQueryable()
                          on user.Id equals com.UserId
                          where user.Id == id
                          select new Company
                          {
                              Id = com.Id,
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
                              CompanyName = com.CompanyName,
                              Category = com.Category,
                              ContactEmail = com.ContactEmail,
                              ContactCountry = com.ContactCountry,
                              ContactCity = com.ContactCity,
                              Zip = com.Zip,
                              Address = com.Address,
                              Description= com.Description,
                              WebSiteUrl = com.CompanyWebSiteUrl,
                              EstablishmentDate = com.EstablishmentDate,
                              FaceBookLink = com.FaceBookLink,
                              TwitterLink = com.TwitterLink,
                              GoogleLink = com.GoogleLink,
                              LinkedinLink = com.LinkedinLink,
                          }).ToList();

            return result.FirstOrDefault();
        }

        public void EditProfile(CompanyEdit profile)
        {

            var userUpdate = Builders<ApplicationUser>.Update
                    .Set(u => u.Email, profile.Email)
                    .Set(u => u.PhoneNumber, profile.PhoneNumber)
                    .Set(u => u.Country, profile.Country);

            Users.FindOneAndUpdate(u => u.Id == profile.UserId, userUpdate);

            var selProfile = Companies.Find(c => c.UserId == profile.UserId).FirstOrDefault();
            if (selProfile != null)
            {
                var profileUpdate = Builders<CompanyProfile>.Update
                    .Set(c => c.CompanyName, profile.CompanyName)
                    .Set(c => c.Category, profile.Category)
                    .Set(c => c.ContactEmail, profile.ContactEmail)
                    .Set(c => c.ContactCountry, profile.ContactCountry)
                    .Set(c => c.ContactCity, profile.ContactCity)
                    .Set(c => c.Zip, profile.Zip)
                    .Set(c => c.Address, profile.Address)
                    .Set(c => c.Description, profile.Description)
                    .Set(c => c.CompanyWebSiteUrl, profile.WebsiteUrl)
                    .Set(c => c.EstablishmentDate, profile.EstablishmentDate)
                    .Set(c => c.TwitterLink, profile.TwitterLink)
                    .Set(c => c.FaceBookLink, profile.FaceBookLink)
                    .Set(c => c.LinkedinLink, profile.LinkedinLink)
                    .Set(c => c.GoogleLink, profile.GoogleLink);
                Companies.FindOneAndUpdate(c => c.UserId == profile.UserId, profileUpdate);
            }
            else
            {
                var comdidateProfile = new CompanyProfile
                {
                    CompanyName= profile.CompanyName,
                    Category= profile.Category,
                    ContactEmail= profile.ContactEmail,
                    ContactCountry = profile.ContactCountry,
                    ContactCity = profile.ContactCity,
                    Zip = profile.Zip,
                    Address = profile.Address,
                    Description = profile.Description,
                    CompanyWebSiteUrl = profile.WebsiteUrl,
                    EstablishmentDate = profile.EstablishmentDate,
                    FaceBookLink = profile.FaceBookLink,
                    TwitterLink = profile.TwitterLink,
                    GoogleLink = profile.GoogleLink,
                    LinkedinLink = profile.LinkedinLink,
                    UserId = profile.UserId
                };
                Companies.InsertOne(comdidateProfile);
            }


        }

    }
}
