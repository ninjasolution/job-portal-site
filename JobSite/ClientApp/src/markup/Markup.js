import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './Element/ScrollToTop';
import Jobmyresume from './Pages/Jobmyresume';
import Companyprofile from './Pages/Companyprofile';
import Companyresume from './Pages/Companyresume';
import Componypostjobs from './Pages/Componypostjobs';
import Companymanage from './Pages/Companymanage';
import Jobdetail from './Pages/Jobdetail';
import Browsejobfilterlist from './Pages/Browsejobfilterlist';
import Authenticate from './Pages/Authenticate';

// import Jobprofile from './Pages/Jobprofile';
// import Jobsappliedjob from './Pages/Jobsappliedjob';
// import Jobsalert from './Pages/Jobsalert';
// import Jobsavedjobs from './Pages/Jobsavedjobs';
// import Jobcvmanager from './Pages/Jobcvmanager';
// import Changepasswordpage from './Pages/Changepasswordpage';


// import Companytransactions from './Pages/Companytransactions';
// import Browsecandidates from './Pages/Browsecandidates';


// import Aboutus from './Pages/Aboutus';
// import Companies from './Pages/Companies';
// import Freejobalerts from './Pages/Freejobalerts';
// import Browsejoblist from './Pages/Browsejoblist';
// import Browsejobgrid from './Pages/Browsejobgrid';
// import Browsejobfiltergrid from './Pages/Browsejobfiltergrid';

// import Categoryalljob from './Pages/Categoryalljob';
//import Categorycompanyjob from './Pages/Categorycompanyjob';
// import Categorydesignationsjob from './Pages/Categorydesignationsjob';
// import Categoryjobs from './Pages/Categoryjobs';
// import Categorylocationjobs from './Pages/Categorylocationjobs';
// import Categoryskilljobs from './Pages/Categoryskilljobs';

// import Portfoliogrid2 from './Pages/Portfoliogrid2';

// import Loginpage1 from './Pages/Loginpage1';
// import Loginpage2 from './Pages/Loginpage2';
// import Loginpage3 from './Pages/Loginpage3';

// import Register1 from './Pages/Register1';
// import Error404 from './Pages/Error404';

// import Contact from './Pages/Contact';


// import Blogclassic from './Pages/Blogclassic';
// import Blogclassicsidebar from './Pages/Blogclassicsidebar';
// import Blogdetailgrid from './Pages/Blogdetailgrid';
// import Blogdetailgridsidebar from './Pages/Blogdetailgridsidebar';
// import Blogleftimg from './Pages/Blogleftimg';
// import Blogdetail from './Pages/Blogdetail';

class Markup extends Component{
	render(){
		return(
			<BrowserRouter basename="">
                <div className="page-wraper">
                    <Switch>
                        <Route path='/' exact component={Browsejobfilterlist} />
						<Route path='/Authenticate' exact component={Authenticate} />
						<Route path='/job-detail' exact component={Jobdetail} />
						<Route path='/company-manage-job' exact component={Companymanage} />
						<Route path='/company-post-jobs' exact component={Componypostjobs} />
						<Route path='/company-profile' exact component={Companyprofile} />
						<Route path='/browse-job-filter-list' exact component={Browsejobfilterlist} />
                        <Route path='/jobs-my-resume' exact component={Jobmyresume} />
						<Route path='/company-resume' exact component={Companyresume} />

                        {/* <Route path='/jobs-profile' exact component={Jobprofile} />
                        <Route path='/jobs-applied-job' exact component={Jobsappliedjob} />
                        <Route path='/jobs-alerts' exact component={Jobsalert} />
                        <Route path='/jobs-saved-jobs' exact component={Jobsavedjobs} />
                        <Route path='/jobs-cv-manager' exact component={Jobcvmanager} />
                        <Route path='/jobs-change-password' exact component={Changepasswordpage} />
							
							
						<Route path='/company-transactions' exact component={Companytransactions} />
						<Route path='/browse-candidates' exact component={Browsecandidates} />
						
						
						<Route path='/about-us' exact component={Aboutus} />
						<Route path='/companies' exact component={Companies} />
						<Route path='/free-job-alerts' exact component={Freejobalerts} />
						<Route path='/browse-job-list' exact component={Browsejoblist} />
						<Route path='/browse-job-grid' exact component={Browsejobgrid} />
						<Route path='/browse-job-filter-grid' exact component={Browsejobfiltergrid} />
						
						<Route path='/category-all-jobs' exact component={Categoryalljob} />
						<Route path='/category-company-jobs' exact component={Categorycompanyjob} />
						<Route path='/category-designations-jobs' exact component={Categorydesignationsjob} />
						<Route path='/category-jobs' exact component={Categoryjobs} />
						<Route path='/category-location-jobs' exact component={Categorylocationjobs} />
						<Route path='/category-skill-jobs' exact component={Categoryskilljobs} />
						
						<Route path='/portfolio-grid-2' exact component={Portfoliogrid2} />
						
						<Route path='/login' exact component={Loginpage1} />
						<Route path='/login-2' exact component={Loginpage2} />
						<Route path='/login-3' exact component={Loginpage3} />
						
						<Route path='/register' exact component={Register1} />
						<Route path='/error-404' exact component={Error404} />
						
						<Route path='/contact' exact component={Contact} />
						
						<Route path='/blog-classic' exact component={Blogclassic} />
						<Route path='/blog-classic-sidebar' exact component={Blogclassicsidebar} />
						<Route path='/blog-detailed-grid' exact component={Blogdetailgrid} />
						<Route path='/blog-detailed-grid-sidebar' exact component={Blogdetailgridsidebar} />
						<Route path='/blog-left-img' exact component={Blogleftimg} />
						<Route path='/blog-details' exact component={Blogdetail} /> */}
						
					</Switch>
                </div>
				<ScrollToTop />
            </BrowserRouter>	
		)
	}
	
}

export default Markup;