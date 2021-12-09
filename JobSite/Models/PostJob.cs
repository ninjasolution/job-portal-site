using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Realms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class PostJob
    {
        [PrimaryKey]
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
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
        public DateTimeOffset CreateAt { get; set; } = DateTimeOffset.Now;
    }


    public class DownloadFile
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DownloadURL { get; set; }
    }

}
