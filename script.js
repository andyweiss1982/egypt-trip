const nav = document.querySelector("nav");

function handleScroll() {
  if (window.scrollY > 1200) {
    nav.classList.add("offScreen");
  } else {
    nav.classList.remove("offScreen");
  }
}

window.addEventListener("scroll", handleScroll);
