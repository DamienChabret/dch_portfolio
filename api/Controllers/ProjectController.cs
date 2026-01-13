using api.Models;
using api.Services;
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
                List<Project> projectList = await _projectService.GetAll();
                return Ok(projectList);
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
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Project project)
        {
            try
            {
                await _projectService.Create(project);
                return Ok(project);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}