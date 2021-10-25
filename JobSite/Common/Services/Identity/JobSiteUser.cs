using AspNetCore.Identity.Mongo.Model;
using MongoDB.Bson.Serialization.Attributes;

namespace JobSite.Identity
{
    [BsonIgnoreExtraElements]
    public class JobSiteUser : MongoUser
    {
    }
}
