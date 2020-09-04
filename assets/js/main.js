var canvas = document.getElementById("video_canvas");
canvas.width  = $(".second").width(); 
canvas.height  = $(".second").height(); 
var ctx = canvas.getContext("2d");

var video = document.getElementById("videomain");
video.src = "./assets/images/canvas_video.mp4";

video.play();  // start playing
update(); //Start rendering

function update(){
  ctx.drawImage(video,0,0,canvas.width,canvas.height);   
  requestAnimationFrame(update);   
}

//final state
/*
var original_height = 2836;
var original_width = 2639;


var current_height = $(".laptop_container").height();
var current_width = $(".laptop_container").width();

var original_laptop_height = 1322;
var original_laptop_width = 2040;

var final_laptop_height = (original_laptop_height * current_height)/original_height;
var final_laptop_width = (original_laptop_width * current_width)/original_width;
*/



document.addEventListener("wheel", function (e) {

   
    $("section").first().removeClass("active");
     $("#video_canvas").animate({ 
                  width: 350,
                  height: 200
               }, 4000 );
    return false;
    
}, true);

