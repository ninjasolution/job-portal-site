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
    public class CompanyController : ControllerBase
    {
        private CompanyService _service;

        public CompanyController(CompanyService service)
        {
            _service = service;
        }
        // GET: api/<CompanyController>
        [HttpGet]
        public List<Company> Get()
        {
            return _service.GetCompanies();
        }

        // GET api/<CompanyController>/5
        [HttpGet("{id}")]
        public Company Get(string id)
        {
            return _service.GetCompanyById(id);
        }

        // POST api/<CompanyController>
        [HttpPost]
        public void Post([FromBody] CompanyEdit value)
        {
            _service.EditProfile(value);
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
