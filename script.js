window.addEventListener("scroll",() =>{
const navbar = document.querySelector(".navbar");
if(window.scrollY >50){
  navbar.classList.add("scrolled");

}
else{
  navbar.classList.remove("scrolled");
}
}
);

window.addEventListener("DOMContentLoaded",() => {
const slides = document.querySelectorAll(".hero-container")
  const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentslide = 0;
slides[currentslide].classList.add("active");
setInterval(()=> {
  slides[currentslide].classList.remove("active");
  currentslide++;
  if(currentslide>=slides.length){
    currentslide = 0;
  }
  slides[currentslide].classList.add("active");

},

4000);


nextBtn.addEventListener("click",() => {
  slides[currentslide].classList.remove("active");
  currentslide++;
  if(currentslide>=slides.length){
    currentslide = 0;
  }
  slides[currentslide].classList.add("active");

});
prevBtn.addEventListener("click",() => {
  slides[currentslide].classList.remove("active");
  currentslide--;
  if(currentslide<0){
    currentslide = slides.length-1;
  }
  slides[currentslide].classList.add("active");

});
}
);
