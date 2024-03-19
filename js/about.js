let bigPic1 = document.querySelector("#project1>.fullpage");
let bigPic2 = document.querySelector("#project2>.fullpage");
let smallPic1 = document.querySelectorAll("#project1 .tab");
let smallPic2 = document.querySelectorAll("#project2 .tab");

for (let i = 0; i < smallPic1.length; i++) {
  smallPic1[i].addEventListener("click", changePic);
 
}
for (let i = 0; i < smallPic2.length; i++) {
  smallPic2[i].addEventListener("click", changePic1);
 
}

function changePic() {
    let smallPicUrl = window.getComputedStyle(this).backgroundImage;
    smallPicUrl = smallPicUrl.slice(4, -1).replace(/"/g, "");
    bigPic1.style.backgroundImage = `url(${smallPicUrl})`;
   
}
function changePic1() {
    let smallPicUrl = window.getComputedStyle(this).backgroundImage;
    smallPicUrl = smallPicUrl.slice(4, -1).replace(/"/g, "");
    bigPic2.style.backgroundImage = `url(${smallPicUrl})`;
   
}
