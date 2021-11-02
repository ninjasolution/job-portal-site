import React from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header';
import Footer from './../Layout/Footer';

const postResume = [
	{ title: 'Tammy Dixon', },
	{ title: 'John Doe', },
	{ title: 'Ali Tufan', },
	{ title: 'David kamal', },
	{ title: 'Tammy Dixon', },
	{ title: 'John Doe', },
	{ title: 'David kamal', },
	{ title: 'Ali Tufan', },
]

function Companyresume(){
	return(
		<>
			<Header2 />
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
												<li><Link to={"/company-post-jobs"}>
													<i className="fa fa-file-text-o" aria-hidden="true"></i> 
													<span>Post A Job</span></Link></li>
												<li><Link to={"/company-resume"} className="active">
													<i className="fa fa-id-card-o" aria-hidden="true"></i>
													<span>Resume</span></Link></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx clearfix">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Resume</h5>
											<Link to={"/company-manage-job"} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>
										<ul className="post-job-bx browse-job-grid post-resume row">
											{postResume.map((item,index)=>(
												<li className="col-lg-6 col-md-6" key={index}>
													<div className="post-bx">
														<div className="d-flex m-b20">
															<div className="job-post-info">
																<h5 className="m-b0"><Link to={"/jobs-profile"}>{item.title}</Link></h5>
																<p className="m-b5 font-13">
																	<Link to={""} className="text-primary">UX / UI Designer </Link>
																	at Atract Solutions</p>
																<ul>
																	<li><i className="fa fa-map-marker"></i>Sacramento, California</li>
																	<li><i className="fa fa-money"></i> $ 2500</li>
																</ul>
															</div>
														</div>
														<div className="job-time m-t15 m-b10">
															<Link to={""} className="mr-1"><span>PHP</span></Link>
															<Link to={""} className="mr-1"><span>Angular</span></Link>
															<Link to={""} className="mr-1"><span>Bootstrap</span></Link>
														</div>
														<Link to={"/files/pdf-sample.pdf"} target="blank" className="job-links">
															<i className="fa fa-download"></i>
														</Link>
													</div>
												</li>
											))}
											
										</ul>
										<div className="pagination-bx float-right">
											<ul className="pagination">
												<li className="previous"><Link to={""}><i className="ti-arrow-left"></i> Prev</Link></li>
												<li className="active"><Link to={""}>1</Link></li>
												<li><Link to={""}>2</Link></li>
												<li><Link to={""}>3</Link></li>
												<li className="next"><Link to={""}>Next <i className="ti-arrow-right"></i></Link></li>
											</ul>
										</div>
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
export default Companyresume;