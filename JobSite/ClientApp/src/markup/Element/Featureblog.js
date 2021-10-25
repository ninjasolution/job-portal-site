import React from 'react';
import {Link} from 'react-router-dom';
var img1 = require('./../../images/city/pic1.jpg');
var img2 = require('./../../images/city/pic2.jpg');
var img3 = require('./../../images/city/pic3.jpg');
var img4 = require('./../../images/city/pic4.jpg');
var img5 = require('./../../images/city/pic5.jpg');
var img6 = require('./../../images/city/pic6.jpg');
var img7 = require('./../../images/city/pic7.jpg');
var img8 = require('./../../images/city/pic8.jpg');

function Featureblog(){
	return(
		<div className="section-full content-inner bg-gray">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 section-head text-center">
						<h2 className="m-b5">Featured Cities</h2>
						<h6 className="fw4 m-b0">20+ Featured Cities Added Jobs</h6>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30" >
						<Link to={''}>
							<div className="city-bx align-items-end d-flex" style={{backgroundImage:"url(" + img1 + ")" }}>
								<div className="city-info">
									<h5>Iraq</h5>
									<span>765 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to={''}>
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:"url(" + img2 + ")" }}>
								<div className="city-info">
									<h5>Argentina</h5>
									<span>352 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to={''}>
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:"url(" + img3 + ")" }}>
								<div className="city-info">
									<h5>Indonesia</h5>
									<span>893 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to={''}>
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:"url(" + img4 + ")" }}>
								<div className="city-info">
									<h5>Gambia</h5>
									<span>502 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to={''}>
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:"url(" + img5 + ")" }}>
								<div className="city-info">
									<h5>India</h5>
									<span>765 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to={''}>
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:"url(" + img6 + ")" }}>
								<div className="city-info">
									<h5>Thailand</h5>
									<span>352 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to={''}>
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:"url(" + img7 + ")" }}>
								<div className="city-info">
									<h5>Banjul</h5>
									<span>893 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to={''}>
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:"url(" + img8 + ")" }}>
								<div className="city-info">
									<h5>Spain</h5>
									<span>502 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Featureblog;