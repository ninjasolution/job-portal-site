import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Profilesidebar from '../Element/Profilesidebar';
import axios from 'axios';
import { ALL_COUNTRY, ALL_LANGUAGES, BaseURL } from '../../containers';
import authHeader from '../Element/AuthHeader';
import { useSelector } from 'react-redux'
import { Form } from 'react-bootstrap';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


function JobprofileEdit(){

	const [ userName, setUserName ] = useState('');
	const [ proTitle, setProTitle ] = useState('');
	const [ languages, setLanguages ] = useState([]);
	const [ age, setAge ] = useState(0);
	const [ currentSalary, setCurrentSalary ] = useState(0);
	const [ expectedSalary, setExpectedSalary ] = useState(0);
	const [description, setDescription] = useState('');
	const [skills, setSkills] = useState([]);
	const [allSkills, setAllSkills] = useState([]);
	const [gender, setGender] = useState('');

	const [ phoneNumber, setPhoneNumber ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ country, setCountry ] = useState('');
	const [ city, setCity ] = useState('');
	const [ postCode, setPostCode ] = useState('');
	const [fullAddress, setFullAddress] = useState('');
	const user = useSelector(state => state.auth.auth)

	const history = useHistory();
	const params = useParams();

	const [profile, setProfile] = useState({});

	useMemo(() => {
		axios.get(`${BaseURL}/api/candidate/${params.id}`, { headers: authHeader() })
			.then(res => {
				setProfile(res.data);
			})
	}, [])

	useEffect(() => {
		setUserName(profile.userName);
		setProTitle(profile.proTitle);
		setLanguages(profile.languages);
		setAge(profile.age);
		setCurrentSalary(profile.currentSalary);
		setExpectedSalary(profile.expectedSalary);
		setDescription(profile.description);
		setSkills(profile.skills);
		setPhoneNumber(profile.phoneNumber);
		setEmail(profile.email);
		setCountry(profile.country);
		setCity(profile.city);
		setPostCode(profile.postCode);
		setFullAddress(profile.fullAddress);
	}, [profile])

	useEffect(() => {
		axios.get(`${BaseURL}/api/application/skills`, { headers: authHeader() })
			.then(res => {
				setAllSkills(res.data)
			});
	}, [])

	const saveProfile = (e) => {
		e.preventDefault();
		const newCandiate = {
			userId: user?.id,
			userName,
			proTitle,
			currentSalary: Number.parseFloat(currentSalary),
			expectedSalary: Number.parseFloat(expectedSalary),
			description,
			postCode,
			city,
			fullAddress,
			email,
			languages,
			age: Number.parseInt(age),
			phoneNumber,
			country,
			skills: skills.map(s => s.skillSetName)
		}

		axios.post(`${BaseURL}/api/candidate`, newCandiate, { headers: authHeader() })
			.then(res => {
				history.push(`/jobs-profile/${user.id}`)
			});
	}

	 
	return(
		<>	
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white browse-job p-t50 p-b20">
						<div className="container">
							<div className="row">
								<Profilesidebar /> 
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx job-profile">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Basic Information</h5>
											<Link to={`/jobs-profile/${user.id}`} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>
										<form onSubmit={saveProfile}>
											<div className="row m-b30">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Your Name:</label>
														<input type="text" value={userName || ''} className="form-control" placeholder={profile.userName} onChange={e => setUserName(e.target.value)} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Professional title:</label>
														<input type="text" value={proTitle || ''} className="form-control" placeholder={profile.proTitle} onChange={e => setProTitle(e.target.value)} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Languages:</label>
														<Autocomplete
															multiple
															id="tags-standard"
															options={ALL_LANGUAGES}
															autoSelect
															onChange={(evt, value) => setLanguages(value)}
															getOptionLabel={(option) => option}
															renderInput={(params) => (
																<TextField
																	{...params}
																	variant="standard"
																	placeholder="English"
																/>
															)}
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Gender:</label>
														<Form.Control as="select" value={gender || ''} custom onChange={e => setGender(e.target.value)}>
															<option defaultChecked>Male</option>
															<option>Female</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Your skills:</label>
														<Autocomplete
															multiple
															id="tags-standard"
															options={allSkills}
															autoSelect
															onChange={(evt, value) => setSkills(value)}
															getOptionLabel={(option) => option.skillSetName}
															renderInput={(params) => (
																<TextField
																	{...params}
																	variant="standard"
																	placeholder="React"
																/>
															)}
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Age:</label>
														<input type="number" value={age || 0} className="form-control" placeholder={profile.age} onChange={e => setAge(e.target.value)} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Current Salary($):</label>
														<input type="number" value={currentSalary || 0} className="form-control" placeholder={profile.currentSalary} onChange={e => setCurrentSalary(e.target.value)} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Expected Salary($):</label>
														<input type="number" value={expectedSalary || 0} className="form-control" placeholder={profile.expectedSalary} onChange={e => setExpectedSalary(e.target.value)} />
													</div>
												</div>
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Description:</label>
														<textarea value={description} placeholder={profile.description || ''} onChange={e => setDescription(e.target.value)} className="form-control">
														</textarea>
													</div>
												</div>
											</div>
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Contact Information</h5>
											</div>
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Phone:</label>
														<input type="text" value={phoneNumber || ''} onChange={e => setPhoneNumber(e.target.value)} className="form-control" placeholder={profile.phoneNumber} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Email Address:</label>
														<input type="text" value={email || ''} onChange={e => setEmail(e.target.value)} className="form-control" placeholder={profile.email} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Country:</label>
														<Autocomplete
															id="tags-standard"
															options={ALL_COUNTRY}
															autoSelect
															onChange={(evt, value) => setCountry(value)}
															getOptionLabel={(option) => option}
															renderInput={(params) => (
																<TextField
																	{...params}
																	variant="standard"
																	placeholder="Russia"
																/>
															)}
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Postcode:</label>
														<input type="text" value={postCode || ''} onChange={e => setPostCode(e.target.value)} className="form-control" placeholder={profile.postCode} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>City:</label>
														<input type="text" value={city || ''} onChange={e => setCity(e.target.value)} className="form-control" placeholder={profile.city} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Full Address:</label>
														<input type="text" value={fullAddress || ''} onChange={e => setFullAddress(e.target.value)} className="form-control" placeholder={profile.fullAddress} />
													</div>
												</div>
											</div>
											<button className="site-button m-b30" type="submit">Save Profile</button>
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
export default JobprofileEdit;