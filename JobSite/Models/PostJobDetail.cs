using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Realms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class PostJobDetail
    {
       
        public string CompanyId { get; set; }
        public string JobTitle { get; set; }
        public string JobType { get; set; }
        public int JobExperience { get; set; }
        public int JobMinSalary { get; set; }
        public int JobMaxSalary { get; set; }
        public string JobRegion { get; set; }
        public string JobLocation { get; set; }
        public string Description { get; set; }
        public List<string> Skills { get; set; }
        public List<DownloadFile> DownloadUrls { get; set; }
        public DateTimeOffset CreateAt { get; set; }
        public string CompanyName { get; set; }
        public string PhoneNumber { get; set; }
        public string ContactEmail { get; set; }
        public string ContactCountry { get; set; }
        public string ContactCity { get; set; }
        public string Zip { get; set; }
        public string Address { get; set; }
        public string CompanyDescription { get; set; }
        public string FacebookLink { get; set; }
        public string TwitterLink { get; set; }
        public string GoogleLink { get; set; }
        public string LinkedinLink { get; set; }
        public string CompanyWebsiteUrl { get; set; }
        public DateTimeOffset EstablishmentDate { get; set; }
        public List<string> Images { get; set; }
    }

}
