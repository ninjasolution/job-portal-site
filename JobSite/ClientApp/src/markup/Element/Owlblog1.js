import React, {Component} from 'react';
import Slider from "react-slick";


const postBlog= [
	{
		image: require('./../../images/testimonials/pic1.jpg'),
	},
	{
		image: require('./../../images/testimonials/pic2.jpg'),
	},
	{
		image: require('./../../images/testimonials/pic3.jpg'),
	},
	{
		image: require('./../../images/testimonials/pic2.jpg'),
	},
]


class owltestimonial extends Component{
	render(){
		var settings = {
            slidesToShow: 3,
			arrows : false,
            infinite: true,
			autoplay: true,
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
				
			 <Slider className="blog-carousel-center owl-carousel owl-none " {...settings}>
				{postBlog.map((item, index) => (
					<div className="item p-3" key={index}>
						<div className="testimonial-5">
							<div className="testimonial-text">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={item.image} width="100" height="100" alt="" />
								</div>
								<strong className="testimonial-name">David Matin</strong> 
								<span className="testimonial-position">Student</span> 
							</div>
						</div>
					</div>	
				))}
				
			</Slider>
					
				
		)
		
	}
	
}

export default owltestimonial;