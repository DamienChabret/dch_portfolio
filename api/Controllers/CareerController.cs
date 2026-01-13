using api.Models;
using api.Services;
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
         List<Career> careerList = await _careerService.GetAll();
         return Ok(careerList);
      }

      [HttpGet("{id}")]
      public async Task<IActionResult> GetById(string id)
      {
         try
         {
            Career career = await _careerService.GetById(id);
            return Ok(career);
         }
         catch (Exception e)
         {
            return BadRequest(e.Message);
         }
      }

      [HttpPost]
      public async Task<IActionResult> Create([FromBody] Career career)
      {
         try
         {
            await _careerService.Create(career);
            return Ok(career);
         }
         catch(Exception e)
         {
            return BadRequest(e.Message);
         }
      }
   }
}
