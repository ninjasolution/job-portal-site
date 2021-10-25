using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class SeekerProfile
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string lastName { get; set; }
        public float CurrentSalery { get; set; }
        public bool IsAnnuallyMonthly { get; set; }
        public string Currency { get; set; }

    }
}
