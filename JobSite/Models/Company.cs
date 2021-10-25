using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class Company
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string CompanyName { get; set; }
        public string ProfileDescription { get; set; }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string BusinessStreamId { get; set; }
        public DateTime EstablishmentDate { get; set; }
        public string CompanyWebSiteUrl { get; set; }
    }
}
