// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import 'animate.css';

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'cards',
  perSlideOffset: 1,
  rotate: true,
});

const forestMatterDesc = document.querySelectorAll('.matter-desc');
const forestMatterImg = document.querySelectorAll('.matter-img');
  
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entry: ", entry)
    if (entry.isIntersecting) {
      console.log("entry is intersecting !")
      entry.target.classList.remove('invisible')
      entry.target.classList.add('animate__animated');
      entry.target.classList.add('animate__fadeInUp');
    }
  });
}, {
  threshold: 0.1 // 10% of element visible
});

forestMatterDesc.forEach((el) => {
  observer.observe(el);
});

forestMatterImg.forEach((el) => {
  observer.observe(el);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
// Nav bar scroll detecting
const myNavHeader = document.getElementById('header')
const myNav = document.getElementById('nav')
window.onscroll = function() {
  if(window.scrollY > window.innerHeight - 10){
    console.log("Scroll Y passed the window inner height")
    myNavHeader.classList.add('bg-teal-900')
    myNavHeader.classList.remove('bg-transparent')
    myNav.classList.remove("mt-5")
  }else{
    console.log("Scroll Y doesn't passed the window inner height")
    myNavHeader.classList.remove('bg-teal-900')
    myNavHeader.classList.add('bg-transparent')
    myNav.classList.add("mt-5")
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const body = document.getElementById('body');
  const overlay = document.getElementById('web-overlay');
  
  // Function to extract background image URL
  function getBackgroundImageUrl(element) {
      const backgroundImage = window.getComputedStyle(element).backgroundImage;
      return backgroundImage.slice(4, -1).replace(/"/g, '');
  }

  // Find all elements with background images
  const elementsWithBackgrounds = Array.from(document.querySelectorAll('*'))
      .filter(el => window.getComputedStyle(el).backgroundImage !== 'none');

  let totalBackgroundImages = elementsWithBackgrounds.length;
  let loadedBackgroundImages = 0;

  if (totalBackgroundImages === 0) {
      overlay.style.display = 'none';
      return;
  }

  elementsWithBackgrounds.forEach(el => {
      const img = new Image();
      img.src = getBackgroundImageUrl(el);

      img.onload = () => {
          console.log("Image loaded! total imageLoaded: ", loadedBackgroundImages + 1)
          loadedBackgroundImages++;
          if (loadedBackgroundImages === totalBackgroundImages) {
              overlay.style.display = 'none';
              body.classList.remove('overflow-hidden')
          }
      };

      img.onerror = () => {
          loadedBackgroundImages++;
          if (loadedBackgroundImages === totalBackgroundImages) {
              overlay.style.display = 'none';
          }
      };
  });
});