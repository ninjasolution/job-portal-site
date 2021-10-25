import React, { useState } from 'react';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const tabBlog = [	
	{ image: require("./../../images/gallery/masonry/img1.jpg"), },
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img4.jpg"), },
	{ image: require("./../../images/gallery/masonry/img5.jpg"), },
	{ image: require("./../../images/gallery/masonry/img6.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img1.jpg"), },
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
]
const tabBlog2 = [	
	{ image: require("./../../images/gallery/masonry/img1.jpg"), },
	{ image: require("./../../images/gallery/masonry/img4.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img1.jpg"), },
]
const tabBlog3 = [	
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
	{ image: require("./../../images/gallery/masonry/img6.jpg"), },
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },	
]
const tabBlog4 = [	
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img5.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
]
const tabBlog5 = [	
	{ image: require("./../../images/gallery/masonry/img1.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img4.jpg"), },
	{ image: require("./../../images/gallery/masonry/img6.jpg"), },
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
]
const tabBlog6 = [	
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img6.jpg"), },
	{ image: require("./../../images/gallery/masonry/img1.jpg"), },
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
]


const Tab1 = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
	return (
        <div>
            <div tabs= "true">
				<div className="site-filters style1 clearfix center">
					<ul className="filters" data-toggle="buttons">
						<li	className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>
							<input type="radio" />
							<Link to={"#"}><span>All</span></Link>
						</li>
						<li className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
							<input type="radio" />
							<Link to={"#"}><span>Designing</span></Link>
						</li>
						<li className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>
							<input type="radio" />
							<Link to={"#"}><span>Construct</span></Link>
						</li>
						<li className={classnames({ active: activeTab === '4' })} onClick={() => { toggle('4'); }}>
							<input type="radio" />
							<Link to={"#"}><span>Finance</span></Link>
						</li>
						<li className={classnames({ active: activeTab === '5' })} onClick={() => { toggle('5'); }}>
							<input type="radio" />
							<Link to={"#"}><span>Development</span></Link>
						</li>
						<li className={classnames({ active: activeTab === '6' })} onClick={() => { toggle('6'); }}>
							<input type="radio" />
							<Link to={"#"}><span>Archeology</span></Link>
						</li>
					</ul>
				</div>
			</div>	
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<ul className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10 row">
						{tabBlog.map((item,index)=>(
							<li className=" col-lg-4 col-md-3 col-sm-6 col-6 web design" key={index}> 
								<div className="dez-box dez-gallery-box">
									<div className="dez-media dez-img-overlay1 dez-img-effect">
										<Link to ={"#"}> <img src={item.image}  alt="" /> </Link>
										<div className="overlay-bx">
											<div className="overlay-icon"> 
												<a className="mfp-link" title="Image Title Come Here" href="images/gallery/masonry/img1.jpg"> <i className="ti-fullscreen"></i> </a>	
											</div>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</TabPane>
				<TabPane tabId="2">
					<ul  className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10 row">
						{tabBlog2.map((item,index)=>(
							<li className="card-container col-lg-4 col-md-3 col-sm-6 col-6 web photography" key={index}>
								<div className="dez-box dez-gallery-box">
									<div className="dez-media dez-img-overlay1 dez-img-effect"> 
									<Link to ={"#"}> <img src={item.image}  alt="" /> </Link>
										<div className="overlay-bx">
											<div className="overlay-icon"> 
												<a className="mfp-link" title="Image Title Come Here" href="images/gallery/masonry/img1.jpg"> <i className="ti-fullscreen"></i> </a>	
											</div>
										</div>
									</div>
								</div>
							</li>
						))}	
					</ul>	
				</TabPane>
				
				<TabPane tabId="3">
					<ul className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10 row">
						{tabBlog3.map((item,index)=>(
							<li className="card-container col-lg-4 col-md-3 col-sm-6 col-6 advertising design photography" key={index}>
								<div className="dez-box dez-gallery-box">
									<div className="dez-media dez-img-overlay1 dez-img-effect ">
									<Link to ={"#"}> <img src={item.image}  alt="" /> </Link>
										<div className="overlay-bx">
											<div className="overlay-icon"> 
												<a className="mfp-link" title="Image Title Come Here" href="images/gallery/masonry/img6.jpg"> <i className="ti-fullscreen"></i> </a>	
											</div>
										</div>
									</div>
								</div>
							</li>	
						))}	
						
					</ul>
				</TabPane>
				<TabPane tabId="4">
					<ul className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10 row">
						{tabBlog4.map((item,index)=>(
							<li className="card-container col-lg-4 col-md-3 col-sm-6 col-6 advertising design photography" key={index}>
								<div className="dez-box dez-gallery-box">
									<div className="dez-media dez-img-overlay1 dez-img-effect ">
									<Link to ={"#"}> <img src={item.image}  alt="" /> </Link>
										<div className="overlay-bx">
											<div className="overlay-icon"> 
												<a className="mfp-link" title="Image Title Come Here" href="images/gallery/masonry/img6.jpg"> <i className="ti-fullscreen"></i> </a>	
											</div>
										</div>
									</div>
								</div>
							</li>
						))}	
						
					</ul>
				</TabPane>
				<TabPane tabId="5">
					<ul className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10 row">
						{tabBlog5.map((item,index)=>(
							<li className="card-container col-lg-4 col-md-3 col-sm-6 col-6 advertising design photography" key={index}>
								<div className="dez-box dez-gallery-box">
									<div className="dez-media dez-img-overlay1 dez-img-effect ">
									<Link to ={"#"}> <img src={item.image}  alt="" /> </Link>
										<div className="overlay-bx">
											<div className="overlay-icon"> 
												<Link className="mfp-link" title="Image Title Come Here" to="images/gallery/masonry/img6.jpg"> <i className="ti-fullscreen"></i> </Link>	
											</div>
										</div>
									</div>
								</div>
							</li>
						))}
						
					</ul>
				</TabPane>	
				<TabPane tabId="6">
					<ul className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10 row">
						{tabBlog6.map((item,index)=>(
							<li className="card-container col-lg-4 col-md-3 col-sm-6 col-6 advertising design photography" key={index}>
								<div className="dez-box dez-gallery-box">
									<div className="dez-media dez-img-overlay1 dez-img-effect ">
									<Link to ={"#"}> <img src={item.image}  alt="" /> </Link>
										<div className="overlay-bx">
											<div className="overlay-icon"> 
												<a className="mfp-link" title="Image Title Come Here" href="images/gallery/masonry/img6.jpg"> <i className="ti-fullscreen"></i> </a>	
											</div>
										</div>
									</div>
								</div>
							</li>
						))}
						
					</ul>
				</TabPane>	
			</TabContent>
		</div>		
	);
}
export default Tab1;	