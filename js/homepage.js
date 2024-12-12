let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

const selectBtn = document.getElementById("select-btn");
const text = document.getElementById("text");
const option = document.getElementsByClassName("option");

selectBtn.addEventListener("click", function () {
  selectBtn.classList.toggle("active");
});

for (let options of option) {
  options.onclick = function () {
    text.innerHTML = this.textContent;
    selectBtn.classList.remove("active");
  };
}
