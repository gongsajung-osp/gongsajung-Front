let slides = document.querySelector(".slides");
let slideImg = document.querySelectorAll(".slides li");
currentIdx = 0;
slideCount = slideImg.length;
prev = document.querySelector(".prev");
next = document.querySelector(".next");
slideWidth = 850;
slideMargin = 20;

let currentSlide = document.querySelector(".current-slide");
let allSlide = document.querySelector(".all-slide");

makeClone();
initfunction();
updateSlideCount();

function makeClone(){
  let cloneSlide_first = slideImg[0].cloneNode(true); //slideImg.firstElementChild.cloneNode(true);
  let cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first); 
  slides.insertBefore(cloneSlide_last,slides.firstElementChild);
}

function initfunction(){
  slides.style.width = (slideWidth + slideMargin) * (slideCount+2) + 400 + "px";
  slides.style.left = -(slideWidth + slideMargin) + 80 + "px";
}

function updateSlideCount() {
    currentSlide.textContent = currentIdx + 1;
    allSlide.textContent = slideCount;
}

setInterval(()=>{
    if (currentIdx <= slideCount-1) {
        slides.style.left = -(currentIdx+2) * (slideWidth+slideMargin) + 80 + "px";
        slides.style.transition = `${0.5}s ease-out`;
      }if (currentIdx === slideCount-1){
        setTimeout(function(){
          slides.style.left = -(slideWidth + slideMargin) + 80 + "px";
          slides.style.transition = `${0}s ease-out`;
        },500);
        currentIdx = -1;
        } 
        currentIdx+=1;
        updateSlideCount();
},4000);

next.addEventListener('click', function () {
  if (currentIdx <= slideCount-1) {
    slides.style.left = -(currentIdx+2) * (slideWidth+slideMargin) + 80 + "px";
    slides.style.transition = `${0.5}s ease-out`;
  }if (currentIdx === slideCount-1){
    setTimeout(function(){
      slides.style.left = -(slideWidth + slideMargin) + 80 + "px";
      slides.style.transition = `${0}s ease-out`;
    },500);
    currentIdx = -1;
    } 
    currentIdx+=1;
    updateSlideCount();
  }
);

prev.addEventListener('click', function () {
  console.log(currentIdx);
    if (currentIdx >= 0) {
      slides.style.left = -(currentIdx) * (slideWidth + slideMargin) + "px";
      slides.style.transition = `${0.5}s ease-out`;
    }if (currentIdx === 0){
      setTimeout(function(){
        slides.style.left = -(slideCount) * (slideWidth + slideMargin)+ "px";
        slides.style.transition = `${0}s ease-out`;
      },500);
      currentIdx=slideCount;
      } 
      currentIdx-=1;
      updateSlideCount();
    }
);


