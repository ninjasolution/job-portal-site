import React from 'react';
import {Link} from 'react-router-dom';

const blogPost = [
	{ image: require('./../../images/blog/default/thum2.jpg'), },
	{ image: require('./../../images/blog/default/thum1.jpg'), },
	{ image: require('./../../images/blog/default/thum4.jpg'), },
	{ image: require('./../../images/blog/default/thum3.jpg'), },
	{ image: require('./../../images/blog/default/thum2.jpg'), },
	{ image: require('./../../images/blog/default/thum1.jpg'), },
]

function Sibarpost(){
	return(
		<>
			{blogPost.map((item,index)=>(
				<div className="blog-post blog-lg blog-style-1" key={index}>
					<div className="dez-post-media dez-img-effect zoom-slow radius-sm"> 
						<Link to={"/blog-details"}><img src={item.image} alt="" /></Link>
					</div>
					<div className="dez-info">
						 <div className="dez-post-meta">
							<ul className="d-flex align-items-center">
								<li className="post-date"><i className="fa fa-calendar"></i>September 18, 2017</li>
								<li className="post-author"><i className="fa fa-user"></i>By <Link to={""}>demongo</Link> </li>
								<li className="post-comment"><i className="fa fa-comments-o"></i><Link to={"#"}>5k</Link> </li>
							</ul>
						</div>
						<div className="dez-post-title">
							<h4 className="post-title font-24"><Link to={"/blog-details"}>Do you have a job that the average person doesn’t even know exists?</Link></h4>
						</div>
						<div className="dez-post-text">
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
								text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						</div>
						<div className="dez-post-readmore blog-share"> 
							<Link to={"/blog-details"} title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></Link>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default Sibarpost;