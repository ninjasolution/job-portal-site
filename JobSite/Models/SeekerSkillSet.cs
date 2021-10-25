using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class SeekerSkillSet
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string UserAccountId { get; set; }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string SkillSetId { get; set; }

        public int SkillLevel { get; set; }
    }
}
