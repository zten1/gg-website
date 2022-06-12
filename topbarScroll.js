$(window).scroll(function() {
    extra = 0
    var scrolledLength = ( $(window).height() + extra ) + $(window).scrollTop() 
    if( scrolledLength > 1300) {
 
        document.getElementsByClassName("top-bar")[0].style.top = "-55px";
    }
    else if ( scrolledLength < 1300) {
         
        document.getElementsByClassName("top-bar")[0].style.top = "0px";
   }
 });