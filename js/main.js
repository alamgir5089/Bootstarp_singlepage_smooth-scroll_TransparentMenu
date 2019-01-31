
//for scroll up icon
	 

jQuery(document).ready(function() {
      var offset = 100;
      var duration = 300;
      jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > offset) {
      jQuery('.scroll_up').fadeIn(duration);
      } else {
      jQuery('.scroll_up').fadeOut(duration);
      }
      });
      jQuery('.scroll_up').click(function(event) {
event.preventDefault();
jQuery('html, body').animate({scrollTop: 0}, duration);
return false;
})
});
  

// Bootstrap Card Hover Effect ( jQuery )

     $(document).ready(function(){

      $('.hover_effect').hover(
          // trigger when mouse hover
          function(){
              $(this).animate({
                  marginTop: "-=1%",
              },200);
          },

          // trigger when mouse out
          function(){
              $(this).animate({
                  marginTop: "0%"
              },200);
          }
      );
  });


//Transparent Navigation Menu ( bootstrap 4)

(function($){
  "use strict";
    // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#main_nav").offset().top > 100) {
      $("#main_nav").addClass("navbar-shrink");
    } else {
      $("#main_nav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})
(jQuery);






