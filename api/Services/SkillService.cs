using api.Data;
using api.Exceptions;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
    public class SkillService(ApiDbContext _apiDbContext) : IBaseServiceInterface<Skill>
    { 
        public async Task<List<Skill>> GetAll()
        {
            return await _apiDbContext.Skills.ToListAsync();
        }

        public async Task<Skill> GetById(string idEntity)
        {
            Skill skill = await _apiDbContext.Skills.FirstOrDefaultAsync(x => x.Id == Guid.Parse(idEntity));
            return skill ?? throw new ExceptionItemNotFound("Skill not found");
        }

        public async Task Create(Skill entity)
        {
            if (entity.Id == Guid.Empty)
                entity.Id = Guid.NewGuid();
            
            if(await this.GetByName(entity.Name) != null)
                throw new ExceptionItemAlreadyExist("Skill name already exist");

            await _apiDbContext.Skills.AddAsync(entity);
            await _apiDbContext.SaveChangesAsync();
        }

        private async Task<Skill>? GetByName(string name)
        {
            return await _apiDbContext.Skills.FirstOrDefaultAsync(x => x.Name == name);
        }
    }
}