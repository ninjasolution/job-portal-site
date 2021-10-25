import React from 'react';
import { Link } from "react-scroll";


function Listingsidebar(){
	return(
		<div className="sticky-top bg-white">
			<div className="candidate-info onepage">
				<ul>
					<li>
						<Link activeClass="active" 
							className="scroll-bar nav-link" to="resume_headline_bx" smooth={true} offset={-70} duration={500}><span>Resume Headline</span> 
						</Link>
						
						</li>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="key_skills_bx" smooth={true}  offset={-70} duration={500}><span>Key Skills</span> 
						</Link>
					</li>	
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="employment_bx" smooth={true}  offset={-70} duration={500}><span>Employment</span> 
						</Link>
					</li>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="education_bx" smooth={true}  offset={-70} duration={500}><span>Education</span> 
						</Link>
					</li>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="it_skills_bx" smooth={true}  offset={-70} duration={500}><span>IT Skills</span> 
						</Link>
					</li>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="projects_bx" smooth={true}  offset={-70} duration={500}><span>Projects</span> 
						</Link>
					</li>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="profile_summary_bx" smooth={true}  offset={-70} duration={500}><span>Profile Summary</span> 
						</Link>
					</li>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="accomplishments_bx" smooth={true}  offset={-70} duration={500}><span>Accomplishments</span> 
						</Link>
					</li>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="desired_career_profile_bx" smooth={true}  offset={-70} duration={500}><span>Desired Career Profile</span> 
						</Link>
					</li>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="personal_details_bx" smooth={true}  offset={-70} duration={500}><span>Personal Details</span> 
						</Link>
					</li>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="attach_resume_bx" smooth={true}  offset={-70} duration={500}><span>Attach Resume</span> 
						</Link>
					</li>									
				</ul>
			</div>
		</div>
	)
}
export default Listingsidebar;