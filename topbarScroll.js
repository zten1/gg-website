$(window).scroll(function() {
    extra = 0
    var scrolledLength = ( $(window).height() + extra ) + $(window).scrollTop() 
    if( scrolledLength > 1300) {
 
        document.getElementsByClassName("top-bar")[0].style.top = "-55px";
    }
    else if ( scrolledLength < 1300) {
         
        document.getElementsByClassName("top-bar")[0].style.top = "0px";
    }

    if ( scrolledLength > 1840) {
         
        document.getElementsByClassName("menu2-dropdown")[0].style.top = "-15px";
    }

    if ( scrolledLength < 1840) {
         
        document.getElementsByClassName("menu2-dropdown")[0].style.top = "-74px";
    }

    if ( scrolledLength > 100) {
         
        document.getElementsByClassName("down-arrow")[0].style.top = "-20%";
        document.getElementsByClassName("down-arrow")[0].style.opacity = "0.4";
    }

 });


arrow = document.getElementById("arrow");


arrow.addEventListener("click", () => {
    console.log("arrow")
    window.scroll({
        top: 600,
        left: 0,
        behavior: 'smooth'
      });
})

