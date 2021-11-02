import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import { BaseURL } from '../../containers/index';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { loginAction } from '../../actions/AuthActions';
import { push } from 'react-router-redux'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {Form} from 'react-bootstrap';
// refresh token

const clientId =
	'1067687915662-c55850gp9n60cseoplq2b95qeh1rsco9.apps.googleusercontent.com';
const publicEmails = [
	'gmail',
	'yahoo',
	'outlook',
	'inbox',
	'gmail',
	'icloud',
	'mail',
	'zoho',
	'aol',
	'yandex',
	'hotmail',
	'live',
]

var bnr = require('./../../images/background/bg6.jpg');
toast.configure()

const Authenticate = () => {

	const [selectedPage, setSelectPage] = useState(true);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();
	const [userRole, setUserRole] = useState('Candidater');

	// Set to 10sec
	//toast.warning('Danger', { autoClose: 10000 })
	// Set to 3sec
	// toast.success('successful', { autoClose: 3000 })
	// User have to close it
	//toast.info('GeeksForGeeks', { autoClose: false })
	//toast.error('Runtime error', {
	//	// Set to 15sec
	//	position: toast.POSITION.BOTTOM_LEFT, autoClose: 15000
	//})
	//toast('Sucessed your registeration!')// Default

	const onRegister = (e) => {

		e.preventDefault();

		if(userRole === 'Employeer'){
			const companeyName = email.split('@')[1].split('.')[email.split('@')[1].split('.').length - 2];
			if(publicEmails.includes(companeyName)){
				toast.error('Please use your company email', { autoClose: 3000 });
				return;
			}
		}else if(userRole === 'Administrator') {
			if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.edu)+$/.test(email)) 
			toast.error('Please use your .edu email', { autoClose: 3000 });
			return;
		}
		const newUser = {
			FirstName: firstName,
			LastName: lastName,
			Email: email,
			Password: password,
			Roles: [ userRole ]
		};
		axios.post(`${BaseURL}/api/account/register`, newUser)
			.then((response) => {
				console.log(response)
				if (response.data) {
					toast.error(response.data, { autoClose: 3000 });
					//toast.success('successful', { autoClose: 3000 });
					return;
				}
				setSelectPage(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const onSuccess = (res) => {
		
		//toast.success('your authenticate is sucessed', { autoClose: 3000 })
		dispatch(loginAction(res.profileObj))
		history.push('/');
	};

	const onFailure = (res) => {
		console.log('Login failed: res:', res);
		//toast.warning('your authenticte is failed', { autoClose: 3000 })
	};

	const responseFacebook = (response) => {
		console.log(response);
		if (response.accessToken) {
			//toast.success('your authenticate is sucessed', { autoClose: 3000 })
			dispatch(loginAction(response))
			history.push('/');
		} else {
			//toast.warning('your authenticte is failed', { autoClose: 3000 })
		}
	}

	const onLogin = (e) => {

		e.preventDefault();

		const User = {
			Email: email,
			Password: password
		};
		axios.post(`${BaseURL}/api/account/login`, User)
			.then((response) => {
				if (response.status === 200) {
					//toast.success('successful', { autoClose: 3000 });
					//setSelectPage(true);
					history.push('/');
					dispatch(loginAction(response.data))
					return;
				}
				//toast.error('failure', { autoClose: 3000 });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return(
		<div className="page-wraper">

			<div className="browse-job login-style3">
					
				<div className="bg-img-fix" style={{ backgroundImage: `url(${bnr})`, height: "100vh" }}>
					{
						selectedPage ? (
							<div className="row">
								<div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 bg-white z-index2 relative p-a0 content-scroll skew-section left-bottom">
									<div className="login-form style-2" style={{ justifyContent: 'center', margin: 'auto' }}>
										<div className="logo-header text-center p-tb30">
											<Link to={"./"}><img src={require("./../../images/logo.png")} alt="" /></Link>
										</div>
										<div className="clearfix"></div>
										<div className="tab-content nav p-b30 tab">
											<div id="login" className="tab-pane active ">
												<form className=" dez-form p-b30" onSubmit={onLogin}>
													<h3 className="form-title m-t0">Personal Information</h3>
													<div className="dez-separator-outer m-b5">
														<div className="dez-separator bg-primary style-liner"></div>
													</div>
													<p>Enter your e-mail address and your password. </p>
													<div className="form-group">
														<input name="email" className="form-control" placeholder="User Email" type="text" defaultValue={email} onChange={e => setEmail(e.target.value)} required/>
													</div>
													<div className="form-group">
														<input name="password" className="form-control " placeholder="Type Password" type="password" defaultValue={password} onChange={e => setPassword(e.target.value)} required/>
													</div>
													<div className="form-group text-left">
														<button type="submit" className="site-button dz-xs-flex m-r5" >login</button>
														<span className="custom-control custom-checkbox">
															<input type="checkbox" className="custom-control-input" id="check1" name="example1" />
															<label className="custom-control-label" htmlFor="check1">Remember me</label>
														</span>
														<Link data-toggle="tab" to="#forgot-password" className="forget-pass m-l5"><i className="fa fa-unlock-alt"></i> Forgot Password</Link>
													</div>
													<div className="dz-social clearfix">
														<h5 className="form-title m-t5 pull-left">Sign In With</h5>
														<ul className="dez-social-icon dez-border pull-right dez-social-icon-lg text-white">
															
															<li>
																<GoogleLogin
																	clientId={clientId}
																	render={(renderProps) => (
																		<Link to={''} className="fa fa-google-plus  gplus-btn" target="bank" onClick={() => renderProps.onClick()}></Link>
																		)
																	}
																	onSuccess={onSuccess}
																	onFailure={onFailure}
																	cookiePolicy={'single_host_origin'}
																	style={{ marginTop: '100px' }}
																/>
															</li>
															<li style={{ marginLeft: '10px' }}>
																<FacebookLogin
																	appId="1088597931155576"
																	render={(renderProps) => (
																		<Link to={''} onClick={renderProps.onClick} className="fa fa-facebook  fb-btn mr-1" target="bank"></Link>
																	)
																	}
																	callback={responseFacebook} />,
															</li>
														</ul>
													</div>
												</form>
												<div className="text-center bottom">
													<Link data-toggle="tab" to="#registration-form" className="site-button button-md btn-block text-white" onClick={() => setSelectPage(false)}>Create an account</Link>
												</div>
											</div>
										</div>
										<div className="bottom-footer clearfix m-t10 m-b20 row text-center">
											<div className="col-lg-12 text-center">
												{/*<span> © Copyright by <i className="fa fa-heart m-lr5 text-red heart"></i>*/}
												{/*	<Link to={''} >DexignZone </Link> All rights reserved.</span>*/}
											</div>
										</div>
									</div>
								</div>
							</div>
						):
						(
							<div className="row">
								<div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 bg-white z-index2 relative p-a0 content-scroll skew-section left-bottom">
									<div className="login-form style-2" style={{ justifyContent: 'center', margin: 'auto' }}>
										<form onSubmit={onRegister}>
												<h4 className="font-weight-700 m-b5">PERSONAL INFORMATION</h4>
												<p className="font-weight-600">If you have an account with us, please <Link to={'Authenticate'} onClick={() => setSelectPage(true)} className="forget-pass">log in.</Link> </p>
												<div className="form-group">
													<label className="font-weight-700">I am a</label>
													<Form.Control as="select" className="form-control" defaultValue={userRole} onChange={e => setUserRole(e.target.value)}>
														<option value='Candidater'>Candidater</option>
														<option value='Employeer'>Employeer</option>
														<option value='Administrator'>Administrator</option>
													</Form.Control>
												</div>
												<div className="form-group">
														<label className="font-weight-700">First Name *</label>
														<input name="fName" className="form-control" placeholder="First Name" type="text" defaultValue={firstName} onChange={e => setFirstName(e.target.value)} required/>
												</div>
												<div className="form-group">
														<label className="font-weight-700">Last Name *</label>
														<input name="lName" className="form-control" placeholder="Last Name" type="text" defaultValue={lastName} onChange={e => setLastName(e.target.value)} required/>
												</div>
												<div className="form-group">
														<label className="font-weight-700">E-MAIL *</label>
														<input name="email" className="form-control" placeholder="Your Email Address" type="email" defaultValue={email} onChange={e => setEmail(e.target.value)} required/>
												</div>
												<div className="form-group">
														<label className="font-weight-700">Password *</label>
														<input name="password" className="form-control " placeholder="Type Password" type="password" defaultValue={password} onChange={e => setPassword(e.target.value)} required/>
												</div>
												<div className="text-left">
													<button type="submit" className="site-button button-lg outline outline-2">CREATE</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						)
					}
						
				</div>
					
			</div>
		</div>
	)
}
export default Authenticate;