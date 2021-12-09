using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Realms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class EducationDetail
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public CandidateProfile Candidate { get; set; }
        public string CertificateDegreeName { get; set; }
        public string Major { get; set; }
        public string InstituteUniversityName { get; set; }
        public DateTimeOffset StartingDate { get; set; }
        public DateTimeOffset CompletionDate { get; set; }
        public float Percentage { get; set; }
        public float Cgpa { get; set; }
    }
}
