using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Realms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class SkillSet
    {
        [PrimaryKey]
        [MapTo("_id")]
        public ObjectId Id { get; set; }
        public string SkillSetName { get; set; }
    }
}
