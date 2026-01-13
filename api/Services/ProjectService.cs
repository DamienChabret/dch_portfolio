using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
   public class ProjectService : IBaseServiceInterface<Project>
   {
        private readonly ApiDbContext _apiDbContext;

        public ProjectService(ApiDbContext apiDbContext)
        {
            _apiDbContext = apiDbContext;
        }
        
        public async Task<List<Project>> GetAll()
        {
            return await _apiDbContext.Projects.ToListAsync();
        }

        public async Task Create(Project entity)
        {
            if (entity.Id == Guid.Empty)
                entity.Id = Guid.NewGuid();

            await _apiDbContext.Projects.AddAsync(entity);
            await _apiDbContext.SaveChangesAsync();
        }

        public async Task<Project> GetById(string idEntity)
        {
            return await _apiDbContext.Projects.FirstOrDefaultAsync(x => x.Id == Guid.Parse(idEntity));
        }
   }
}