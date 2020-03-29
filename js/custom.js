$(function () {

    // Slideshow 2
    $("#slider1").responsiveSlides({
        speed: 800,
        pager: true,
        nav: false
      });

      $('#accordionSection .card-header').on('click',function(){
        var ids = '#' + $(this).attr('data-id');
          if($(ids).is(":visible")){
            $(ids).hide()
          }else{
            $(ids).show()
          }
    
          
      })

  });