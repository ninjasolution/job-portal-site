import React from 'react';
import {Link} from 'react-router-dom';
import { Accordion,Card } from 'react-bootstrap';

function Accordsidebar(){
	return(
		<div className="col-xl-3 col-lg-4 col-md-5 m-b30">
			<aside id="accordion1" className="sticky-top sidebar-filter bg-white">
				<Accordion defaultActiveKey="0">
					<h6 className="title"><i className="fa fa-sliders m-r5"></i> Refined By <Link to={""} className="font-12 float-right">Reset All</Link></h6>
					
						<Accordion.Toggle as={Card} eventKey="0">
							<div className="acod-head">
								<h6 className="acod-title"> 
									<Link data-toggle="collapse" to="#companies">Companies</Link>
								</h6>	
							</div>
						</Accordion.Toggle>
						
						<Accordion.Collapse eventKey="0">
							<div id="companies" className="acod-body collapse show">
								<div className="acod-content">
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="companies1" type="checkbox" name="checkbox-companies" />
										<label className="custom-control-label" htmlFor="companies1">Job Mirror Consultancy <span>(50)</span> </label>
									</div>
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="companies2" type="checkbox" name="checkbox-companies" />
										<label className="custom-control-label" htmlFor="companies2">Engineering Group <span>(80)</span> </label>
									</div>
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="companies3" type="checkbox" name="checkbox-companies" />
										<label className="custom-control-label" htmlFor="companies3">Electric Co. <span>(235)</span> </label>
									</div>
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="companies4" type="checkbox" name="checkbox-companies" />
										<label className="custom-control-label" htmlFor="companies4">Telecom industry <span>(568)</span></label>
									</div>
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="companies5" type="checkbox" name="checkbox-companies" />
										<label className="custom-control-label" htmlFor="companies5">Safety/ Health <span>(798)</span></label>
									</div>
								</div>
							</div>
						</Accordion.Collapse>
						
						<Accordion.Toggle as={Card} eventKey="1">
							<div className="acod-head">
								<h6 className="acod-title"> 
									<a data-toggle="collapse" href="#experience" className="collapsed">Experience</a>
								</h6>
							</div>
						</Accordion.Toggle>
						 <Accordion.Collapse eventKey="1">
							<div id="experience" className="acod-body collapse show">
								<div className="acod-content">
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="one-years" type="radio" name="radio-years" />
										<label className="custom-control-label" htmlFor="one-years">0-1 Years <span>(120)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="two-years" type="radio" name="radio-years" />
										<label className="custom-control-label" htmlFor="two-years">1-2 Years <span>(300)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="three-years" type="radio" name="radio-years" />
										<label className="custom-control-label" htmlFor="three-years">2-3 Years <span>(235)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="four-years" type="radio" name="radio-years" />
										<label className="custom-control-label" htmlFor="four-years">3-4 Years <span>(568)</span></label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="five-years" type="radio" name="radio-years" />
										<label className="custom-control-label" htmlFor="five-years">4-5 Years <span>(798)</span></label>
									</div>
								</div>
							</div>
						</Accordion.Collapse>
						
						<Accordion.Toggle as={Card} eventKey="2">
							<div className="acod-head">
								<h6 className="acod-title"> 
									<a data-toggle="collapse"  href="#salary" className="collapsed" >
										Salary 
									</a>
								</h6>
							</div>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="2">
							<div id="salary" className="acod-body collapse show">
								<div className="acod-content">
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="salary-op1" type="radio" name="radio-currency" />
										<label className="custom-control-label" htmlFor="salary-op1">0-1 lacs <span>(120)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="salary-op2" type="radio" name="radio-currency" />
										<label className="custom-control-label" htmlFor="salary-op2">1-2 lacs <span>(300)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="salary-op3" type="radio" name="radio-currency" />
										<label className="custom-control-label" htmlFor="salary-op3">2-3 lacs <span>(235)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="salary-op4" type="radio" name="radio-currency" />
										<label className="custom-control-label" htmlFor="salary-op4">3-4 lacs <span>(568)</span></label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="salary-op5" type="radio" name="radio-currency" />
										<label className="custom-control-label" htmlFor="salary-op5">4-5 lacs <span>(798)</span></label>
									</div>
								</div>
							</div>
						</Accordion.Collapse>
						<Accordion.Toggle as={Card} eventKey="3">
							<div className="acod-head">
								<h6 className="acod-title"> 
									<a data-toggle="collapse"  href="#job-function" className="collapsed" >
										Job Function 
									</a>
								</h6>
							</div>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="3">
							<div id="job-function" className="acod-body collapse show">
								<div className="acod-content">
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="function-services-1" type="radio" name="radio-function" />
										<label className="custom-control-label" htmlFor="function-services-1">Production Management <span>(120)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="function-services-2" type="radio" name="radio-function" />
										<label className="custom-control-label" htmlFor="function-services-2">Design Engineering <span>(300)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="function-services-3" type="radio" name="radio-function" />
										<label className="custom-control-label" htmlFor="function-services-3">Safety/ Health <span>(235)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="function-services-4" type="radio" name="radio-function" />
										<label className="custom-control-label" htmlFor="function-services-4">Engineering <span>(568)</span></label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="function-services-5" type="radio" name="radio-function" />
										<label className="custom-control-label" htmlFor="function-services-5">Product Development <span>(798)</span></label>
									</div>
								</div>
							</div>
						</Accordion.Collapse>
						<Accordion.Toggle as={Card} eventKey="4">
							<div className="acod-head">
								<h6 className="acod-title"> 
									<a data-toggle="collapse"  href="#industry" className="collapsed" >
										Industry 
									</a>
								</h6>
							</div>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="4">
							<div id="industry" className="acod-body collapse show">
								<div className="acod-content">
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="industry1" type="radio" name="radio-industry" />
										<label className="custom-control-label" htmlFor="industry1">Telecom <span>(5)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="industry2" type="radio" name="radio-industry" />
										<label className="custom-control-label" htmlFor="industry2">Consulting Services <span>(10)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="industry3" type="radio" name="radio-industry" />
										<label className="custom-control-label" htmlFor="industry3">Engineering/Projects <span>(15)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="industry4" type="radio" name="radio-industry" />
										<label className="custom-control-label" htmlFor="industry4">Manufacturing/Industrial <span>(12)</span></label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="industry5" type="radio" name="radio-industry" />
										<label className="custom-control-label" htmlFor="industry5">Architecture/Interior Design <span>(8)</span></label>
									</div>
								</div>
							</div>
						</Accordion.Collapse>
						
				</Accordion>
				
			</aside>	
		</div>
	)
}
export default Accordsidebar; 