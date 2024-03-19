//header
let line = document.querySelector(".line");

const spans = document.querySelectorAll("#gnb>ul>li");
const intro = document.querySelector("#intro");
const skill = document.querySelector("#skill");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact");
const firstTop = intro.offsetTop;
const secondTop = skill.offsetTop;
const thirdTop = project.offsetTop;
const forthTop = contact.offsetTop;

spans[0].onclick = function () {
  window.scroll({ top: firstTop, behavior: "smooth" });
  spans[1].classList.remove("line");
  spans[2].classList.remove("line");
  spans[3].classList.remove("line");
  spans[0].classList.add("line");
};

spans[1].onclick = function () {
  window.scroll({ top: secondTop, behavior: "smooth" });
  spans[0].classList.remove("line");
  spans[2].classList.remove("line");
  spans[3].classList.remove("line");
  spans[1].classList.add("line");
};

spans[2].onclick = function () {
  window.scroll({ top: thirdTop, behavior: "smooth" });
  spans[0].classList.remove("line");
  spans[1].classList.remove("line");
  spans[3].classList.remove("line");
  spans[2].classList.add("line");
};
spans[3].onclick = function () {
  window.scroll({ top: forthTop, behavior: "smooth" });
  spans[0].classList.remove("line");
  spans[1].classList.remove("line");
  spans[2].classList.remove("line");
  spans[3].classList.add("line");
};

document.addEventListener("DOMContentLoaded", function () {
  const box1 = document.getElementById("intro");
  const box2 = document.getElementById("skill");
  const box3 = document.getElementById("project");
  const box4 = document.getElementById("contact");

  const header = document.querySelector("header");
  const btnLinks = document.querySelectorAll("#gnb>ul>li ");

  const positions = [
    box1.offsetTop,
    box2.offsetTop,
    box3.offsetTop,
    box4.offsetTop,
  ];

  window.addEventListener("scroll", function () {
    let scroll = window.scrollY || window.pageYOffset;

    if (scroll > -10) {
      header.classList.add("current");
    } else {
      header.classList.remove("current");
    }

    btnLinks.forEach((link) => link.classList.remove("line"));

    for (let i = 0; i < positions.length; i++) {
      if (
        scroll >= positions[i] &&
        (i === positions.length - 1 || scroll < positions[i + 1])
      ) {
        btnLinks[i].classList.add("line");
        break;
      }
    }
  });

  document.querySelectorAll("#gnb>ul>li").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let targetId = this.getAttribute("href").substring(1);
      let targetElement = document.getElementById(targetId);
      if (targetElement) {
        let distance = targetElement.offsetTop;
        window.scrollTo({
          top: distance,
          behavior: "smooth",
        });
      }
    });
  });
});
