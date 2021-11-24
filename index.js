let links = document.querySelectorAll("a");
let x = document.getElementById("nav-links");
let btn = document.querySelector(".icon");
links.forEach((link) => {
  link.addEventListener("click", () => {
    let currentLink = document.querySelector(".active");
    currentLink.classList.remove("active");
    link.classList.add("active");
  });
});

btn.addEventListener("click", () => {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});
