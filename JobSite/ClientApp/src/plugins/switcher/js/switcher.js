function addSwitcher()
{
	var currentURL      = window.location.href; 
	var urlLTR = '';
	var urlRTL = '';
	if(currentURL.indexOf('xhtml-rtl') > -1){
		urlLTR = currentURL.replace('xhtml-rtl', 'xhtml')
		urlRTL = currentURL;
	}else{
		urlRTL = currentURL.replace('xhtml', 'xhtml-rtl')
		urlLTR = currentURL;
	}
	
	var dzSwitcher = '<div id="dzSwitcher" class="styleswitcher-right"> <div class="switcher-btn-bx"><a class="switch-btn closed"><span class="fa fa-cog fa-spin fa-fw"></span></a></div><div class="styleswitcher-inner"> <a href="https://themeforest.net/item/job-board-job-portal-html-bootstrap-4/22712391?ref=dexignzone" class="site-button btn-block">Buy Jobboard Now!</a> <h6 class="switcher-title text-center m-tb15">Layout</h6> <ul class="layout-view"> <li class="active"><a href="'+urlLTR+'">LTR</a></li><li class=""><a href="'+urlRTL+'">RTL</a></li></ul> <h6 class="switcher-title text-center m-b15">Home Page</h6> <ul class="demos clearfix"> <li> <a href="index.html"><img src="images/switcher/index.jpg"></a> </li><li> <a href="index-2.html"><img src="images/switcher/index-2.jpg"></a> </li></ul> <h6 class="switcher-title text-center m-tb15">Job Pages</h6> <ul class="demos clearfix"> <li> <a href="browse-job-list.html"><img src="images/switcher/browse-job-list.jpg"></a> </li><li> <a href="browse-job-grid.html"><img src="images/switcher/browse-job-grid.jpg"></a> </li><li> <a href="browse-job-filter-list.html"><img src="images/switcher/browse-job-filter-list.jpg"></a> </li><li> <a href="browse-job-filter-grid.html"><img src="images/switcher/browse-job-filter-grid.jpg"></a> </li><li> <a href="category-all-jobs.html"><img src="images/switcher/category-all-jobs.jpg"></a> </li><li> <a href="category-company-jobs.html"><img src="images/switcher/category-company-jobs.jpg"></a> </li><li> <a href="category-jobs.html"><img src="images/switcher/category-jobs.jpg"></a> </li><li> <a href="category-location-jobs.html"><img src="images/switcher/category-location-jobs.jpg"></a> </li><li> <a href="category-designations-jobs.html"><img src="images/switcher/category-designations-jobs.jpg"></a> </li><li> <a href="category-skill-jobs.html"><img src="images/switcher/category-skill-jobs.jpg"></a> </li></ul> <h6 class="switcher-title text-center m-tb15">Candidates Page</h6> <ul class="demos clearfix"> <li> <a href="jobs-profile.html"><img src="images/switcher/jobs-profile.jpg"></a> </li><li> <a href="jobs-my-resume.html"><img src="images/switcher/jobs-my-resume.jpg"></a> </li><li> <a href="jobs-applied-job.html"><img src="images/switcher/jobs-applied-job.jpg"></a> </li><li> <a href="jobs-alerts.html"><img src="images/switcher/jobs-alerts.jpg"></a> </li><li> <a href="jobs-saved-jobs.html"><img src="images/switcher/jobs-saved-jobs.jpg"></a> </li><li> <a href="jobs-cv-manager.html"><img src="images/switcher/jobs-cv-manager.jpg"></a> </li><li> <a href="jobs-change-password.html"><img src="images/switcher/jobs-change-password.jpg"></a> </li></ul> <h6 class="switcher-title text-center m-tb15">Employers Page</h6> <ul class="demos clearfix"> <li> <a href="company-profile.html"><img src="images/switcher/company-profile.jpg"></a> </li><li> <a href="company-resume.html"><img src="images/switcher/company-resume.jpg"></a> </li><li> <a href="company-post-jobs.html"><img src="images/switcher/company-post-jobs.jpg"></a> </li><li> <a href="company-manage-job.html"><img src="images/switcher/company-manage-job.jpg"></a> </li><li> <a href="company-transactions.html"><img src="images/switcher/company-transactions.jpg"></a> </li><li> <a href="browse-candidates.html"><img src="images/switcher/browse-candidates.jpg"></a> </li></ul> <h6 class="switcher-title text-center m-tb15">Blog Page</h6> <ul class="demos clearfix"> <li> <a href="blog-classic.html"><img src="images/switcher/blog-classic.jpg"></a> </li><li> <a href="blog-classic-sidebar.html"><img src="images/switcher/blog-classic-sidebar.jpg"></a> </li><li> <a href="blog-detailed-grid.html"><img src="images/switcher/blog-detailed-grid.jpg"></a> </li><li> <a href="blog-detailed-grid-sidebar.html"><img src="images/switcher/blog-detailed-grid-sidebar.jpg"></a> </li><li> <a href="blog-left-img.html"><img src="images/switcher/blog-left-img.jpg"></a> </li><li> <a href="blog-details.html"><img src="images/switcher/blog-details.jpg"></a> </li></ul> <h6 class="switcher-title text-center m-tb15">Other Page</h6> <ul class="demos clearfix"> <li> <a href="about-us.html"><img src="images/switcher/about-us.jpg"></a> </li><li> <a href="job-detail.html"><img src="images/switcher/job-detail.jpg"></a> </li><li> <a href="companies.html"><img src="images/switcher/companies.jpg"></a> </li><li> <a href="free-job-alerts.html"><img src="images/switcher/free-job-alerts.jpg"></a> </li><li> <a href="portfolio-grid-2.html"><img src="images/switcher/portfolio-1.jpg"></a> </li><li> <a href="portfolio-grid-3.html"><img src="images/switcher/portfolio-2.jpg"></a> </li><li> <a href="portfolio-grid-4.html"><img src="images/switcher/portfolio-3.jpg"></a> </li><li> <a href="login.html"><img src="images/switcher/login.jpg"></a> </li><li> <a href="login-2.html"><img src="images/switcher/login-2.jpg"></a> </li><li> <a href="login-3.html"><img src="images/switcher/login-3.jpg"></a> </li><li> <a href="register.html"><img src="images/switcher/register.jpg"></a> </li><li> <a href="register-2.html"><img src="images/switcher/register-2.jpg"></a> </li><li> <a href="coming-soon.html"><img src="images/switcher/coming-soon.jpg"></a> </li><li> <a href="error-page.html"><img src="images/switcher/error-page.jpg"></a> </li><li> <a href="contact.html"><img src="images/switcher/contact.jpg"></a> </li></ul> </div></div>';
	
	if($("#dzSwitcher").length == 0) {  
		jQuery('body').append(dzSwitcher);
	}
}

jQuery(window).on('load',function(){
	
	//=== Switcher panal slide function	=====================//
	jQuery('.styleswitcher').animate({
		'left': '-300px'
	});
	jQuery('.styleswitcher-right').animate({
		'right': '-300px',
		'left': 'auto'
	});
	//jQuery('.switch-btn').addClass('closed');
	//=== Switcher panal slide function END	=====================//
	
});
	
$(function(){		
	"use strict";
	
	addSwitcher();
	
	//=== Switcher panal slide function	=====================//
	jQuery('.switch-btn').on('click',function () {	
		if (jQuery(this).hasClass('open')) {
			jQuery(this).addClass('closed');
			jQuery(this).removeClass('open');
			jQuery('.styleswitcher').animate({
				'left': '-300px'
			});
			jQuery('.styleswitcher-right').animate({
				'right': '-300px',
				'left': 'auto'
			});
		} else {
			if (jQuery(this).hasClass('closed')) {
			jQuery(this).addClass('open');
			jQuery(this).removeClass('closed');
			jQuery('.styleswitcher').animate({
				'left': '0'
			});
			jQuery('.styleswitcher-right').animate({
				'right': '0',
				'left': 'auto'
			});
			}
		}	
	});
	//=== Switcher panal slide function END	=====================//

	//=== Color css change function	=====================//
    // Color changer
    jQuery(".skin-1").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-1.css");
		jQuery(".logo-header img").attr("src", "images/logo.png");
        return false;
    });
    
    jQuery(".skin-2").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-2.css");
		jQuery(".logo-header img").attr("src", "images/logo2.png");
        return false;
    });
    
    jQuery(".skin-3").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-3.css");
		jQuery(".logo-header img").attr("src", "images/logo3.png");
        return false;
    });
	
    jQuery(".skin-4").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-4.css");
		jQuery(".logo-header img").attr("src", "images/logo4.png");
        return false;
    });
	
    jQuery(".skin-5").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-5.css");
		jQuery(".logo-header img").attr("src", "images/logo5.png");
        return false;
    });	
	
    jQuery(".skin-6").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-6.css");
		jQuery(".logo-header img").attr("src", "images/logo6.png");
        return false;
    });		
		
    jQuery(".skin-7").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-7.css");
		jQuery(".logo-header img").attr("src", "images/logo7.png");
        return false;
    });
	
    jQuery(".skin-8").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-8.css");
		jQuery(".logo-header img").attr("src", "images/logo8.png");
        return false;
    });	
	//=== Color css change function	=====================//	
	
	//=== Background image change function	=====================//
	jQuery('.background-switcher li img').on('click',function(){
	 var imgbg = jQuery(this).attr('rel');
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 });
	//=== Background image change function	End=====================//
	
	
	//=== Background pattern change function	=====================//
	jQuery('.pattern-switcher li img').on('click',function(){
	 var imgbg = jQuery(this).attr('rel');
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 jQuery("#bg").css( "background-size", "auto")
	 
	 });
	//=== Background pattern change function End=====================//
	

	//=== Layout boxed & fullscreen change function	=====================//
	jQuery('.layout-view li ').on('click', function(){
		jQuery('.layout-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.wide-layout').on('click',function() { 
		jQuery("body").addClass('wide-layout')
		jQuery("body").removeClass('boxed')
	});
	
	jQuery('.boxed').on('click',function() { 
		jQuery("body").addClass('boxed')
		jQuery("body").removeClass('wide-layout')
	});
	//=== Layout boxed & fullscreen change function	END=====================//
	


	//=== Nav light & dark change function	END=====================//
	jQuery('.nav-view li ').on('click', function(){
		jQuery('.nav-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.nav-light').on('click',function() { 
		jQuery(".header-nav").addClass('nav-light')
		jQuery(".header-nav").removeClass('nav-dark')
	});
	
	jQuery('.nav-dark').on('click',function() { 
		jQuery(".header-nav").addClass('nav-dark')
		jQuery(".header-nav").removeClass('nav-light')
	});
	//=== Nav light & dark change function	END=====================//	
	
	jQuery('.header-view li ').on('click', function(){
		jQuery('.header-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.header-fixed').on('click',function() { 
		jQuery(".main-bar-wraper").addClass('sticky-header')
		jQuery(".main-bar-wraper").removeClass('sticky-no')
	});
	
	jQuery('.header-static').on('click',function() { 
		jQuery(".main-bar-wraper").addClass('sticky-no')
		jQuery(".main-bar-wraper").removeClass('sticky-header')
	});
});