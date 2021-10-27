import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';

var bnr =require('./../../images/banner/bnr1.jpg');

const blogGrid =[
	{
		image:require('./../../images/blog/grid/pic1.jpg'),
	},
	{
		image:require('./../../images/blog/grid/pic2.jpg'),
	},
	{
		image:require('./../../images/blog/grid/pic3.jpg'),
	},
	{
		image:require('./../../images/blog/grid/pic4.jpg'),
	},
]

function Jobdetail(){
	return(
		<>
			<Header />	
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")"}}>
					<PageTitle activeName="Job Detail" motherName="Home" />
				</div>
				<div className="content-block">
					<div className="section-full content-inner-1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4">
									<div className="sticky-top">
										<div className="row">
											<div className="col-lg-12 col-md-6">
												<div className="m-b30">
													<img src={require("./../../images/blog/grid/pic1.jpg")} alt="" />
												</div>
											</div>
											<div className="col-lg-12 col-md-6">
												<div className="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
													<h4 className="text-black font-weight-700 p-t10 m-b15">Job Details</h4>
													<ul>
														<li><i className="ti-location-pin"></i><strong className="font-weight-700 text-black">Address</strong><span className="text-black-light"> Demo Address #8901 Marmora Road Chi Minh City, Vietnam </span></li>
														<li><i className="ti-money"></i><strong className="font-weight-700 text-black">Salary</strong> $800 Monthy</li>
														<li><i className="ti-shield"></i><strong className="font-weight-700 text-black">Experience</strong>6 Year Experience</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="job-info-box">
										<h3 className="m-t0 m-b10 font-weight-700 title-head">
											<Link to={""} className="text-secondry m-r30">Digital Marketing Executive</Link>
										</h3>
										<ul className="job-info">
											<li><strong>Education</strong> Web Designer</li>
											<li><strong>Deadline:</strong> 25th January 2018</li>
											<li><i className="ti-location-pin text-black m-r5"></i> NewYark </li>
										</ul>
										<p className="p-t20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
										<h5 className="font-weight-600">Job Description</h5>
										<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
										<h5 className="font-weight-600">How to Apply</h5>
										<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
										<h5 className="font-weight-600">Job Requirements</h5>
										<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
										<ul className="list-num-count no-round">
											<li>The DexignLab Privacy Policy was updated on 25 June 2018.</li>
											<li>Who We Are and What This Policy Covers</li>
											<li>Remaining essentially unchanged It was popularised in the 1960s </li>
											<li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</li>
											<li>DexignLab standard dummy text ever since</li>
										</ul>
										<Link to={"/jobs-applied-job"} className="site-button">Apply This Job</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-full content-inner">
						<div className="container">
							<div className="row">
								{blogGrid.map((item,index)=>(
									<div className="col-xl-3 col-lg-6 col-md-6" key={index}>
										<div className="m-b30 blog-grid">
											<div className="dez-post-media dez-img-effect "> <Link to={"/blog-details"}><img src={item.image} alt="" /></Link> </div>
											<div className="dez-info p-a20 border-1">
												<div className="dez-post-title ">
													<h5 className="post-title"><Link to={"/blog-details"}>Title of blog post</Link></h5>
												</div>
												<div className="dez-post-meta ">
													<ul>
														<li className="post-date"> <i className="ti-location-pin"></i> London </li>
														<li className="post-author"><i className="ti-user"></i>By <Link to={"#"}>Jone</Link> </li>
													</ul>
												</div>
												<div className="dez-post-text">
													 <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
												</div>
											    <div className="dez-post-readmore"> 
													<Link to={"/blog-details"} title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></Link>
												</div>
											</div>
										</div>
									</div>
								))}	
							</div>
						</div>
					</div>
				</div>
			</div>		
			<Footer />
		</>		
	)
}
export default Jobdetail;