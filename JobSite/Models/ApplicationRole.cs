using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCore.Identity.Mongo;
using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;
using Realms;

namespace JobSite.Models
{

    [CollectionName("Roles")]
    public class ApplicationRole : MongoIdentityRole<string>
    {
    }
}
