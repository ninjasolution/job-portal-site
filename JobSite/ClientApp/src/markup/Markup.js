import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import ScrollToTop from './Element/ScrollToTop';
import Jobmyresume from './Pages/Jobmyresume';
import CompanyprofileEdit from './Pages/CompanyprofileEdit';
import Companyprofile from './Pages/Companyprofile';
import Companyresume from './Pages/Companyresume';
import Componypostjobs from './Pages/Componypostjobs';
import Companymanage from './Pages/Companymanage';
import Jobdetail from './Pages/Jobdetail';
import Browsejobfilterlist from './Pages/Browsejobfilterlist';
import Authenticate from './Pages/Authenticate';
import JobprofileEdit from './Pages/JobprofileEdit';
import Jobprofile from './Pages/Jobprofile';
import Header from './Layout/Header';
import { checkAutoLogin } from '../services/AuthService';
import Footer from './Layout/Footer';


function Markup (){
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		checkAutoLogin(dispatch, history);
		console.log(location);
	}, [dispatch, history]);
	
	return(
		<>
			<div className="page-wraper">
				{
					location.pathname !== "/Authenticate" &&
					<Header/>
				}
				<Switch>
					<Route path='/' exact component={Browsejobfilterlist} />
					<Route path='/browse-job-filter-list' exact component={Browsejobfilterlist} />
					<Route path='/Authenticate' exact component={Authenticate} />
					<Route path='/company-manage-job' exact component={Companymanage} />

					<Route path='/company-post-jobs' exact component={Componypostjobs} />
					<Route path='/job-detail/:id' exact component={Jobdetail} />
					<Route path='/company-resume' exact component={Companyresume} />

					<Route path='/company-profile-edit/:id' exact component={CompanyprofileEdit} />
					<Route path='/company-profile/:id' exact component={Companyprofile} />

					<Route path='/jobs-my-resume' exact component={Jobmyresume} />
					<Route path='/jobs-profile/:id' exact component={Jobprofile} />
					<Route path='/jobs-profile-edit/:id' exact component={JobprofileEdit} />

					
				</Switch>
				{
					location.pathname !== "/Authenticate" &&
					<Footer/>
				}
			</div>
			<ScrollToTop />
		</>
	)
	
}

export default Markup;