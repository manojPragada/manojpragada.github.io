var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/;
$(document).scroll(function () {
    var screenHeight = window.innerHeight;
    var screenPos = window.scrollY;
    var ele = document.querySelector("#section-1 #backdrop");
    if ((screenHeight / 2) > screenPos) {
        var currentScale = 1;
        currentScale = parseFloat(currentScale);
        var increment = screenPos / 500;
        currentScale = currentScale + increment;
        ele.style.filter = 'grayscale(0%)';
        ele.style.transform = 'scale(' + currentScale + ')';
    } else if((screenHeight / 1.2) < screenPos){
        var increment = screenPos / 500;
        currentScale = currentScale + increment;
        document.getElementById("myName").style.marginTop = currentScale+"%";
        ele.style.filter = 'grayscale(100%)';
    }
});