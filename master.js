let images = Array.from(document.images);
let next = document.querySelector("#next");
let back = document.querySelector("#back");
let btnNumber = document.querySelector(".btn-number");
let defualtImg = 0;

createNumImg();
next.onclick = nextImg;
back.onclick = backImg;

function nextImg() {
  if (defualtImg < images.length - 1) {
    defualtImg++;
    activeImg();
    activeNum();
    slidString()
    activeBtn(1);
    activeBtn(0);
  } 
  else {  
    disableBun(1);
    }
  }
  function backImg() {
    if (defualtImg > 0) {
      defualtImg--;
      activeImg();
      activeNum();
      slidString()
      activeBtn(0)
      activeBtn(1)
    } 
    else {
      disableBun(0);
  }
}

btnNumber.addEventListener('click',(e)=>{
  let target = e.target
  if(target.classList.contains('btn-number') === false){
    defualtImg = target.innerHTML -1
    activeImg()
    activeNum()
    activeBtn(0)
    activeBtn(1)
    slidString()
  }
})

function createNumImg() { 
  let template = "";
  for (let i = 0; i < images.length; i++) {
    if (defualtImg === i) {
      template += `<span class='active'>${i + 1}</span>`;
    } else {
      template += `<span>${i + 1}</span>`;
    }
  }
  btnNumber.innerHTML = template;
}

function activeImg() {
  images.forEach((img) => {
    img.classList.remove("active");
  });
  images[defualtImg].classList.add("active");
}

function activeNum() {
  let divNum = document.querySelectorAll(".btn-number span");
  divNum.forEach((span) => {
    span.classList.remove("active");
  });
  divNum[defualtImg].classList.add("active");
}

function activeBtn(numberBtn) {
  let divBtn = document.querySelectorAll(".control button");
  divBtn[numberBtn].classList.remove("disable");
}
function disableBun(numberBtn) {
  let divBtn = document.querySelectorAll(".control button");
  divBtn[numberBtn].classList.add("disable");
}

function slidString(){
  let slidStr = document.querySelector('.image span')
  slidStr.innerHTML = `Slider #${defualtImg+1}`
}
