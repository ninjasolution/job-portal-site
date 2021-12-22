import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';

function CompanySidebar(){

	const location = useLocation();
	useEffect(() => {
		
	}, [])
	return(
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
					<li><Link to={"/company-profile-edit"} className={location.pathname === '/company-profile-edit' ? 'active' : ''}>
						<i className="fa fa-user-o" aria-hidden="true"></i> 
						<span>Company Profile Edit</span></Link></li>
					<li><Link to={"/company-post-jobs"} className={location.pathname === '/company-post-jobs' ? 'active' : ''}>
						<i className="fa fa-file-text-o" aria-hidden="true"></i> 
						<span>Post A Job</span></Link></li>
					<li><Link to={"/company-resume"} className={location.pathname === '/company-resume' ? 'active' : ''}>
						<i className="fa fa-id-card-o" aria-hidden="true"></i>
						<span>Resume</span></Link></li>
					<li><Link to={"./"}>
						<i className="fa fa-sign-out" aria-hidden="true"></i> 
						<span>Log Out</span></Link></li>
				</ul>
			</div>
		</div>
	)
}
export default CompanySidebar;