import React, {Component} from 'react';

class Jobsearchform extends Component{
	componentDidMount() {
		var i = 0;
		
		// Placeholder Animation Start
		var inputSelector = document.querySelectorAll('input, textarea');
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('focus', function(event) {
				return this.parentElement.parentElement.classList.add("focused");
			});
		}
		
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('blur', function(event) {
				var inputValue = this.value;	
				if ( inputValue === '' ) {
					this.parentElement.parentElement.classList.remove('filled');
					this.parentElement.parentElement.classList.remove('focused');  
				} else {
					this.parentElement.parentElement.classList.add('filled');
				}
			});
		}
		
		// Placeholder Animation End
	}
	render(){
		return(
			
			<div className="job-search-form">
				<form>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Job Title, Keywords Or Company Name" />
						<input type="text" className="form-control" placeholder="City, Province Or Region" />
						<div className="input-group-prepend">
							<button className="site-button">Search</button>
						</div>
					</div>
				</form>
			</div>		
		)
	}
}
export default Jobsearchform;