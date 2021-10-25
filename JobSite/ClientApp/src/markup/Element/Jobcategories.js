import React from 'react';
import {Link} from 'react-router-dom';

function Jobcategories(){
	return(
		<div className="row sp20">
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="icon-bx-wraper">
					<div className="icon-content">
						<div className="icon-md text-primary m-b20"><i className="ti-location-pin"></i></div>
						<Link to={"/company-manage-job"} className="dez-tilte">Design, Art & Multimedia</Link>
						<p className="m-a0">198 Open Positions</p>
						<div className="rotate-icon"><i className="ti-location-pin"></i></div> 
					</div>
				</div>				
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="icon-bx-wraper">
					<div className="icon-content">
						<div className="icon-md text-primary m-b20"><i className="ti-wand"></i></div>
						<Link to={"/company-manage-job"} className="dez-tilte">Education Training</Link>
						<p className="m-a0">198 Open Positions</p>
						<div className="rotate-icon"><i className="ti-wand"></i></div> 
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="icon-bx-wraper">
					<div className="icon-content">
						<div className="icon-md text-primary m-b20"><i className="ti-wallet"></i></div>
						<Link to={"/company-manage-job"} className="dez-tilte">Accounting / Finance</Link>
						<p className="m-a0">198 Open Positions</p>
						<div className="rotate-icon"><i className="ti-wallet"></i></div> 
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="icon-bx-wraper">
					<div className="icon-content">
						<div className="icon-md text-primary m-b20"><i className="ti-cloud-up"></i></div>
						<Link to={"/company-manage-job"} className="dez-tilte">Human Resource</Link>
						<p className="m-a0">198 Open Positions</p>
						<div className="rotate-icon"><i className="ti-cloud-up"></i></div> 
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="icon-bx-wraper">
					<div className="icon-content">
						<div className="icon-md text-primary m-b20"><i className="ti-bar-chart"></i></div>
						<Link to={"/company-manage-job"} className="dez-tilte">Telecommunications</Link>
						<p className="m-a0">198 Open Positions</p>
						<div className="rotate-icon"><i className="ti-bar-chart"></i></div> 
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="icon-bx-wraper">
					<div className="icon-content">
						<div className="icon-md text-primary m-b20"><i className="ti-tablet"></i></div>
						<Link to={"/company-manage-job"} className="dez-tilte">Restaurant / Food Service</Link>
						<p className="m-a0">198 Open Positions</p>
						<div className="rotate-icon"><i className="ti-tablet"></i></div> 
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="icon-bx-wraper">
					<div className="icon-content">
						<div className="icon-md text-primary m-b20"><i className="ti-camera"></i></div>
						<Link to={"/company-manage-job"} className="dez-tilte">Construction / Facilities</Link>
						<p className="m-a0">198 Open Positions</p>
						<div className="rotate-icon"><i className="ti-camera"></i></div> 
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="icon-bx-wraper">
					<div className="icon-content">
						<div className="icon-md text-primary m-b20"><i className="ti-panel"></i></div>
						<Link to={"/company-manage-job"} className="dez-tilte">Health</Link>
						<p className="m-a0">198 Open Positions</p>
						<div className="rotate-icon"><i className="ti-panel"></i></div> 
					</div>
				</div>
			</div>
			<div className="col-lg-12 text-center m-t30">
				<button className="site-button radius-xl">All Categories</button>
			</div>
		</div>
	)
}

export default Jobcategories;