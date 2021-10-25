import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

const latestBlog = [
	{
		image: require('./../../images/blog/grid/pic4.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic3.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic2.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic1.jpg'),
	},
]
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right "  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev la la-angle-left " onClick={onClick}/>
	</div>
  );
}

class Latestblogowl extends Component{
	render(){
		var settings = {		
			arrows: true,
            slidesToShow: 3,			
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
				
			<Slider className="blog-carousel owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-btn-center-lr owl-btn-1 " {...settings}>
				{latestBlog.map((item, index) => (
					<div className="item p-3" key={index}>
						<div className="blog-post blog-grid blog-style-1">
							<div className="dez-post-media dez-img-effect radius-sm"> <Link to={"/blog-details"}><img src={item.image} alt="" /></Link> </div>
							<div className="dez-info">
								 <div className="dez-post-meta">
									<ul className="d-flex align-items-center">
										<li className="post-date"><i className="fa fa-calendar"></i>September 18, 2017</li>
										<li className="post-comment"><i className="fa fa-comments-o"></i><Link to={""}>5k</Link> </li>
									</ul>
								</div>
								<div className="dez-post-title ">
									<h5 className="post-title font-20"><Link to={"/blog-details"}>Do you have a job that the average person doesn even know exists?</Link></h5>
								</div>
								<div className="dez-post-text">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
								</div>
								<div className="dez-post-readmore blog-share"> 
									<Link to={"/blog-details"} title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></Link>
								</div>
							</div>
						</div>
					</div>
				))}
				
			</Slider>
					
				
		)
		
	}
	
}

export default Latestblogowl;