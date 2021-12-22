import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Layout/Footer';
import axios from 'axios'
import { BaseURL } from '../../containers';
import authHeader from '../Element/AuthHeader';

var bnr = require('./../../images/background/bg3.jpg');
//var bnr2 = require('./../../images/background/bg3.jpg');

function Companyprofile(){

	const params = useParams();
	const [profile, setProfile] = useState('');

	useEffect(() => {
		axios.get(`${BaseURL}/api/company/${params.id}`, { headers: authHeader() })
			.then(res => {
				setProfile(res.data);
			})
	}, [])

	return(
		<>
			<div className="page-content">
				
				<div className="overlay-black-dark profile-edit p-t50 p-b20" style={{backgroundImage:"url("+bnr+")"}}>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-7 candidate-info">
								<div className="candidate-detail">
									<div>
										<Link to={""}>
											<img alt="" src={require("./../../images/gallery/pic8.jpg")}/>
										</Link>
									</div>

									<div className="text-white browse-job text-left">
										<h4 className="m-b0">
											{
												profile.userName
                                            }
										</h4>
										<p className="m-b15">Freelance Senior PHP Developer at various agencies</p>
										<ul className="clearfix">
											<li><i className="ti-location-pin"></i>
												{
													profile.address
                                                }
											</li>
											<li><i className="ti-mobile"></i>
												{
													profile.phoneNumber
                                                }
											</li>
											<li><i className="ti-briefcase"></i> Fresher</li>
											<li><i className="ti-email"></i>
												{
													profile.email
                                                }
											</li>
										</ul>
										<div className="progress-box m-t10">
											<div className="progress-info">Profile Strength (Average)<span>70%</span></div>
											<div className="progress">
												<div className="progress-bar bg-primary" style={{width: "80%",}} role="progressbar" ></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-5">
								<Link to={""}>
									<div className="pending-info text-white p-a25">
										<h5>Pending Action</h5>
										<ul className="list-check secondry">
											<li>Verify Mobile Number</li>
											<li>Add Preferred Location</li>
											<li>Add Resume</li>
										</ul>
									</div>
								</Link>
							</div>
						</div>
					</div>
					
				</div>
				
				<div className="content-block">
					<div className="section-full browse-job content-inner-2">
						<div className="container">
							<div className="row">
							
								<div className="col-12">
									
									<div className="job-bx bg-white m-b30">
										<div className="d-flex">
											<h5 className="m-b10">COMPANY PROFILE</h5>
											<Link to={`/company-profile-edit/${params.id}`} className="site-button add-btn button-sm">
												<i className="fa fa-pencil m-r5"></i> Edit
											</Link>			
										</div>
										
										<div className="list-row">
											<div className="list-line">
												<div className="d-flex">
													<h6 className="font-14 m-b5">Company Name</h6>
													
												</div>
												<p className="m-b0">
													{
														profile.companyName
                                                    }
												</p>
												
												
											<div className="list-line">
												<div className="d-flex">
													<h6 className="font-14 m-b5">Company Email</h6>
												</div>
													<p className="m-b0">
														{
															profile.email
                                                        }
													</p>
												
												
											</div>
											<div className="list-line">
												<div className="d-flex">
													<h6 className="font-14 m-b5">Website</h6>
												</div>
													<p className="m-b0">
														{
															profile.webSiteUrl
                                                        }
													</p>
												
												
											</div>
											<div className="list-line">
												<div className="d-flex">
													<h6 className="font-14 m-b5">Founded Date</h6>
												</div>
													<p className="m-b0">
														{
															profile.establishmentDate
                                                        }
													</p>
												
												
											</div>
											<div className="list-line">
												<div className="d-flex">
													<h6 className="font-14 m-b5">Category</h6>
												</div>
													<p className="m-b0">
														{
															profile.category
                                                        }
													</p>
												
												
											</div>
											<div className="list-line">
												<div className="d-flex">
													<h6 className="font-14 m-b5">Country</h6>
												</div>
													<p className="m-b0">
														{
															profile.contactCountry
                                                        }
													</p>
												
												
											</div>
											<div className="list-line">
												<div className="d-flex">
													<h6 className="font-14 m-b5">Description</h6>
												</div>
													<p className="m-b0">
														{
															profile.description
                                                        }
													</p>
											</div>
										</div>
									</div>
									
								</div>
								<div  className="job-bx bg-white m-b30 col-12">
									<div className="d-flex">
										<h5 className="m-b30">CONTACT INFORMATION</h5>
									</div>
									
									
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-6">
											<div className="clearfix m-b20">
												<label className="m-b0">Phone</label>
													<span className="clearfix font-13">
														{
															profile.phoneNumber
                                                        }
													</span>
											</div>
											<div className="clearfix m-b20">
												<label className="m-b0">Email</label>
													<span className="clearfix font-13">
														{
															profile.contactEmail
                                                        }
													</span>
											</div>
											<div className="clearfix m-b20">
												<label className="m-b0">Country</label>
													<span className="clearfix font-13">
														{
															profile.contactCountry
                                                        }
													</span>
											</div>
											<div className="clearfix m-b20">
												<label className="m-b0">City</label>
													<span className="clearfix font-13">
														{
															profile.contactCity
                                                        }
													</span>
											</div>
											<div className="clearfix m-b20">
												<label className="m-b0">Zip</label>
													<span className="clearfix font-13">
														{
															profile.zip
                                                        }
													</span>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6">
											<div className="clearfix m-b20">
												<label className="m-b0">Facebook</label>
													<span className="clearfix font-13">
														{
															profile.faceBookLink
                                                        }
													</span>
											</div>
											<div className="clearfix m-b20">
												<label className="m-b0">Twitter</label>
													<span className="clearfix font-13">
														{
															profile.twitterLink
                                                        }
													</span>
											</div>
											<div className="clearfix m-b20">
												<label className="m-b0">Google</label>
													<span className="clearfix font-13">
														{
															profile.googleLink
                                                        }
													</span>
											</div>
											<div className="clearfix m-b20">
												<label className="m-b0">Linkedin</label>
													<span className="clearfix font-13">
														{
															profile.linkedinLink
                                                        }
													</span>
											</div>
											
										</div>
									</div>
									
								</div>
							
								
							</div>
						</div>
					</div>
					
				</div>
				
			</div>	
				
			</div>	
		</>
	)
}
export default Companyprofile;