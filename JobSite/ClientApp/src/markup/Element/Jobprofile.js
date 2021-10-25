import React from 'react';
import {Link} from 'react-router-dom';

function Jobprofile(){
	return(
		<div className="sticky-top">
			<div className="candidate-info">
				<div className="candidate-detail text-center">
					<div className="canditate-des">
						<a href="javascript:void(0);">
							<img alt="" src={require("./../../images/team/pic1.jpg")} />
						</a>
						<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
							<input type="file" className="update-flie" />
							<i className="fa fa-camera"></i>
						</div>
					</div>
					<div className="candidate-title">
						<div className="">
							<h4 className="m-b5"><a href="javascript:void(0);">David Matin</a></h4>
							<p className="m-b0"><a href="javascript:void(0);">Web developer</a></p>
						</div>
					</div>
				</div>
				<ul>
					<li><a href="jobs-profile.html">
						<i className="fa fa-user-o" aria-hidden="true"></i> 
						<span>Profile</span></a></li>
					<li><a href="jobs-my-resume.html">
						<i className="fa fa-file-text-o" aria-hidden="true"></i> 
						<span>My Resume</span></a></li>
					<li><a href="jobs-saved-jobs.html">
						<i className="fa fa-heart-o" aria-hidden="true"></i> 
						<span>Saved Jobs</span></a></li>
					<li><a href="jobs-applied-job.html">
						<i className="fa fa-briefcase" aria-hidden="true"></i> 
						<span>Applied Jobs</span></a></li>
					<li><a href="jobs-alerts.html" className="active">
						<i className="fa fa-bell-o" aria-hidden="true"></i> 
						<span>Job Alerts</span></a></li>
					<li><a href="jobs-cv-manager.html">
						<i className="fa fa-id-card-o" aria-hidden="true"></i> 
						<span>CV Manager</span></a></li>
					<li><a href="jobs-change-password.html">
						<i className="fa fa-key" aria-hidden="true"></i> 
						<span>Change Password</span></a></li>
					<li><a href="index.html">
						<i className="fa fa-sign-out" aria-hidden="true"></i> 
						<span>Log Out</span></a></li>
				</ul>
			</div>
		</div>
	)
}
export default Jobprofile;