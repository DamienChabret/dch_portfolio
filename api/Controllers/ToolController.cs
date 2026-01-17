using api.Models;
using api.Services;
using api.Exceptions;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/tools")]
    public class ToolController(ToolService _toolService) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                List<Tool> tools = await _toolService.GetAll();
                return Ok(tools);
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
                Tool tool = await _toolService.GetById(id);
                return Ok(tool); 
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
        public async Task<IActionResult> Create([FromBody] Tool newTool)
        {
            try
            {
                await _toolService.Create(newTool);
                return Ok(newTool);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}