using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class ExperienceDetail
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public bool IsCurrentJob { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string JobTitle { get; set; }
        public string CompanyName { get; set; }
        public string JobLocationCity { get; set; }
        public string JobLocationState { get; set; }
        public string JobLocationCountry { get; set; }
        public string Description { get; set; }


    }
}
