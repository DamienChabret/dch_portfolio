using api.Models;
using api.Services;
using api.Exceptions;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/degrees")]
    public class DegreeController(DegreeService _degreeService): ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            List<Degree> degrees = await _degreeService.GetAll();
            return Ok(degrees);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            try
            {
                Degree degree = await _degreeService.GetById(id);
                return Ok(degree);
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

        [HttpPut]
        public async Task<IActionResult> Create([FromBody] Degree newDegree)
        {
            try
            {
                await _degreeService.Create(newDegree);
                return Ok(newDegree);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}