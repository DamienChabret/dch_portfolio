using api.Data;
using api.Exceptions;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
   public class CareerService(ApiDbContext _apiDbContext) : IBaseServiceInterface<Career>
   {
      public async Task<Career> GetById(string idEntity)
      {
         Career career =  await _apiDbContext.Careers.FirstOrDefaultAsync(x => x.Id == Guid.Parse(idEntity));
         return career ?? throw new ExceptionItemNotFound("Career entity not found");
      }
            
      public async Task<List<Career>> GetAll()
      {
         return await _apiDbContext.Careers.ToListAsync();
      }

      public async Task Create(Career entity)
      {
         if (entity.Id == Guid.Empty)
            entity.Id = Guid.NewGuid();

         await _apiDbContext.Careers.AddAsync(entity);
         await _apiDbContext.SaveChangesAsync();
      }
   }
}