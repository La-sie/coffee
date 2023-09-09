const backTopBtn = document.querySelector("[data-back-top-btn]");
const explorebtn = document.getElementById("explore-btn");
const submitbtn = document.getElementById("submit-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
});


function explore(){
    window.alert("Thank you for visiting my page")
}
