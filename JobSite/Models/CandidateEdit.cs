using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class CandidateEdit
    {
        public string UserId { get; set; }
        public string UserName { get; set; }
        public string ProTitle { get; set; }
        public float CurrentSalary { get; set; }
        public float? ExpectedSalary { get; set; }
        public string Description { get; set; }
        public string PostCode { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string FullAddress { get; set; }
        public string Email { get; set; }
        public int Age { get; set; }
        public string PhoneNumber { get; set; }
        public List<string> Languages { get; set; }
        public List<string> Skills { get; set; }
    }
}
