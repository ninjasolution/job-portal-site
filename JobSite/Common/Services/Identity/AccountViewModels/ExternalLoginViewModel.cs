using System.ComponentModel.DataAnnotations;

namespace JobSite.Identity.AccountViewModels
{
    public class ExternalLoginViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
