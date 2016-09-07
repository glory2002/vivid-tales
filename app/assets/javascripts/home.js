
$(document).ready(function(){
  $("#nav_bar_toggle").on("click", function(){
    $("#main_nav_bar").toggleClass("open");
    alert("Glory");
});
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
