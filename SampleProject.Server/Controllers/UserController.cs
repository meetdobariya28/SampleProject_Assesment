using Microsoft.AspNetCore.Mvc;
using SampleProject.Server.Services;
using SampleProject.Server.Models;

namespace SampleProject.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> SubmitUser([FromBody] User user)
        {
            if(!ModelState.IsValid) //Invalid state
            {  
                return BadRequest(ModelState);
            }

            var result = await _userService.SubmitUserAsync(user);
            return Ok(result); //Status: 200
        }
    }
}
