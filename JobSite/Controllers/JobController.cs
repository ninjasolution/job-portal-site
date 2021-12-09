using JobSite.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JobSite.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        private JobService _service;

        public JobController(JobService service)
        {
            _service = service;
        }
        // GET: api/<CompanyController>
        [HttpGet]
        public List<PostJob> Get()
        {
            return _service.GetJobs();
        }

        // GET api/<CompanyController>/5
        [HttpGet("{id}")]
        public PostJobDetail Get(string id)
        {
            return _service.GetJobById(id);
        }

        // POST api/<CompanyController>
        [HttpPost]
        public void Post([FromBody] PostJob value)
        {
            _service.CreateJob(value);
        }

        // PUT api/<CompanyController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CompanyController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
