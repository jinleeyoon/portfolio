//header
let line= document.querySelector(".line");

const spans = document.querySelectorAll('#gnb>ul>li');
const intro = document.querySelector("#intro");
const skill = document.querySelector("#skill");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact");
const firstTop = intro.offsetTop;
const secondTop =skill.offsetTop;
const thirdTop =project.offsetTop;
const forthTop =contact.offsetTop;

spans[0].onclick = function () {
  window.scroll({ top: firstTop, behavior: 'smooth' });
  spans[1].classList.remove('line');
  spans[2].classList.remove('line');
  spans[3].classList.remove('line');
  spans[0].classList.add('line');
};

spans[1].onclick = function () {
  window.scroll({ top: secondTop, behavior: 'smooth' });
  spans[0].classList.remove('line');
  spans[2].classList.remove('line');
  spans[3].classList.remove('line');
  spans[1].classList.add('line');
};

spans[2].onclick = function () {
  window.scroll({ top: thirdTop, behavior: 'smooth' });
  spans[0].classList.remove('line');
  spans[1].classList.remove('line');
  spans[3].classList.remove('line');
  spans[2].classList.add('line');
};
spans[3].onclick = function () {
  window.scroll({ top: forthTop, behavior: 'smooth' });
  spans[0].classList.remove('line');
  spans[1].classList.remove('line');
  spans[2].classList.remove('line');
  spans[3].classList.add('line');
};

