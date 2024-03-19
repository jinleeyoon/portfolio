let bigPic1 = document.querySelector("#project1>.fullpage");
let bigPic2 = document.querySelector("#project2>.fullpage");
let smallPic = document.querySelectorAll(".tab");

for (let i = 0; i < smallPic.length; i++) {
  smallPic[i].addEventListener("click", changePic);

}

function changePic() {
    let smallPicUrl = window.getComputedStyle(this).backgroundImage;
    smallPicUrl = smallPicUrl.slice(4, -1).replace(/"/g, "");
    bigPic1.style.backgroundImage = `url(${smallPicUrl})`;
    bigPic2.style.backgroundImage = `url(${smallPicUrl})`;
}
