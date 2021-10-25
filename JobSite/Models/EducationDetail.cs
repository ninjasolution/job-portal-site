using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
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
        public string UserAccountId { get; set; }
        public string CertificateDegreeName { get; set; }
        public string Major { get; set; }
        public string InstituteUniversityName { get; set; }
        public DateTime StartingDate { get; set; }
        public DateTime CompletionDate { get; set; }
        public float Percentage { get; set; }
        public float Cgpa { get; set; }
    }
}
