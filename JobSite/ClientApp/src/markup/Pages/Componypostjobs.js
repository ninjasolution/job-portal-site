import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Form}  from 'react-bootstrap';         

function Componypostjobs(){
	return(
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-4 m-b30">
									<div className="sticky-top">
										<div className="candidate-info company-info">
											<div className="candidate-detail text-center">
												<div className="canditate-des">
													<Link to={""}>
														<img alt="" src={require("./../../images/logo/icon3.jpg")} />
													</Link>
													<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
														<input type="file" className="update-flie" />
														<i className="fa fa-pencil"></i>
													</div>
												</div>
												<div className="candidate-title">
													<h4 className="m-b5"><Link to={""}>@COMPANY</Link></h4>
												</div>
											</div>
											<ul>
												<li><Link to={"/company-profile"}>
													<i className="fa fa-user-o" aria-hidden="true"></i> 
													<span>Company Profile</span></Link></li>
												<li><Link to={"/company-post-jobs"} className="active">
													<i className="fa fa-file-text-o" aria-hidden="true"></i> 
													<span>Post A Job</span></Link></li>
												<li><Link to={"/company-resume"}>
													<i className="fa fa-id-card-o" aria-hidden="true"></i>
													<span>Resume</span></Link></li>	
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx submit-resume">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Post A Job</h5>
										</div>
										<form>
											<div className="row">
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Job Title</label>
														<input type="text" className="form-control" placeholder="Enter Job Title" />
													</div>
												</div>
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Job Tags</label>
														<input type="text" className="form-control tags_input" />
														
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Job Type</label>
														<Form.Control as="select" custom className="custom-select">
															<option>Full Time</option>
															<option>Part Time</option>
															<option>Internship</option>
															<option>Freelance</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Experience</label>
														<Form.Control as="select" custom className="custom-select">
															<option>1 Years</option>
															<option>2 Years</option>
															<option>3 Years</option>
															<option>4 Years</option>
															<option>5 Years</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Minimum Salary ($):</label>
														<input type="email" className="form-control" placeholder="e.g. 10000" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Maximum Salary ($):</label>
														<input type="text" className="form-control" placeholder="e.g. 20000" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Region</label>
														<Form.Control as="select" custom className="custom-select">
															<option>New York</option>
															<option>London</option>
															<option>Los Angeles</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Location</label>
														<input type="text" className="form-control" placeholder="London" />
													</div>
												</div>
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Upload File</label>
														<div className="custom-file">
															<p className="m-a0">
																<i className="fa fa-upload"></i>
																Upload File
															</p>
															<input type="file" className="site-button form-control" id="customFile" />
														</div>
													</div>
												</div>
											</div>
											<button type="button" className="site-button m-b30">Upload</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			<Footer />
		</>
	)
}
export default Componypostjobs;