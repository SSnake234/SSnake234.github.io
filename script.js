// reveal function
const observer = new IntersectionObserver((entries) =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting) entry.target.classList.add("show")
  })
})
const hiddenElem = document.querySelectorAll(".hidden");
hiddenElem.forEach(el => observer.observe(el));

// fuckme function
const observerAnima = new IntersectionObserver((entries) =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting) entry.target.classList.add("showUp")
  })
})
const hiddenAnima = document.querySelectorAll(".animated");
hiddenAnima.forEach(el => observerAnima.observe(el));

// LEFT-ANIMATION

const observerLeft = new IntersectionObserver((entries) =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting) entry.target.classList.add("left-animation")
  })
})
const hiddenLeft = document.querySelectorAll(".left");
hiddenLeft.forEach(el => observerLeft.observe(el));
 
// RIGHT-ANIMATION

const observerRight = new IntersectionObserver((entries) =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting) entry.target.classList.add("right-animation")
  })
})
const hiddenRight = document.querySelectorAll(".right");
hiddenRight.forEach(el => observerRight.observe(el));



// hacking function

const letters= "QWERTYUIOPASDFGHJKLZXCVBNM";

let interval = null;

 const hackingFunc = (event) => {
   let iteration = 0;
   clearInterval(interval);

   interval = setInterval(() => {
     event.target.innerText = event.target.innerText
       .split("")
       .map((letter, index) => {
         if (index < iteration) {
           return event.target.dataset.value[index];
         }

         return letters[Math.floor(Math.random() * 26)];
       })
       .join("");

     if (iteration >= event.target.dataset.value.length) {
       clearInterval(interval);
     }

     iteration += 1 / 3;
   }, 30);   } 
   
   document.querySelector("#cac").ontransitionstart = hackingFunc;  
   document.querySelector("#cac").onmouseover = hackingFunc; 
   
  //  Swiper.js
   
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
