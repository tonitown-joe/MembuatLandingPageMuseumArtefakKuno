let slideIndex = 0; 
let slideInterval; 

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (slideInterval) {
    clearTimeout(slideInterval); 
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  slides[slideIndex - 1].classList.add("fade");

  setTimeout(() => {
    slides[slideIndex - 1].classList.remove("fade");
  }, 1500);

  slideInterval = setTimeout(showSlides, 3000); 
}

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burgerMenu");
  const nav = document.getElementById("navLinks");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
        if (nav.classList.contains("nav-active")) {
          link.style.opacity = "1";
          link.style.transition = `opacity 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        } else {
          link.style.opacity = "";
          link.style.transition = "";
        }
      });

      burger.classList.toggle("toggle");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-active"); 
        burger.classList.remove("toggle"); 
        navLinks.forEach((item) => {
          item.style.opacity = "";
          item.style.transition = "";
        });
      });
    });
  } else {
    console.error(
      "Elemen 'burgerMenu' atau 'navLinks' tidak ditemukan. Pastikan ID di HTML sudah benar."
    );
  }

  showSlides();
});
