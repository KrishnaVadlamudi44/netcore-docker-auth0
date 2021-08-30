using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using netcore_react_docker.Models;

namespace netcore_react_docker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrivateController : ControllerBase
    {
        private readonly AuthSettings _authSettings;
        public PrivateController(IOptions<AuthSettings> authSettings) 
        {
            _authSettings = authSettings.Value;
        }

        [HttpGet]
        [Authorize("read:messages")]
        public IActionResult GetPrivateRoute()
        {

            return Ok(new AuthSettings()
            {
                Audience = _authSettings.Audience

            });
        }

    }
}