using SampleProject.Server.Models;

namespace SampleProject.Server.Services
{
    public interface IUserService
    {
        Task<User> SubmitUserAsync(User user); 
    }
}
