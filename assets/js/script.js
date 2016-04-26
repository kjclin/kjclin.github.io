$(document).ready(function() {
  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
  $(".sidebar-button").click(function () {
    if ($('.sidebar-container').hasClass('active')) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('active');
      $('.sidebar-container').removeClass('active');
      $('.page-wrapper').removeClass('active');
    }
    else {
      $('#sidebar-button').addClass('active');
      $('.sidebar-container').addClass('active');
      $('.page-wrapper').addClass('active');
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
    }
  }
  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:

  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here

  //Implement the "slide to right" when the user clicks on #carousel-prev here



  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});