using System.Reflection.Emit;
using api.Data;
using api.Exceptions;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Services;

public class ToolService(ApiDbContext _apiDbContext) : IBaseServiceInterface<Tool>
{
    public async Task<Tool> GetById(string idEntity)
    {
        Tool tool =  await _apiDbContext.Tools.FirstOrDefaultAsync(x => x.Id == Guid.Parse(idEntity));
        return tool ?? throw new ExceptionItemNotFound("Tool entity not found");
    }

    public async Task<List<Tool>> GetAll()
    {
        return await _apiDbContext.Tools.ToListAsync();
    }

    public async Task Create(Tool entity)
    {
        if (entity.Id == Guid.Empty)
            entity.Id = Guid.NewGuid();

        await _apiDbContext.Tools.AddAsync(entity);
        await _apiDbContext.SaveChangesAsync();
    }
}