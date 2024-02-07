var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
    var rectTangleLocation = rect.getBoundingClientRect();
    var insideRectVal = details.clientX - rectTangleLocation.left;
    if(insideRectVal<rectTangleLocation.width/2){
        var redColor = gsap.utils.mapRange(0, rectTangleLocation.width/2, 255, 0, insideRectVal);
        gsap.to( rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
        }
        );

    }
    else{
        var blueColor = gsap.utils.mapRange(rectTangleLocation.width, rectTangleLocation.width/2, 255, 0, insideRectVal);
        gsap.to( rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
        }
        );
    }
});

rect.addEventListener("mouseleave", function(){
    gsap.to( rect, {
        backgroundColor: `rgba(255,255,255,0)`,
    })
})