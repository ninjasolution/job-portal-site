using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;

namespace JobSite.Models
{
    [CollectionName("Users")]
    public class ApplicationUser : MongoIdentityUser<ObjectId>
    {
        public DateTimeOffset  DateOfBirth { get; set; }
        public bool Gender { get; set; }
        public bool IsActive { get; set; }
        public string ImageURL { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}
