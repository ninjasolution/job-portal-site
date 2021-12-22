using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class Candidate
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
        public string ProTitle { get; set; }
        public float CurrentSalary { get; set; }
        public float? ExpectedSalary { get; set; }
        public string Description { get; set; }
        public string PostCode { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string FullAddress { get; set; }
        public bool IsAnnuallyMonthly { get; set; }
        public List<string> Languages { get; set; }
        public List<string> Skills { get; set; }
        public List<string> Educations { get; set; }
        public List<string> Experiences { get; set; }
    }
}
