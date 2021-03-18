var circle=document.getElementById("circle");
var upBTN=document.getElementById("upBtn");
var downBTN=document.getElementById("downBTN");

var rotateValue=circle.style.transform;  /*initially stores 0deg*/
var rotateSum;


upBtn.onclick=function(){
  rotateSum=rotateValue+"rotate(-90deg)";
  circle.style.transform=rotateSum;
  rotateValue=rotateSum;
}

downBtn.onclick=function(){
  rotateSum=rotateValue+"rotate(90deg)";
  circle.style.transform=rotateSum;
  rotateValue=rotateSum;
}
