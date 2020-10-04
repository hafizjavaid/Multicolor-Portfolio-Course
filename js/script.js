// ------------- Portfolio Filteration  Constant
const filterContainer = document.querySelector(".portfolio-filter"),
  // Used To Convert Into an Array
  filterBtns = [...filterContainer.children],
  totalFilterBtn = filterBtns.length,
  portfolioItems = document.querySelectorAll(".portfolio-item"),
  totalPortflioItems = portfolioItems.length;

console.log(filterBtns);
// ----------------------- LightBox Constants

const LightBox = document.querySelector(".lightbox");
const LightBoxImg = document.querySelector(".lightbox-img");
const LightBoxText = document.querySelector(".caption-text");
const LightBoxCounter = document.querySelector(".caption-counter");
const lightBoxClose = document.querySelector(".lightbox-close");
const nextImage = document.querySelector(".next-item");
const prevImage = document.querySelector(".prev-item");

// ----------------------- NavBar Constant

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const sections = document.querySelectorAll(".section");
const navBtn = document.querySelector(".nav-btn");
const aside = document.querySelector("aside");
// console.log(totalPortflioItems);

// console.log(filterContainer.querySelector(".active"));

// ----------------------------Portfolio Filteration Functions

// for (let i = 0; i < totalFilterBtn; i++) {
//   filterBtns[i].addEventListener("click", function () {
//     filterContainer.querySelector(".active").classList.remove("active");
//     this.classList.add("active");

//     // console.log(this.innerHTML + "   " + this);

//     const filterValue = this.getAttribute("data-filter");

//     portfolioItems.forEach((Item) => {
//       if (filterValue === Item.getAttribute("data-category")) {
//         Item.classList.remove("hide");
//         Item.classList.add("show");
//       } else {
//         Item.classList.remove("show");
//         Item.classList.add("hide");
//       }
//       if (filterValue === "*") {
//         Item.classList.remove("hide");
//         Item.classList.add("show");
//       }
//     });
//   });
// }
// ----------------------------Portfolio Filteration Functions

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    // console.log(this.innerHTML + "   " + this);

    const filterValue = this.getAttribute("data-filter");

    portfolioItems.forEach((Item) => {
      if (filterValue === Item.getAttribute("data-category")) {
        Item.classList.remove("hide");
        Item.classList.add("show");
      } else {
        Item.classList.remove("show");
        Item.classList.add("hide");
      }
      if (filterValue === "*") {
        Item.classList.remove("hide");
        Item.classList.add("show");
      }
    });
  });
});

// ---------------------- Lightbox Functions

lightBoxClose.addEventListener("click", function (event) {
  if (event.target === lightBoxClose) {
    toggleLightBox();
  }
});

nextImage.addEventListener("click", nextItem);
prevImage.addEventListener("click", prevItem);

// ----- Next Item
function nextItem() {
  if (itemIndex === totalPortflioItems - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
  // console.log(itemIndex);
}

// ----- Prev Item

function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortflioItems - 1;
  } else {
    itemIndex--;
  }
  changeItem();
  // console.log(itemIndex);
}

let itemIndex = 0;

for (let i = 0; i < totalPortflioItems; i++) {
  portfolioItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightBox();
  });
}

// Change The Image Source In LightBox After Clicking The Next,Prev Buttons

function changeItem() {
  imgSrc = portfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  console.log(imgSrc);
  LightBoxImg.src = imgSrc;
  LightBoxText.innerHTML = portfolioItems[itemIndex].querySelector(
    "h4"
  ).innerHTML;
  LightBoxCounter.innerHTML = itemIndex + 1 + " of " + totalPortflioItems;
}

// ------- Toggle LightBox
function toggleLightBox() {
  LightBox.classList.toggle("open");
}

// ---------------- Nav Fuctionality

navList.forEach((navItem) => {
  const a = navItem.querySelector("a");
  a.addEventListener("click", function () {
    // Remove Back Section

    sections.forEach((section) => {
      section.classList.remove("back-section");
    });

    navList.forEach((Item) => {
      if (Item.querySelector("a").classList.contains("active")) {
        Item.classList.add(".back-section");
      }

      Item.querySelector("a").classList.remove("active");
    });

    this.classList.add("active");

    showSection(this);
    if (window.innerWidth < 1200) {
      navFun();
    }
  });
});

function showSection(element) {
  // console.log(element);

  sections.forEach((section) => {
    section.classList.remove("active");
  });

  const href = element.getAttribute("href").split("#");
  const target = href[1];

  document.querySelector("#" + target).classList.add("active");
}

navBtn.addEventListener("click", () => {
  navFun();
});
function navFun() {
  aside.classList.toggle("open");
  navBtn.classList.toggle("open");
  sections.forEach((section) => {
    section.classList.toggle("open");
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    // document.querySelector(".preloader-overlay").style.display = "none";
    document.querySelector(".preloader-overlay").classList.add("opacity-0");
  }, 2000);
});
