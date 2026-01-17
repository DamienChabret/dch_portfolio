using api.Data;
using api.Exceptions;
using api.Models;
using Microsoft.AspNetCore.Connections.Features;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
   public class ProjectService(ApiDbContext _apiDbContext) : IBaseServiceInterface<Project>
   { 
        public async Task<List<Project>> GetAll()
        {
            return await _apiDbContext.Projects.ToListAsync();
        }

        public async Task<Project> GetById(string idEntity)
        {
            Project project = await _apiDbContext.Projects.FirstOrDefaultAsync(x => x.Id == Guid.Parse(idEntity));
            return project ?? throw new ExceptionItemNotFound("Project not found");
        }

        public async Task Create(Project entity)
        {
            if (entity.Id == Guid.Empty)
                entity.Id = Guid.NewGuid();

            await _apiDbContext.Projects.AddAsync(entity);
            await _apiDbContext.SaveChangesAsync();
        }
   }
}