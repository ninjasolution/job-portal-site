import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/actions/AuthActions'

import logo2 from './../../images/logo.png';
var bnr3 = require('./../../images/background/bg3.jpg');

const Header = props =>  {

	const authedUser = useSelector(state => state.auth.auth);
	const dispatch = useDispatch();
	const history = useHistory();
	const [show, setShow] = useState(false);
	let sidebarmenu;

	const handleClose = () => {
		setShow(false);
	 };
	const handleShow = () => {
		setShow(true);
	 };	
	function toggleFunc() {
		sidebarmenu.classList.toggle('show');
		//   Navicon.classList.toggle('open');
	}

	const onLogout = () => {
		dispatch(logout(history));
    }

	useEffect(() => {
		if(authedUser.userName) {
			var Navicon = document.querySelector('.navicon');
			sidebarmenu = document.querySelector('.myNavbar ');

			
			Navicon.addEventListener('click', toggleFunc);

			// Sidenav li open close
			var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li > a, .sub-menu > li > a'));
			for (var y = 0; y < navUl.length; y++) {
				navUl[y].addEventListener('click', function () { checkLi(this) });
			}

			function checkLi(current) {
				current.parentElement.parentElement.querySelectorAll("li").forEach(el =>
					(current.parentElement !== el) ? el.classList.remove('open') : ''
				);
				setTimeout(() => {
					current.parentElement.classList.toggle('open');
				}, 100);
			}
		}
		
    }, [])

	return(
		<>
			
			<header className="site-header mo-left header fullwidth">
				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix">
						<div className="container clearfix">
								
							<div className="logo-header mostion">
								<Link to={"/"}><img src={logo2} className="logo" alt="img" /></Link>
							</div>
								
								{
									authedUser.userName && <button className="navbar-toggler collapsed navicon  justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
											<span></span>
											<span></span>
											<span></span>
										</button> 
								}
							
							<div className="extra-nav">
								{
									!authedUser.userName && <Link to={"/Authenticate"} className="site-button" style={{ color: 'white' }}><i className="fa fa-user"></i> Sign In</Link>
								}
							</div>
								 
							<div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown"> 
								<ul className="nav navbar-nav">
									{
										authedUser.userName && <li>
											<Link to={'#'}>{authedUser?.userName ? authedUser?.userName : authedUser?.name} <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu" >
												{
													authedUser.role.name !== 'Candidater' &&
													<li><Link to={"/company-post-jobs"} className="dez-page">Post a job</Link></li>
                                                }

												<li><Link to={authedUser?.role?.name === 'Candidater' ? `/jobs-profile/${authedUser.id}` : `/company-profile/${authedUser.id}`} className="dez-page">Profile</Link></li>
												<li><Link to={"#"} className="dez-page" onClick={onLogout}>Log out</Link></li>
											</ul>
										</li>
                                    }
								</ul>
							</div>

						</div>
					</div>
				</div>
			</header> 
			<Modal  className=" lead-form-modal"  show={show} onHide={handleClose} centered >
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<button type="button" className="close" onClick={handleClose}>
							<span aria-hidden="true">&times;</span>
						</button>
						<div className="modal-body row m-a0 clearfix">
							<div className="col-lg-6 col-md-6 overlay-primary-dark d-flex p-a0" style={{backgroundImage: "url("+ bnr3 +")",  backgroundPosition:"center", backgroundSize:"cover" }}>
								<div className="form-info text-white align-self-center">
									<h3 className="m-b15">Login To You Now</h3>
									<p className="m-b15">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry.</p>
									<ul className="list-inline m-a0">
										<li><Link to={"#"} className="m-r10 text-white"><i className="fa fa-facebook"></i></Link></li>
										<li><Link to={"#"} className="m-r10 text-white"><i className="fa fa-google-plus"></i></Link></li>
										<li><Link to={"#"} className="m-r10 text-white"><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to={"#"} className="m-r10 text-white"><i className="fa fa-instagram"></i></Link></li>
										<li><Link to={"#"} className="m-r10 text-white"><i className="fa fa-twitter"></i></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 p-a0">
								<div className="lead-form browse-job text-left">
									<form>
										<h3 className="m-t0">Personal Details</h3>
										<div className="form-group">
											<input className="form-control" placeholder="Name"/>
										</div>	
										<div className="form-group">
											<input  className="form-control" placeholder="Mobile Number"/>
										</div>
										<div className="clearfix">
											<button type="button" className="btn-primary site-button btn-block">Submit </button>
										</div>
									</form>
								</div>
							</div>
						</div>	
					</div>
				</div>				
			</Modal>
		</>
	)
}
export default Header;

