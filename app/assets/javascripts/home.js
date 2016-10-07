$(document).ready(function(){
  $("#nav_bar_toggle").on("click", function(){
    $("#main_nav_bar").toggleClass("open");
    alert("glory");

    $('#main_nav_bar ul li a').on('click', function(){
     $(this).addClass('current');
    });
  });
});
