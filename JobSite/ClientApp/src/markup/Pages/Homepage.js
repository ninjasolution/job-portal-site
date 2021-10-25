import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import CountUp from 'react-countup';
import IndexBanner from '../Element/IndexBanner';
import Jobcategories from '../Element/Jobcategories';
import Featureblog from '../Element/Featureblog';
import Jobsection from '../Element/Jobsection';
import Owltestimonial from '../Element/Owlblog1';

//Images
var bnr2 = require('./../../images/background/bg4.jpg');
var bnr3 = require('./../../images/lines.png');

function Homepage(){
	return(
		<div className="page-wraper">
			<Header />
			<div className="page-content">
				<IndexBanner />
				<Jobsection />
				<div className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix" style={{backgroundImage: "url(" + bnr2 + ")"}}>
					<div className="container">
						<div className="section-head text-center text-white">
							<h2 className="m-b5">Testimonials</h2>
							<h5 className="fw4">Few words from candidates</h5>
						</div>
						<Owltestimonial />
					</div>
				</div>	
				<div className="section-full content-inner-2 overlay-white-middle" style={{backgroundImage:"url( " + bnr3 + ")", backgroundPosition:"bottom", backgroundRepeat:"no-repeat", backgroundSize: "100%" }}>
					<div className="container">
						<div className="section-head text-black text-center">
							<h2 className="m-b0">Membership Plans</h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
						</div>
						<div className="section-content box-sort-in button-example m-t80">
							<div className="pricingtable-row">
								<div className="row max-w1000 m-auto">
									<div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
										<div className="pricingtable-wrapper style2 bg-white">
											<div className="pricingtable-inner">
												<div className="pricingtable-price"> 
													<h4 className="font-weight-300 m-t10 m-b0">Basic</h4>
													<div className="pricingtable-bx"><span>Free</span></div>
												</div>
												<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
												<div className="m-t20"> 
													<Link to={"/register"} className="site-button radius-xl"><span className="p-lr30">Sign Up</span></Link> 
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
										<div className="pricingtable-wrapper style2 bg-primary text-white active">
											<div className="pricingtable-inner">
												<div className="pricingtable-price"> 
													<h4 className="font-weight-300 m-t10 m-b0">Professional</h4>
													<div className="pricingtable-bx"> $ <span>29</span> /  Per Installation </div>
												</div>
												<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
												<div className="m-t20"> 
													<Link to={"/register"} className="site-button white radius-xl"><span className="text-primary p-lr30">Sign Up</span></Link> 
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
										<div className="pricingtable-wrapper style2 bg-white">
											<div className="pricingtable-inner">
												<div className="pricingtable-price"> 
													<h4 className="font-weight-300 m-t10 m-b0">Extended</h4>
													<div className="pricingtable-bx"> $  <span>29</span> /  Per Installation </div>
												</div>
												<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
												<div className="m-t20"> 
													<Link to={"/register"} className="site-button radius-xl"><span className="p-lr30">Sign Up</span></Link> 
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
			<Footer />
		</div>		
	)
}
export default Homepage;