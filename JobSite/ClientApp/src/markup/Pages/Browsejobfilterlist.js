import React, { useEffect, useState}  from 'react';
import {Link} from 'react-router-dom';
import PageTitle from './../Layout/PageTitle';
import Accordsidebar from './../Element/Accordsidebar';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import logo from './../../images/logo/icon1.png';
import { BaseURL } from '../../containers';
import { loadJobAction } from '../../store/actions/JobActions';
import authHeader from '../Element/AuthHeader';
var bnr = require('./../../images/banner/bnr1.jpg');

function Browsejobfilterlist() {

	const dispatch = useDispatch();
	const jobs = useSelector(state => state.jobs);
	const [filteredJobs, setFilteredJobs] = useState([]);
	const [filterByTitle, setFilterByTitle] = useState('');
	const [filterByLocation, setFilterByLocation] = useState('')
	const [currentPage, setCurrentPage] = useState(0);
	const [paggination, setPaggination] = useState([]);
	const user = useSelector(state => state.auth.auth);

	const sort = 8;

	useEffect(() => {
		axios.get(`${BaseURL}/api/job`, { headers: authHeader() })
			.then(res => {
				dispatch(loadJobAction(res.data));
			})
		var i = 0;

		// Placeholder Animation Start
		var inputSelector = document.querySelectorAll('input, textarea');

		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('focus', function (event) {
				return this.parentElement.parentElement.classList.add("focused");
			});
		}

		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('blur', function (event) {
				var inputValue = this.value;
				if (inputValue === '') {
					this.parentElement.parentElement.classList.remove('filled');
					this.parentElement.parentElement.classList.remove('focused');
				} else {
					this.parentElement.parentElement.classList.add('filled');
				}
			});
		}

	}, []);

	const filter = job => {
		let isForMe = true;
		if (user.id && user.role.name === 'Candidater') {
			if (job.jobLocation === user.country) isForMe = true;
			else isForMe = false;
		}
		if (isForMe && job.jobTitle.toLowerCase().includes(filterByTitle.toLowerCase()) && (job.jobRegion.toLowerCase().includes(filterByLocation.toLowerCase()) || job.jobLocation.toLowerCase().includes(filterByLocation.toLowerCase()))) return true;
		else return false;
    }

	useEffect(() => {
		let cnt = jobs.length > sort ? sort : (jobs.length - currentPage * sort);
		setFilteredJobs(jobs.filter(j => filter(j)).slice(currentPage * sort, currentPage * sort + cnt));

	}, [jobs, filterByLocation, filterByTitle, currentPage]);

	useEffect(() => {
		let paggination = Array(Math.ceil(jobs.filter(j => filter(j)).length / sort))
			.fill()
			.map((_, i) => i + 1);
		setPaggination(paggination);

	}, [filteredJobs])

	return(
		<>
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")" }}>
					<PageTitle motherName="Home" activeName="Browse Job Filter Grid" />
				</div>


				<div className="section-full browse-job-find">
					<div className="container">
						<div className="find-job-bx">
							<form className="dezPlaceAni">
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="form-group">
											<label>Job Title, Keywords, or Phrase</label>
											<div className="input-group">
												<input type="text" value={filterByTitle} className="form-control" placeholder="" onChange={e => setFilterByTitle(e.target.value)} />
												<div className="input-group-append">
													<span className="input-group-text"><i className="fa fa-search"></i></span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="form-group">
											<label>City, State or ZIP</label>
											<div className="input-group">
												<input type="text" value={filterByLocation} className="form-control" placeholder="" onChange={e => setFilterByLocation(e.target.value)} />
												<div className="input-group-append">
													<span className="input-group-text"><i className="fa fa-map-marker"></i></span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-2 col-md-12">
										<button type="submit" className="site-button btn-block">Find Job</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>


				<div className="content-block">
					<div className="section-full browse-job p-b50">
						<div className="container">
							<div className="row">
								<Accordsidebar />
								<div className="col-xl-9 col-lg-8 col-md-7">
									<div className="job-bx-title clearfix">
										<h5 className="font-weight-700 pull-left text-uppercase">{filteredJobs.length} Jobs Found</h5>
										<div className="float-right">
											<span className="select-title">Sort by freshness</span>
											<select className="custom-btn">
												<option>Last 2 Months</option>
												<option>Last Months</option>
												<option>Last Weeks</option>
												<option>Last 3 Days</option>
											</select>
										</div>
									</div>
									<ul className="post-job-bx">
										{filteredJobs.map((item, index) => (
											<li key={index}>
												<div className="post-bx">
													<div className="d-flex m-b30">
														<div className="job-post-company">
															<Link to={""}><span>
																<img alt="" src={logo} />
															</span></Link>
														</div>
														<div className="job-post-info">
															<h4><Link to={`/job-detail/${item.id}`}>
																{
																	item.jobTitle
                                                                }
															</Link></h4>
															<ul>
																<li><i className="fa fa-map-marker"></i>
																	{
																		item.jobRegion
                                                                    }
																</li>
																<li><i className="fa fa-bookmark-o"></i>
																	{
																		item.jobType
                                                                    }
																</li>
																<li><i className="fa fa-clock-o"></i>
																	{
																		`${new Date(item.createAt).getFullYear()}/${new Date(item.createAt).getMonth()}/${new Date(item.createAt).getDate()} ${new Date(item.createAt).getHours()}:${new Date(item.createAt).getMinutes()}`
                                                                    }
																</li>
															</ul>
														</div>
													</div>
													<div className="d-flex">
														<div className="job-time mr-auto">
															<Link to={""}><span>
																{
																	item.jobType
                                                                }
															</span></Link>
														</div>
														<div className="salary-bx">
															<span>
																{
																	`$ ${item.jobMinSalary} - $ ${item.jobMaxSalary}`
                                                                }
															</span>
														</div>
													</div>
													<label className="like-btn">
														<input type="checkbox" />
														<span className="checkmark"></span>
													</label>
												</div>
											</li>
										))}	
									</ul>
									<div className="pagination-bx float-right m-t30">
										<ul className="pagination">
											<li className="previous"><Link to={""} onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}><i className="ti-arrow-left"></i> Prev</Link></li>
											{
												paggination.map((number, i) => (
													<li key={ i} className={`${currentPage === i ? "active" : ""} `}><Link to={""} onClick={() => setCurrentPage(i)}>
														{
															number
                                                        }
													</Link></li>

													))
                                            }
											<li className="next"><Link to={""} onClick={() => currentPage + 1 < paggination.length && setCurrentPage(currentPage + 1)}>Next <i className="ti-arrow-right"></i></Link></li>
										</ul>
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
export default Browsejobfilterlist;