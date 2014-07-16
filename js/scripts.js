jQuery( document ).ready( function( $ ) {
  //onepage nav
      $('#navs').onePageNav({
        currentClass: 'active',
        filter: ':not(.external)',
        scrollThreshold: 0.25,
        scrollOffset: 30
      });
  //Sticky Nav
      $(".main-nav").sticky({ topSpacing: 0 });

  //tooltips
      $( 'body' ).tooltip({
        selector: "a[data-toggle=tooltip]"
      });
    //Photo Gallery
      $('#gallery-container').sGallery({
        fullScreenEnabled: true
      });

    //Google Maps
      $('#gmap').gmap3({
        marker:{address:"Haltern am See, Weseler Str. 151", options:{icon: "img/location1.png"}},
        map:{
            options:{
              zoom: 14
            }
           }
      });

      //Contact From
    $(document).ready(function ()
    { 
     $('#submit').formValidator({
        scope: '#form'
      });
      
      $('#post-commentsss').formValidator({
        scope: '#comments-form'
      });
      
      $('#submit,#post-commentsss').click(function() {
            $('input.error-input, textarea.error-input').delay(300).animate({marginLeft:0},100).animate({marginLeft:10},100).animate({marginLeft:0},100).animate({marginLeft:10},100);
        });

      // Form plugin

      var options = {

        beforeSubmit: function() {
          $('.sending').show();

        },
        success: function() {
          $('.sending').hide();
          $('#form').hide();
          $(".mess").show().html('<h5>Thanks !</h5><h5>Your message has been sent.</h5>'); // Change Your message post send
          $('.mess').delay(3000).fadeOut(function() {

            $('#form').clearForm();
            $('#form').delay(3500).show();

          });
        }
      };
      

      $('#form').submit(function() {
        $(this).ajaxSubmit(options);
        return false;
      });
        
    });

}); 