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
    myNavHeader.classList.add('bg-slate-700')
    myNavHeader.classList.add('opacity-90')
    myNavHeader.classList.remove('bg-transparent')
    myNav.classList.remove("mt-5")
  }else{
    console.log("Scroll Y doesn't passed the window inner height")
    myNavHeader.classList.remove('bg-slate-700')
    myNavHeader.classList.remove('opacity-90')
    myNavHeader.classList.add('bg-transparent')
    myNav.classList.add("mt-5")
  }
}