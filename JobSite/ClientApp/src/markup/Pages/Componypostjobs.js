import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import {Form}  from 'react-bootstrap';         
import axios from 'axios'
import CompanySidebar from './CompanySidebar';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ALL_COUNTRY, ALL_REGIONS, BaseURL } from '../../containers';
import authHeader from '../Element/AuthHeader';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../services/firebaseService';
import { useSelector } from 'react-redux'

function Componypostjobs(){

	const [ jobTitle, setJobTitle ] = useState('');
	const [selectedSkills, setSelectedSkills] = useState([]);
	const [allSkills, setAllSkills] = useState([]);
	const [ jobType, setJobType ] = useState('Full Time');
	const [ jobExperience, setJobExperience ] = useState(1);
	const [ jobMinSalary, setJobMinSalary ] = useState(0);
	const [ jobMaxSalary, setJobMaxSalary ] = useState(0);
	const [ jobRegion, setJobRegion ] = useState('New York');
	const [ jobLocation, setJobLocation ] = useState('');
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [description, setDescription] = useState('');
	const [downloadUrls, setDownloadUrls] = useState([]);
	const user = useSelector(state => state.auth.auth);
	const history = useHistory();

	const [profile, setProfile] = useState({});

	useEffect(() => {
		axios.get(`${BaseURL}/api/company/${user.id}`, { headers: authHeader() })
			.then(res => {
				setProfile(res.data);
			})
	}, [])

	const uploadJob = () => {
		if (selectedFiles.length > 0) {
			selectedFiles.forEach((f, id) => {
				const storageRef = ref(storage, `job-site-files/${f.name}`);
				uploadBytes(storageRef, f).then((snapshot) => {
					getDownloadURL(snapshot.ref).then(url => {
						let urls = downloadUrls;
						urls.push({ id, name: f.name, downloadURL: url });
						setDownloadUrls(urls);
						if (selectedFiles.length === urls.length) {
							createJob();
							return;
						}
					})
				})
			})
		} else {
			createJob();
        }
		
	}

	const createJob = () => {
		const newJob = {
			companyId: profile.id,
			jobTitle,
			jobType,
			jobExperience: Number.parseInt(jobExperience),
			jobMinSalary: Number.parseFloat(jobMinSalary),
			jobMaxSalary: Number.parseFloat(jobMaxSalary),
			jobRegion,
			jobLocation,
			description,
			downloadUrls,
			skills: selectedSkills.map(s => s.skillSetName)
		}
		axios.post(`${BaseURL}/api/job`, newJob, { headers: authHeader() })
			.then(res => {
				history.push('/');
			})
    }

	
	const removeFile = name => {
		setSelectedFiles(selectedFiles.filter(f => f.name !== name))
    }

	const onAddSkill = (event, value) => {
		setSelectedSkills(value);
	}

	useEffect(() => {

		axios.get(`${BaseURL}/api/application/skills`, { headers: authHeader() })
		 	.then(res => {
		 		setAllSkills(res.data);
			  })
	}, [])

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
									<div className="job-bx submit-resume">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Post A Job</h5>
										</div>
										<form>
											<div className="row">
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Job Title</label>
														<input type="text" className="form-control" placeholder="Enter Job Title" value={jobTitle} onChange={e => setJobTitle(e.target.value)}/>
													</div>
												</div>
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Description</label>
														<textarea value={description} className="form-control" onChange={e => setDescription(e.target.value)} />
													</div>
												</div>
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Job Tags</label>
														<Autocomplete
															multiple
															id="tags-standard"
															options={allSkills}
															autoSelect
															onChange={onAddSkill}
															getOptionLabel={(option) => option.skillSetName}
															renderInput={(params) => (
															<TextField
																{...params}
																variant="standard"
																placeholder="Skill"
															/>
															)}
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Job Type</label>
														<Form.Control as="select" value={jobType} custom className="custom-select" onChange={e => setJobType(e.target.value)}>
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
														<Form.Control as="select" value={jobExperience} custom className="custom-select" onChange={e => setJobExperience(e.target.value)}>
															<option value={1}>1 Years</option>
															<option value={2}>2 Years</option>
															<option value={3}>3 Years</option>
															<option value={4}>4 Years</option>
															<option value={5}>5 Years</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Minimum Salary ($):</label>
														<input type="number" value={jobMinSalary} className="form-control" placeholder="10000" onChange={e => setJobMinSalary(e.target.value)}/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Maximum Salary ($):</label>
														<input type="number" value={jobMaxSalary} className="form-control" placeholder="20000" onChange={e => setJobMaxSalary(e.target.value)}/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Region</label>
														<Autocomplete
															options={ALL_REGIONS}
															autoSelect
															onChange={(evt, value) => setJobRegion(value)}
															getOptionLabel={(option) => option}
															renderInput={(params) => (
																<TextField
																	{...params}
																	variant="standard"
																	placeholder="Region"
																/>
															)}
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Country</label>
														<Autocomplete
															id="tags-standard"
															options={ALL_COUNTRY}
															autoSelect
															onChange={(evt, value) => setJobLocation(value)}
															getOptionLabel={(option) => option}
															renderInput={(params) => (
																<TextField
																	{...params}
																	variant="standard"
																	placeholder="Skill"
																/>
															)}
														/>
													</div>
												</div>

												<div className="col-lg-12 col-md-12">
													<table>
														<tbody>
														{
															selectedFiles.map((f, i) => (
																<tr key={i}>
																	<td>
																		{ f.name }
																	</td>
																	<td><Link to={"#"} className="m-l15 font-14" onClick={() => removeFile(f.name)} ><i className="fa fa-close"></i></Link></td>
																</tr>
																))
                                                        }
														
														</tbody>
													</table>
													<div className="form-group">
														<label>Upload File</label>
														<div className="custom-file">
															<p className="m-a0">
																<i className="fa fa-upload"></i>
																Upload File
															</p>
															<input multiple type="file" className="site-button form-control" id="attatchedFile" onChange={e => setSelectedFiles([...selectedFiles, ...e.target.files])} />
														</div>
													</div>
												</div>
											</div>
											<button type="button" className="site-button m-b30" onClick={uploadJob}>Upload</button>
										</form>
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
export default Componypostjobs;