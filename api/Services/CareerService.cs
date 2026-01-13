using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
   public class CareerService: IBaseServiceInterface<Career>
   {
      private readonly ApiDbContext _apiDbContext;

      public CareerService(ApiDbContext apiDbContext)
      {
         _apiDbContext = apiDbContext;
      }
      
      public async Task<Career> GetById(string idEntity)
      {
         return await _apiDbContext.Careers.FirstOrDefaultAsync(x => x.Id == Guid.Parse(idEntity));
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