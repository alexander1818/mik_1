// import i18next from 'i18next';

function dropMenu() {
	let getMenu = document.getElementById('burger');
	
	getMenu.onclick = function() {
		let getSubMenu = document.getElementById('subMenu');
		
		if (getSubMenu.classList.contains('navbar-subMenu')) {
			getSubMenu.classList.remove('navbar-subMenu');
			getSubMenu.classList.add('navbar-subMenu__active');
		}
		else {
			getSubMenu.classList.remove('navbar-subMenu__active');
			getSubMenu.classList.add('navbar-subMenu');
		}
		// console.log(getSubMenu.classList);
	}
	
}
dropMenu();

// Switch languge

function engLanguage() {
	let engLanguage = document.getElementById('eng');
	engLanguage.onclick = function(e) {
		console.log('x')

		i18next.init({
		  lng: 'en',
		  debug: true,
		  resources: {
		    en: {
		      translation: {
		        'en': "Hello World"
		      }
		    },
		    ru: {
		      translation: {
		        'ru': "Привет мир"
		      }
		    }
		  }
		}, function(err, t) {
		  // init set content
		  updateContent();
		});
	}
	function updateContent() {
	  document.getElementById('subMenu').innerHTML = i18next.t('en');
	}

	function changeLng(lng) {
	  i18next.changeLanguage(lng);
	}

	i18next.on('languageChanged', () => {
	  updateContent();
	});

}
engLanguage();
// next/prev buttons
	$('#nextBtn').click(function(){
		   $(".multiple-items").slick('slickNext');
	});

	$('#prevBtn').click(function(){
		   $(".multiple-items").slick('slickPrev');
	});
	
//Slider Partners
$(document).ready(function() {
	$('.multiple-items').slick({
	         slidesToShow: 3,
	         slidesToScroll: 1,
	         Infinite: true,
	         arrows: false,
	         dots: true,
	         speed: 300,
	         focusOnSelect: true,
	         centerPadding: '40px',
	         // centerMode: true,
	         variableWidth: true,
	         responsive: [
	            {
	              breakpoint: 768,
	              settings: {
	                arrows: false,
	                // centerMode: true,
	                centerPadding: '40px',
	                slidesToShow: 3,
	                slidesToScroll: 1,
	              }
	            },
	            {
	              breakpoint: 480,
	              settings: {
	                arrows: false,
	                // centerMode: true,
	                centerPadding: '40px',
	                slidesToShow: 3,
	                slidesToScroll: 1
	              }
	            }
	          ]
	});
	
});
$(document).ready(function() {
	$('.slider-items').slick({
			 Infinite: true,
	         slidesToShow: 3,
	         slidesToScroll: 1,
	         Infinite: true,
	         arrows: false,
	         dots: false,
	         centerPadding: '60px',
	         centerMode: true,
	         // speed: 300,
	         vertical: true,
	         focusOnSelect: true,
	         // centerPadding: '40px',
	         centerMode: true,
	         verticalSwiping: true,
	         // variableWidth: true,
	         responsive: [
	            {
	              breakpoint: 768,
	              settings: {
	                arrows: false,
	                // vertical: false,
	                // centerMode: true,
	                centerPadding: '40px',
	                slidesToShow: 3,
	                slidesToScroll: 1
	              }
	            },
	            {
	              breakpoint: 480,
	              settings: {
	                arrows: false,
	                // vertical: false,
	                // centerMode: true,
	                centerPadding: '40px',
	                slidesToShow: 2,
	                slidesToScroll: 1
	              }
	            }
	          ]

	        
	});
});
function hideDiscription() {
	let getText = document.getElementsByClassName('slick-active');
}
hideDiscription();