using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class CompanyImage
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string CompanyId { get; set; }
        public string CompnayIamge { get; set; }
    }
}
