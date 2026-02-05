using api.Models;
using api.Services;
using api.Exceptions;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/projects")]
    public class ProjectController(ProjectService _projectService) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                List<Project> projects = await _projectService.GetAll();
                return Ok(projects);
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
                Project project = await _projectService.GetById(id);
                return Ok(project); 
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
        public async Task<IActionResult> Create([FromBody] Project newProject)
        {
            try
            {
                await _projectService.Create(newProject);
                return Ok(newProject);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}