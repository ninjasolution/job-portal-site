using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class Company
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public string NormalizedUserNamge { get; set; }
        public string Email { get; set; }
        public string NormalizedEmail { get; set; }
        public bool EmailConfirmed { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public bool TwoFactorEnabled { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Role { get; set; }
        public string Gender { get; set; }
        public bool IsActive { get; set; }
        public string ImageURL { get; set; }
        public DateTimeOffset DateOfBirth { get; set; }
        public string CompanyName { get; set; }
        public string Category { get; set; }
        public string ContactEmail { get; set; }
        public string ContactCountry { get; set; }
        public string ContactCity { get; set; }
        public string Zip { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public string WebSiteUrl { get; set; }
        public string FaceBookLink { get; set; }
        public string TwitterLink { get; set; }
        public string GoogleLink { get; set; }
        public string LinkedinLink { get; set; }
        public DateTimeOffset EstablishmentDate { get; set; }

    }
}
