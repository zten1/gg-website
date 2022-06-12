$(window).scroll(function() {
    extra = 0
    var scrolledLength = ( $(window).height() + extra ) + $(window).scrollTop() 
    if( scrolledLength > 1400) {
 
        document.getElementById("box1").style.left = "50%";
        document.getElementById("img1").style.right = "45%";
    }

    if( scrolledLength > 2100) {
 
        document.getElementById("box2").style.right = "50%";
        document.getElementById("img2").style.left = "45%";
    }

    if( scrolledLength > 2800) {
 
        document.getElementById("box3").style.left = "50%";
        document.getElementById("img3").style.right = "45%";
    }

 });