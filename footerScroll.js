var footer = $('.footer'),
    extra = 0;

// footer.css({ opacity: '0', display: 'block' });


$(window).scroll(function() {

   var scrolledLength = ( $(window).height() + extra ) + $(window).scrollTop(),
       documentHeight = $(document).height();


   if( scrolledLength >= documentHeight ) {

       footer.addClass('open')
          
        console.log("test") 

   }
   else if ( scrolledLength <= documentHeight && footer.hasClass('open') ) {
        
        footer.removeClass('open') 

   }
});