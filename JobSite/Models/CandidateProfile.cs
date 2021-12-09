using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Realms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class CandidateProfile 
    {
        [PrimaryKey]
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string ProTitle { get; set; }
        public float CurrentSalery { get; set; }
        public float? ExpectedSalary { get; set; }
        public string Description { get; set; }
        public string PostCode { get; set; }
        public string City { get; set; }
        public string FullAddress { get; set; }
        public bool IsAnnuallyMonthly { get; set; }
        public List<string> Languages { get; set; }
        public List<string> Skills { get; set; }
        public List<string> Educations { get; set; }
        public List<string> Experiences { get; set; }
        public string UserId { get; set; }

    }
}
