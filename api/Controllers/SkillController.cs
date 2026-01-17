using api.Models;
using api.Services;
using api.Exceptions;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/skills")]
    public class SkillController(SkillService _skilLService) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                List<Skill> skills = await _skilLService.GetAll();
                return Ok(skills);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            try
            {
                Skill skill = await _skilLService.GetById(id);
                return Ok(skill); 
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
        public async Task<IActionResult> Create([FromBody] Skill newSkill)
        {
            try
            {
                await _skilLService.Create(newSkill);
                return Ok(newSkill);
            }
            catch (ExceptionItemAlreadyExist e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}