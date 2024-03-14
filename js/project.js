let carouselInner = document.querySelector(".projects");
let items = document.querySelectorAll(".project");

let currentIndex = 0;
let totalItems = items.length;
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");

function showCurrent() {
   carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function next() {
   currentIndex = (currentIndex + 1) % totalItems;
   showCurrent();
}
function prev() {
   currentIndex = (currentIndex - 1 + totalItems) % totalItems;
   showCurrent();
}
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

