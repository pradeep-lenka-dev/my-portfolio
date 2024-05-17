

//add scroll efect on header

window.addEventListener("scroll",function(){
   var nav = document.querySelector("nav")
   nav.classList.toggle("sticky",window.screenY>0);
})