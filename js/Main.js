var header=document.getElementById("header")
var white=document.getElementById("White_logo")
var dark =document.getElementById("dark_logo")
window.onscroll=function(){
    if(scrollY>=300){
        header.classList.add("header2")
        white.classList.add("white_logo1")
        dark.classList.add("dark_logo2")
    }
    else{
        header.classList.remove("header2")
        white.classList.remove("white_logo1")
        dark.classList.remove("dark_logo2")
    }
}


var video =document.getElementById("video")
var play = document.getElementById("play")
var clos =document.getElementById("close")

video.addEventListener("click",playvideo)
function playvideo (){
    play.style.visibility="visible"
}
clos.addEventListener("click",function(){
    play.style.visibility="hidden"
})