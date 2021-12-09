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
    public class CandidateController : ControllerBase
    {
        private CandidateService _service;
        public CandidateController(CandidateService service)
        {
            _service = service;
        }
        // GET: api/<CandidateController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<CandidateController>/5
        [HttpGet("{id}")]
        public Candidate Get(string id)
        {
            return _service.GetCandidateById(id);
        }

        // POST api/<CandidateController>
        [HttpPost]
        public void Post([FromBody] CandidateEdit value)
        {
            _service.EditProfile(value);
        }

        // PUT api/<CandidateController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CandidateController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
