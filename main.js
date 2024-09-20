window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 5) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const switchButton = document.getElementById("switchButton");
const numberdisplay1 = document.getElementById("numberdisplay1");
const numberdisplay2 = document.getElementById("numberdisplay2");

switchButton.addEventListener("change", function () {
  if (this.checked) {
    numberdisplay1.textContent = "$15";
    numberdisplay2.textContent = "$40";
  } else {
    numberdisplay1.textContent = "$25";
    numberdisplay2.textContent = "$50";
  }
});
