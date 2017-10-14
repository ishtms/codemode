// =============================================================================
// X-CUSTOM.JS
// -----------------------------------------------------------------------------
// Custom JavaScript.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Custom Navbar Offset
//   02. Refresh Scrollspy
//   03. WooCommerce Flexslider
//   04. Prevent Default
// =============================================================================

// Custom Navbar Offset
// =============================================================================

jQuery(document).ready(function($) {

  var $window     = $(window);
  var $this       = $(this);
  var $body       = $('body');
  var $navbar     = $('.x-navbar');
  var $navbarWrap = $('.x-navbar-fixed-top-active .x-navbar-wrap');

  if ( $body.hasClass('page-template-template-layout-home-php') ) {
    $window.scroll(function() {
      var $menutop = $navbarWrap.offset().top - $navbar.outerHeight();
      var $current = $this.scrollTop();
      if ($current >= $menutop) {
        $navbar.addClass('x-navbar-fixed-top');
      } else {
        $navbar.removeClass('x-navbar-fixed-top');
      }
    });
  }

});



// Refresh Scrollspy
// =============================================================================

jQuery(document).ready(function($) {

  var $body       = $('body');
  var $bodyHeight = $body.outerHeight();
  var $navbarNav  = $('.x-navbar .x-nav');

  var timesRun = 0;
  var interval = setInterval(function() {
    timesRun += 1;
    // var $newBodyHeight = $body.outerHeight();
    // if ( $newBodyHeight !== $bodyHeight ) {
    if ( $navbarNav.hasClass('x-nav-scrollspy') ) {
      $body.scrollspy('refresh');
    }
    if ( timesRun === 20 ) {
      clearInterval(interval);
    }
  }, 500);

});



// WooCommerce Flexslider
// =============================================================================

jQuery(document).ready(function($) {

  $('.dc-flexslider').flexslider({
    animation      : 'fade',
    animationSpeed : 250,
    controlNav     : true,
    manualControls : '.dc-flex-control-nav li',
    directionNav   : false,
    slideshow      : false,
    useCSS         : false,
    touch          : true,
    video          : true,
    smoothHeight   : true
  });

  $('.tco-testimonial-flexslider').flexslider({
    selector       : '.x-slides > li',
    animation      : 'fade',
    animationSpeed : 500,
    controlNav     : true,
    manualControls : '.tco-testimonial-control-nav li',
    directionNav   : false,
    slideshow      : true,
    slideshowSpeed : 5000,
    useCSS         : false,
    touch          : true,
    video          : true,
    smoothHeight   : true
  });

});



// Prevent Default
// =============================================================================

jQuery(document).ready(function($) {

  $('.x-navbar .x-nav.left > li > a[href*="#"]').click(function(e) {
    e.preventDefault();
  });

});