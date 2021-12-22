import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './../Layout/Footer';
import CompanySidebar from './CompanySidebar';

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
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-4 m-b30">
									<CompanySidebar/>
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