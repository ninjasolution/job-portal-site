using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class CompanyEdit
    {
        public string UserId { get; set; }
        public string CompanyName { get; set; }
        public string Email { get; set; }
        public string Country { get; set; }
        public string Category { get; set; }
        public string PhoneNumber { get; set; }
        public string ContactEmail { get; set; }
        public string ContactCity { get; set; }
        public string ContactCountry { get; set; }
        public string Zip { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public DateTimeOffset EstablishmentDate { get; set; }
        public string WebsiteUrl { get; set; }
        public string FaceBookLink { get; set; }
        public string TwitterLink { get; set; }
        public string GoogleLink { get; set; }
        public string LinkedinLink { get; set; }
    }
}
