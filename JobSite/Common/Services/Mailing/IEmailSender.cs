using System.Threading.Tasks;

namespace JobSite.Mailing
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
