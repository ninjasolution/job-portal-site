import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import {Form} from 'react-bootstrap';
import CompanySidebar from './CompanySidebar';
import axios from 'axios';
import authHeader from '../Element/AuthHeader';
import { ALL_COUNTRY, BaseURL } from '../../containers';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function CompanyprofileEdit() {

	const params = useParams();
	const history = useHistory();

	const [ companyName, setCompanyName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ websiteUrl, setwebsiteUrl ] = useState('')
	const [ establishmentDate, setestablishmentDate ] = useState('');
	const [ category, setCategory ] = useState('');
	const [ country, setCountry ] = useState('');
	const [ description, setDescripttion  ] = useState('')
	const [ phoneNumber, setPhoneNumber ] = useState('');
	const [ contactEmail, setContactEmail ] = useState('');
	const [ contactCountry, setContactCountry ] = useState('');
	const [ contactCity, setcontactCity ] = useState('');
	const [ zip, setZip ] = useState('');
	const [ address, setAddress ] = useState('');
	const [ faceBookLink, setFacebookLink ] = useState('');
	const [ twitterLink, setTwitterLink ] = useState('');
	const [ googleLink, setGoogleLink ] = useState('');
	const [linkedinLink, setLinkedinLink] = useState('');

	const [profile, setProfile] = useState({});

	useEffect(() => {
		axios.get(`${BaseURL}/api/company/${params.id}`, { headers: authHeader() })
			.then(res => {
				setProfile(res.data);
			})
	}, [])

	useEffect(() => {
		setCompanyName(profile.companyName);
		setEmail(profile.email);
		setwebsiteUrl(profile.websiteUrl);
		setestablishmentDate(profile.establishmentDate);
		setCountry(profile.country);
		setDescripttion(profile.description);
		setPhoneNumber(profile.phoneNumber);
		setContactEmail(profile.contactEmail);
		setContactCountry(profile.contactCountry);
		setcontactCity(profile.contactCity);
		setZip(profile.zip);
		setAddress(profile.address);
		setFacebookLink(profile.faceBookLink);
		setGoogleLink(profile.googleLink);
		setLinkedinLink(profile.linkedinLink);
		setTwitterLink(profile.twitterLink);
	}, [profile])

	const saveProfile = (e) => {
		e.preventDefault();
		let socialLinks = [];
		if (faceBookLink !== '') {
			socialLinks.push(faceBookLink);
		}
		if (twitterLink !== '') {
			socialLinks.push(twitterLink);
		}
		if (googleLink !== '') {
			socialLinks.push(googleLink);
		}
		if (linkedinLink !== '') {
			socialLinks.push(linkedinLink);
		}
		const newCompany = {
			userId: params.id,
			companyName,
			email,
			country,
			category,
			phoneNumber,
			contactEmail,
			contactCountry,
			contactCity,
			zip,
			address,
			description,
			establishmentDate,
			websiteUrl,
			twitterLink,
			googleLink,
			faceBookLink,
			linkedinLink
		}
		axios.post(`${BaseURL}/api/company`, newCompany, { headers: authHeader() })
			.then(res => {
				history.push(`/company-profile/${params.id}`)
			});
	}

	//const updateAvatar = file => {
	//		const storageRef = ref(storage, `job-site-files/${file.name}`);
	//		uploadBytes(storageRef, file).then((snapshot) => {
	//			getDownloadURL(snapshot.ref).then(url => {
					
	//			})
	//		})
 //   }

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
											<h5 className="font-weight-700 pull-left text-uppercase">Company Profile</h5>
											<Link to={"/company-profile"} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>
										<form onSubmit={saveProfile}>
											<div className="row m-b30">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Company Name</label>
														<input type="text" placeholder={profile.companyName} value={companyName || ''} className="form-control" onChange={e => setCompanyName(e.target.value)} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Your Email</label>
														<input type="email" placeholder={profile.email} value={email || ''} className="form-control" onChange={e => setEmail(e.target.value)}/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Website</label>
														<input type="text" value={websiteUrl || ''} className="form-control" placeholder={profile.webSiteUrl} onChange={e => setwebsiteUrl(e.target.value)}/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Founded Date </label>
														<input type="date" placeholder={new Date(profile.establishmentDate)} value={establishmentDate || null} className="form-control" onChange={e => setestablishmentDate(e.target.value)} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Category</label>
														<Form.Control as="select" defaultValue={profile.category} value={category || ''} custom className="custom-select" onChange={e => setCategory(e.target.value)}>
															<option>Web Designer</option>
															<option>Web Developer1</option>
														</Form.Control>
													</div>
												</div>
												
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Description:</label>
														<textarea value={description || ''} defaultValue={profile.description} className="form-control" onChange={e => setDescripttion(e.target.value)} />
													</div>
												</div>
											</div>
											
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Contact Information</h5>
											</div>
											<div className="row m-b30">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Phone</label>
														<input type="text" value={phoneNumber || ''} className="form-control" placeholder={profile.phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Email</label>
														<input type="email" value={contactEmail || ''} className="form-control" placeholder={profile.contactEmail} onChange={e => setContactEmail(e.target.value)}/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Contry</label>
														<Autocomplete
															id="tags-standard"
															options={ALL_COUNTRY}
															autoSelect
															onChange={(evt, value) => setContactCountry(value)}
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
														<label>contactCity</label>
														<input type="text" value={contactCity || ''} className="form-control" placeholder={profile.contactCity} onChange={e => setcontactCity(e.target.value)} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Zip</label>
														<input type="text" value={zip || ''} className="form-control" placeholder={profile.zip} onChange={e => setZip(e.target.value)} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Address</label>
														<input type="text" value={address || ''} className="form-control" placeholder={profile.address} onChange={e => setAddress(e.target.value)} />
													</div>
												</div>
											</div>
											
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Social link</h5>
											</div>
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Facebook</label>
														<input type="text" value={faceBookLink || ''} className="form-control" placeholder={profile.faceBookLink } onChange={e => setFacebookLink(e.target.value)}/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Twitter</label>
														<input type="text" value={twitterLink || ''} className="form-control" placeholder={profile.twitterLink} onChange={e => setTwitterLink(e.target.value)}/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Google</label>
														<input type="text" value={googleLink || ''} className="form-control" placeholder={profile.googleLink} onChange={e => setGoogleLink(e.target.value)}/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Linkedin</label>
														<input type="text" value={linkedinLink || ''} className="form-control" placeholder={profile.linkedinLink} onChange={e => setLinkedinLink(e.target.value)}/>
													</div>
												</div>
											</div>
											<button type="submit" className="site-button m-b30">Update Setting</button>
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
export default CompanyprofileEdit;