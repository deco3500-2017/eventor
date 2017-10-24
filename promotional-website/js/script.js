$(document).ready(function () {  
	  var top = $('#navbar').offset().top - parseFloat($('#navbar').css('marginTop').replace(/auto/, 100));
	  $(window).scroll(function (event) {
	    // what the y position of the scroll is
	    var y = $(this).scrollTop();
	    // whether that's below the form
	    if (y >= top) {
	      // if so, ad the fixed class
	      $('#navbar').addClass('fixed');
	    } else {
	      // otherwise remove it
	      $('#navbar').removeClass('fixed');
	    }
	  });
});