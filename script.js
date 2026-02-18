function toggleMenu(){
document.getElementById("sidebar").classList.toggle("active");
}

window.addEventListener("scroll",function(){
let elements=document.querySelectorAll(".fade-in");
elements.forEach(el=>{
let position=el.getBoundingClientRect().top;
let screen=window.innerHeight;
if(position<screen-100){
el.classList.add("visible");
}
});
});
