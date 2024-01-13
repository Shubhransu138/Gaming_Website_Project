$(document).ready(function(){
$(".l2").click(function(){
    $(".pcgame").show();
    $(".mobgame").hide();
})

$(".l3").click(function(){
    $(".pcgame").hide();
    $(".mobgame").show();
})
$(".l1").click(function(){
    $(".pcgame").show();
    $(".mobgame").show();
})

let myvideo = document.querySelectorAll(".videoplay");

for (var i = 0; i < myvideo.length; i++) {
    myvideo[i].addEventListener("mouseover", function() {
        this.play();
    })
    myvideo[i].addEventListener("mouseleave", function() {
        this.pause();
    })
}

})
