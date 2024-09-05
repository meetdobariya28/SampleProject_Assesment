using Microsoft.EntityFrameworkCore;
using SampleProject.Server.Models;

namespace SampleProject.Server.Data
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
    }
}

