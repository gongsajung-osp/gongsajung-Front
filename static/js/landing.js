(function () {
  "use strict";

  const get = (target) => {
    const els = document.querySelectorAll(target);
    return els.length > 1 ? els : els[0];
  };

  const $slideContainer = get(".slider__wrapper");
  const $slider = get(".slider");

  const $slideIndicator = get(".slide-count");
  const $totalSlides = get(".all-slide");
  const $currentSlide = get(".current-slide");
  const $prevBtn = get(".control__button.prev");
  const $nextBtn = get(".control__button.next");
  const $slide = get(".slide");

  const slideWidth = $slide[0].clientWidth;
  const slideAmount = $slide.length;
  const sliderWidth = slideWidth * slideAmount;
  const slideSpeed = 1000;

  let currentIndex = 1;
  let moveOffset = 0;

  let interval;

  const setAccessibility = () => {
    for (let i = 0; i < $slider.children.length; i++) {
      if (i === currentIndex) {
        $slider.children[i].setAttribute("aria-hidden", false);
      } else {
        $slider.children[i].setAttribute("aria-hidden", true);
      }
    }

    setTimeout(() => {
      $slideIndicator.setAttribute("aria-label", `slide ${$currentSlide.textContent} of ${slideAmount}`);
    }, 100);

  };

  const slideAutoPlay = () => {
    interval = setInterval(() => {
      handleSwipe(1);

      if (currentIndex === $slider.children.length - 1) {
        setTimeout(() => {
          $slider.style.transition = "none";
          currentIndex = 1;
          moveOffset = (100 / slideAmount) * currentIndex;
          $slider.style.transform = `translateX(-${moveOffset}%)`;
        }, slideSpeed);
      }
    }, 3000);
  };

  const handleSwipe = (direction) => {
    currentIndex = currentIndex + direction;

    if (currentIndex >= slideAmount + 2) {
      currentIndex = 4;
    } else if (currentIndex <= 0) {
      currentIndex = 0;
    }

    moveOffset = (100 / slideAmount) * currentIndex;

    if (currentIndex <= 0) {
      $currentSlide.textContent =
        $slider.children[$slider.children.length - 2].dataset.index;
    } else if (currentIndex >= $slider.children.length - 1) {
      $currentSlide.textContent = $slider.children[1].dataset.index;
    } else {
      $currentSlide.textContent = $slider.children[currentIndex].dataset.index;
    }

    $slider.style.transform = `translateX(-${moveOffset}%)`;
    $slider.style.transition = `all ${slideSpeed}ms ease`;

    setAccessibility();
  };

  const handleMoveBtn = (event) => {
    event.preventDefault();
    const $target = event.currentTarget;

    if ($target.id === "nextBtn") {
      handleSwipe(1);

      if (currentIndex === $slider.children.length - 1) {
        setTimeout(() => {
          $slider.style.transition = "none";
          currentIndex = 1;
          moveOffset = (100 / slideAmount) * currentIndex;
          $slider.style.transform = `translateX(-${moveOffset}%)`;
        }, slideSpeed);
      }
    } else {
      handleSwipe(-1);

      if (currentIndex === 0) {
        setTimeout(() => {
          $slider.style.transition = "none";
          currentIndex = $slider.children.length - 2;
          moveOffset = (100 / slideAmount) * currentIndex;
          $slider.style.transform = `translateX(-${moveOffset}%)`;
        }, slideSpeed);
      }
    }
  };

  const setSlideLayout = () => {
    const $firstSlideClone = $slider.firstElementChild.cloneNode(true);
    const $lastSlideClone = $slider.lastElementChild.cloneNode(true);

    $slider.insertBefore($lastSlideClone, $slider.firstElementChild);
    $slider.appendChild($firstSlideClone);
    $slider.style.width = `${sliderWidth}px`;
    $slider.style.transform = `translateX(-${slideWidth}px)`;

    setAccessibility();
  };

  const handleMouseEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    clearInterval(interval);
  };

  const handleMouseLeave = (e) => {
    slideAutoPlay();
  };

  const throttle = (fn, delay) => {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      fn(...args);
    };
  };

  const handleMoveBtnThrottled = throttle(handleMoveBtn, 1000);

  const init = () => {
    setSlideLayout();
    slideAutoPlay();

    $totalSlides.textContent = slideAmount;
    $currentSlide.textContent = currentIndex;

    $prevBtn.addEventListener("click", handleMoveBtnThrottled);
    $nextBtn.addEventListener("click", handleMoveBtnThrottled);

    $slideContainer.addEventListener("mouseenter", handleMouseEnter);
    $slideContainer.addEventListener("mouseleave", handleMouseLeave);
  };

  window.addEventListener("DOMContentLoaded", init);
})();