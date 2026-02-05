using api.Models;
using api.Services;
using api.Exceptions;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
   [ApiController]
   [Route("api/careers")]
   public class CareerController(CareerService _careerService): ControllerBase
   {
      [HttpGet]
      public async Task<IActionResult> GetAll()
      {
         List<Career> careers = await _careerService.GetAll();
         return Ok(careers);
      }

      [HttpGet("{id}")]
      public async Task<IActionResult> GetById(string id)
      {
         try
         {
            Career career = await _careerService.GetById(id);
            return Ok(career);
         }
         catch (ExceptionItemNotFound e)
         {
            return NotFound(e.Message);
         }
         catch (Exception e)
         {
            return BadRequest(e.Message);
         }
      }

      [HttpPost]
      public async Task<IActionResult> Create([FromBody] Career newCareer)
      {
         try
         {
            await _careerService.Create(newCareer);
            return Ok(newCareer);
         }
         catch(Exception e)
         {
            return BadRequest(e.Message);
         }
      }
   }
}
