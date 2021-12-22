using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSite.Models
{
    public class JobSiteDatabaseSettings : IJobSiteDatabaseSettings
    {
        public string Users { get; set; }
        public string Roles { get; set; }
        public string CompanyProfiles { get; set; }
        public string CandidateProfiles { get; set; }
        public string ExperienceDetails { get; set; }
        public string EducationDetails { get; set; }
        public string Skills { get; set; }
        public string PostJobs { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }


    public interface IJobSiteDatabaseSettings
    {
        public string Users { get; set; }
        public string Roles { get; set; }
        public string CompanyProfiles { get; set; }
        public string CandidateProfiles { get; set; }
        public string ExperienceDetails { get; set; }
        public string EducationDetails { get; set; }
        public string Skills { get; set; }
        public string PostJobs { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }


    }
}
