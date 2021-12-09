using System;
using System.Collections.Generic;
using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson;
using MongoDbGenericRepository.Attributes;
using Realms;

namespace JobSite.Models
{
    [CollectionName("Users")]
    public class ApplicationUser : MongoIdentityUser<string>
    {

        public DateTimeOffset DateOfBirth { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string Country { get; set; }
        public bool IsActive { get; set; }
        public string ImageURL { get; set; }
        public byte[] PasswordSalt { get; set; }
        public AuthToken Token { get; set; }
        public virtual ApplicationRole Role { get; set; }
    }

}
