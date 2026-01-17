using api.Data;
using api.Exceptions;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Services;

public class DegreeService(ApiDbContext _apiDbContext) : IBaseServiceInterface<Degree>
{
    public async Task<Degree> GetById(string idEntity)
    {
        Degree degree = await _apiDbContext.Degrees.FirstOrDefaultAsync(x => x.Id == Guid.Parse(idEntity));
        return degree ?? throw new ExceptionItemNotFound("Degree entity not found");
    }

    public async Task<List<Degree>> GetAll()
    {
        return await _apiDbContext.Degrees.ToListAsync();
    }

    public async Task Create(Degree entity)
    {
        if (entity.Id == Guid.Empty)
            entity.Id = Guid.NewGuid();

        await _apiDbContext.Degrees.AddAsync(entity);
        await _apiDbContext.SaveChangesAsync();
    }
}