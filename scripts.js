var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/;
var section1Height, screenPos;

$(window).on('load', function(){
    section1Height = document.getElementById("section-1").clientHeight;
    document.getElementById("myName").style.marginTop = (section1Height/2) + "px";
});

$(document).scroll(function () {
    var screenHeight = window.innerHeight;
    screenPos = window.scrollY;
    var ele = document.querySelector("#section-1 #backdrop");
    if ((screenHeight / 2) > screenPos) {
        var currentScale = 1;
        currentScale = parseFloat(currentScale);
        var increment = screenPos / 500;
        currentScale = currentScale + increment;
        ele.style.filter = 'grayscale(0%)';
        document.getElementById("myName").style.color = "black";
        ele.style.transform = 'scale(' + currentScale + ')';
        document.getElementById("myName").style.transform = 'scale(' + ((currentScale > 1.4)?currentScale-0.4:1) + ')';
    } else if ((screenHeight / 1.2) < screenPos) {
        ele.style.filter = 'grayscale(100%)';
        document.getElementById("myName").style.color = "white";
    }
    var nameScale = (section1Height/2) + (screenPos / 2);
    if (nameScale > (section1Height - 100)) {
        nameScale = section1Height - 100;
    }
    document.getElementById("myName").style.marginTop = nameScale + "px";   
});