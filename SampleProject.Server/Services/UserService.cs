using SampleProject.Server.Models;
using SampleProject.Server.Data;

namespace SampleProject.Server.Services
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;

        public UserService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<User> SubmitUserAsync(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync(); //Save data IN SQL Server DB
            return user; //Mock returning the same Data
        }
    }
}
