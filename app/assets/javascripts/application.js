// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.

// = require jquery
// = require jquery_ujs
// = require turbolinks
// = require_tree .
$(document).ready(function(){
  $("#nav_bar_toggle").on("click", function(){
    $("#main_nav_bar").toggleClass("open");
  });

// MAP
  var myCenter=new google.maps.LatLng(42.671425,23.3482661);

  function initialize()
  {
  var mapProp = {
    center:myCenter,
    zoom:18,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    };

  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker=new google.maps.Marker({
    position:myCenter,
    });

  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
    content:"Добре Дошли!"
    });

  infowindow.open(map,marker);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  // ASCENSOR plugin
  var ascensor = $('#content').ascensor({direction:"x"});
  var ascensorInstance = $('#content').data('ascensor');

  			$(".links-to-floor li").click(function(event, index) {
  				ascensorInstance.scrollToFloor($(this).index());
  			});

  			$(".links-to-floor li:eq("+ ascensor.data("current-floor") +")").addClass("selected");


        $('#content').ascensor({
          AscensorName:'ascensor',
           ChildType:'div',
           AscensorFloorName:'Home | Implementation | HTML | Jquery | CSS | Smartphone | End',
           Time:1000,
           Easing:'easeInOutCubic',
           WindowsOn:1,
           Direction:'chocolate',
           AscensorMap:'1|1 & 1|2 & 2|2 & 1|3 & 1|4 & 2|4 & 1|5',
           KeyNavigation: true,
           Queued:false,
           QueuedDirection:"x"
        });
});
