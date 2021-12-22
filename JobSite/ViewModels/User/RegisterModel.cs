using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace JobSite.Models
{
    public class RegisterModel
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
        [Required]
        public List<string> Roles { get; set; }
    }
}