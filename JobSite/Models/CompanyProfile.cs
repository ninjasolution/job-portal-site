using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Realms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class CompanyProfile 
    {
        [PrimaryKey]
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string CompanyName { get; set; }
        public string Category { get; set; }
        public string PhoneNumber { get; set; }
        public string ContactEmail { get; set; }
        public string ContactCountry { get; set; }
        public string ContactCity { get; set; }
        public string Zip { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
       
        public List<string> BusinessStreams { get; set; }
        public List<string> Images { get; set; }
        public string FaceBookLink { get; set; }
        public string TwitterLink { get; set; }
        public string GoogleLink { get; set; }
        public string LinkedinLink { get; set; }
        public DateTimeOffset EstablishmentDate { get; set; }
        public string CompanyWebSiteUrl { get; set; }
        public string UserId { get; set; }
    }
}
