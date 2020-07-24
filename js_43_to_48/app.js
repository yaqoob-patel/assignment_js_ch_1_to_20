// Question No.1============================================================================

// function myAlert() {
//   alert("Hello Brothers");
// }

// Question No.2============================================================================
// function image1() {
//     alert(" OUT OF STOCK \n TRY LATTER \n THANKS");
// }
// function image2() {
//     alert(" WAIT FOR RESPONCE \n TRY LATTER \n THANKS");
// }
// function image3() {
//     alert(" DICONTINUED ARTICAL  \n THANKS");
// }
// function image4() {
//     alert(" THANKS FOR PURCHASING PHONE FROM US. \n THANKS");
// }

// Question No.3============================================================================

function del1() {
  document.getElementById("tr1").innerHTML = "";
}
function del2() {
  document.getElementById("tr2").innerHTML = "";
}
function del3() {
  document.getElementById("tr3").innerHTML = "";
}
function del4() {
  document.getElementById("tr4").innerHTML = "";
}

// Question No.4============================================================================

// function changeImage() {
//   document.getElementById("image1").src = "images/images2.jfif";
//   //   document.getElementById("image1").width = "300px";
// }

// function sameImage() {
//     document.getElementById("image1").src = "images/image1.jfif";
// }

// Question No.5===================================counter=========================================

// var num = 0;
// var result = document.getElementById("display");

// var heading = document.createElement("div");
// var para = document.createElement("p");
// var att = document.createAttribute("id", "para");
// para.setAttributeNode(att);
// heading.appendChild(para);
// console.log(para);
// console.log(heading);
// document.body.appendChild(heading);
// var text = document.createTextNode("COUNTER");
// heading.appendChild(text);
// heading.style.fontSize = "4rem";
// heading.style.textAlign = "center";
// heading.style.textDecoration = "underline";
// heading.style.color = "lightblue";
// heading.style.backgroundColor = "white";
// heading.style.textShadow = "3px 3px 6px black";

// //==============================Counter button=======================================

// var btnCounter = document.createElement("button");
// var btnId = document.createAttribute("id");
// btnId.value = "countbtn";
// btnCounter.setAttributeNode(btnId);
// var btncount = document.createAttribute("onClick");
// btncount.value = "start()";
// btnCounter.setAttributeNode(btncount);
// var btnText = document.createTextNode("count");
// document.body.appendChild(btnCounter);
// btnCounter.appendChild(btnText);
// console.log(btnCounter);
// btnCounter.style.marginTop = "15px";
// btnCounter.style.marginTop = "15px";

// //======================button reset ===============================================

// var btnReset = document.createElement("button");
// var attResetBtn = document.createAttribute("id");
// attResetBtn.value = "resetBtnId";
// btnReset.setAttributeNode(attResetBtn);
// document.body.appendChild(btnReset);
// btnReset.innerHTML = "Reset";
// console.log(btnReset);
// var resetBtnNewAtt = document.createAttribute("onClick");
// resetBtnNewAtt.value = "resetcounter()";
// btnReset.setAttributeNode(resetBtnNewAtt);

// //==============================functionality=========================
// function start() {
//   interval = setInterval(counterStart, 1000);
//   //   console.log(num);
//   //   return num;
//   document.getElementById("countbtn").disabled = true;
// }
// function counterStart() {
//   num++;
//   result.innerHTML = num;
//   console.log(num);
// }

// function resetcounter() {
//   num = 0;
//   result.innerHTML = 0;
//   console.log("Yaqoob");
//   clearInterval(interval);
//   document.getElementById("countbtn").disabled = false;
// }
