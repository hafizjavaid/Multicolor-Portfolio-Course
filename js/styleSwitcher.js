const links = document.querySelectorAll(".alternate-style");
const togglerr = document.querySelector(".toggle-style-switcher");
const bodySkin = document.querySelectorAll(".body-skin");
const totalLinks = links.length;

function setActiveStyle(color) {
  links.forEach((link) => {
    if (color == link.getAttribute("title")) {
      link.removeAttribute("disabled");
    } else {
      link.setAttribute("disabled", "true");
    }
  });
}

togglerr.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

bodySkin.forEach((skin) => {
  skin.addEventListener("change", function () {
    if (this.value === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
});
