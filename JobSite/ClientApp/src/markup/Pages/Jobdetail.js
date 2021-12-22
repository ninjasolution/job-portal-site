import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from './../Layout/PageTitle';
import axios from 'axios'
import { BaseURL } from '../../containers';
import authHeader from '../Element/AuthHeader';
var bnr =require('./../../images/banner/bnr1.jpg');

function Jobdetail() {

	const [jobDetail, setJobDetail] = useState('');
	const params = useParams();

	useEffect(() => {

		axios.get(`${BaseURL}/api/job/${params.id}`, { headers: authHeader() })
			.then(res => {
				setJobDetail(res.data)
			})
	}, [])

	return(
		<>
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")"}}>
					<PageTitle activeName="Job Detail" motherName="Home" />
				</div>
				<div className="content-block">
					<div className="section-full content-inner-1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4">
									<div className="sticky-top">
										<div className="row">
											<div className="col-lg-12 col-md-6">
												<div className="m-b30">
													<img src={require("./../../images/blog/grid/pic1.jpg")} alt="" />
												</div>
											</div>
											<div className="col-lg-12 col-md-6">
												<div className="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
													<h4 className="text-black font-weight-700 p-t10 m-b15">Job Details</h4>
													<ul>
														<li><i className="ti-location-pin"></i><strong className="font-weight-700 text-black">Address</strong><span className="text-black-light">
															{

                                                            }
														</span></li>
														<li><i className="ti-money"></i><strong className="font-weight-700 text-black">Salary</strong>
															{`$ ${jobDetail.jobMinSalary} - $ ${jobDetail.jobMaxSalary}`}
														</li>
														<li><i className="ti-shield"></i><strong className="font-weight-700 text-black">Experience</strong>
															{jobDetail.jobExperience} Year Experience
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="job-info-box">
										
										<h5 className="font-weight-600">Job Description</h5>
										<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
										<p>
											{jobDetail.description}
										</p>
										
										<h5 className="font-weight-600">Attached files</h5>
										<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
										<table>
											<tbody>
												{
													jobDetail.downloadUrls?.map((f, i) => (
														<tr key={i}>
															<td>
																{f.name}
															</td>
															<td><a target="_blank" href={f.downloadURL} className="m-l15 font-14"><i className="fa fa-download"></i></a></td>
														</tr>
													))
												}
											</tbody>
										</table>
										<Link to={"#"} className="site-button">Apply This Job</Link>
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
export default Jobdetail;