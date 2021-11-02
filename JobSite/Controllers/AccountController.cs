using JobSite.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JobSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly JobSiteService _jobSiteService;
        public AccountController(JobSiteService service)
        {
            _jobSiteService = service;
        }
        // GET: api/<AccountController>
        [HttpGet]
        public IEnumerable<ApplicationUser> GetUsers()
        {
            return _jobSiteService.GetUsers();
        }

        // GET api/<AccountController>/5
        [HttpGet("{id}")]
        public ApplicationUser Get(ObjectId id)
        {
            return _jobSiteService.GetUserById(id);
        }

        // POST api/account/register
        [HttpPost]
        [Route("Register")]
        [Obsolete]
        public IActionResult Register(RegisterModel user)
        {

            try{
                // create user
                _jobSiteService.RegisterUser(user);
                return Ok();
            }
            catch (Exception ex)
            {
                // return error message if there was an exception
                return Ok(ex.Message);
            }

        }
        [HttpPost]
        [Route("Login")]
        public ApplicationUser Authenticate(AuthenticateModel user)
        {

            return _jobSiteService.Authenticate(user.Email, user.Password);

        }

        //// PUT api/<AccountController>/5
        //[HttpPut("{id}")]
        //public void Put(ObjectId id, ApplicationUser user)
        //{
        //    _jobSiteService.UpdateUser(id, user);
        //}

        // DELETE api/<AccountController>/5
        [HttpDelete("{id}")]
        public void Delete(ObjectId id)
        {
            _jobSiteService.RemoveUser(id);
        }
    }
}
