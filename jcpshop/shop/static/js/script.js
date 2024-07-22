// Script for navbar slide in on small screens

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

const navSlide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }

      // Add event listener to the last link
      if (index === navLinks.length - 1) {
        link.addEventListener("animationend", navBg);
      }
    });

    burger.classList.toggle("toggle");
  });
};

const navBg = () => {
  navLinks.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add('menu-active');
    }, index * 200);

    setTimeout(() => {
      link.classList.remove('menu-active');
    }, (index + 1) * 200);
  });
};

navSlide();