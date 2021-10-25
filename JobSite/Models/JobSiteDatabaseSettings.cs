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
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }


    public interface IJobSiteDatabaseSettings
    {
        string Users { get; set; }
        string Roles { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }


    }
}
