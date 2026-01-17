using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options)
            : base(options)
        {
        }

        public DbSet<Career> Careers { get; set; }
        public DbSet<Degree> Degrees { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Tool> Tools { get; set; }

    }
}