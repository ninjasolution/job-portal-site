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
    public class JobService
    {
        private readonly IMongoCollection<PostJob> Jobs;
        private readonly IMongoCollection<ApplicationUser> Users;
        private readonly IMongoCollection<CompanyProfile> Companies;

        [Obsolete]
        public JobService(IJobSiteDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            Jobs = database.GetCollection<PostJob>(settings.PostJobs);
            Users = database.GetCollection<ApplicationUser>(settings.Users);
            Companies = database.GetCollection<CompanyProfile>(settings.CompanyProfiles);

        }

        public List<PostJob> GetJobs()
        {
            return Jobs.Find(filter: j => true).SortByDescending(j => j.CreateAt).ToList();
        }

        public PostJobDetail GetJobById(string id)
        {
            var selJob = (from job in Jobs.AsQueryable()
                          where job.Id == id
                          select job).FirstOrDefault();
            var selComp = (from com in Companies.AsQueryable()
                           where com.Id == selJob.CompanyId
                           select com).FirstOrDefault();
            var result = new PostJobDetail
            {
                CompanyId = selJob.CompanyId,
                JobTitle = selJob.JobTitle,
                JobType = selJob.JobType,
                JobExperience = selJob.JobExperience,
                JobMinSalary = selJob.JobMinSalary,
                JobMaxSalary = selJob.JobMaxSalary,
                JobRegion = selJob.JobRegion,
                JobLocation = selJob.JobLocation,
                Description = selJob.Description,
                Skills = selJob.Skills,
                DownloadUrls = selJob.DownloadUrls,
                CreateAt = selJob.CreateAt,
                CompanyName = selComp.CompanyName,
                PhoneNumber = selComp.PhoneNumber,
                ContactEmail = selComp.ContactEmail,
                ContactCountry = selComp.ContactCountry,
                ContactCity = selComp.ContactCity,
                Zip = selComp.Zip,
                Address = selComp.Address,
                CompanyDescription = selComp.Description,
                FacebookLink = selComp.FaceBookLink,
                TwitterLink = selComp.TwitterLink,
                GoogleLink = selComp.GoogleLink,
                LinkedinLink = selComp.LinkedinLink,
                CompanyWebsiteUrl = selComp.CompanyWebSiteUrl,
                EstablishmentDate = selComp.EstablishmentDate,
                Images = selComp.Images
            };
            return result;
        }

        public void CreateJob(PostJob job)
        {
            Jobs.InsertOne(job);
        }

    }
}
