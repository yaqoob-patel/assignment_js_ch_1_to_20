//question Node.1================================================================

// var objectOfGiven = document.getElementById("main-content").children;
// var num = objectOfGiven.length;
// console.log(num);
// var arrOfGivenObject = [];
// for (var i = 0; i < num; i++) {
//   var objectOfGiven = document
//     .getElementById("main-content")
//     .getElementsByTagName("p")[i].innerText;
//   arrOfGivenObject.push(objectOfGiven);
// }

// // console.log(objectOfGiven);
// // console.log(arrOfGivenObject);
// console.log(arrOfGivenObject);
// var text = document.createElement("p");
// document.body.appendChild(text);
// count = objectOfGiven.length;
// var count = arrOfGivenObject.length;
// console.log(count);
// for (var i = 0; i < count; i++) {
//   text.innerHTML = arrOfGivenObject[i];
//   document.write(arrOfGivenObject[i]);
// }

//question Node.2================================================================

// var elemOfMain_content0 = document
//   .getElementById("main-content")
//   .getElementsByTagName("p")[0].innerText;
// var elemOfMain_content1 = document
//   .getElementById("main-content")
//   .getElementsByTagName("p")[1].innerHTML;
// var elemOfMain_content2 = document
//   .getElementById("main-content")
//   .getElementsByTagName("p")[2].innerHTML;
// var elemOfMain_content3 = document
//   .getElementById("main-content")
//   .getElementsByTagName("p")[3].innerHTML;
// var elemOfMain_content4 = document
//   .getElementById("main-content")
//   .getElementsByTagName("p")[4].innerText;
// //   .getElementsByClassName("render");

// // console.log(elemOfMain_content0);
// // console.log(elemOfMain_content1);
// // console.log(elemOfMain_content2);
// // console.log(elemOfMain_content3);
// // console.log(elemOfMain_content4);
// // elemOfMain_content0.style.color = "red";

// var qNo1Div = document.createElement("div");
// var qNo1P = document.createElement("p");
// qNo1Div.appendChild(qNo1P);
// document.body.appendChild(qNo1Div);
// qNo1Div.style.lineHeight = "50px";
// qNo1Div.style.textAlign = "left";
// // console.log(qNo1Div);
// qNo1Div.style.paddingLeft = "20px";
// qNo1Div.style.width = "33%";
// qNo1Div.style.color = "white";
// qNo1Div.style.textAlign = "center";

// qNo1Div.style.backgroundColor = "black";
// qNo1Div.style.color = "lightgrey";

// qNo1Div.innerHTML =
//   elemOfMain_content0 +
//   "<br>" +
//   elemOfMain_content1 +
//   "<br>" +
//   elemOfMain_content2 +
//   "<br>" +
//   elemOfMain_content3 +
//   "<br>" +
//   elemOfMain_content4 +
//   "<br>";
// Question Node.3 =========================================================================

// var renderByClassName = document.getElementsByClassName("render");
// var num = renderByClassName.length;
// console.log(renderByClassName);
// console.log(num);

// for (var i = 0; i < num; i++) {
//   renderByClassName[i];
//   console.log(renderByClassName[i]);
//   document.write(renderByClassName[i].innerHTML + "<br>");
// }

// question No.4 & 5  =============================================================================

// var textFirstName = "Muhammad";
// var textLastName = "Yaqoob";

// var targetByClass = document.getElementsByClassName("content")[0];
// console.log(targetByClass);
// var inputLabel1 = targetByClass.children[1];
// inputLabel1.value = textFirstName;
// console.log(inputLabel1);

// var inputLabel2 = targetByClass.children[3];
// inputLabel2.value = textLastName;

// console.log(inputLabel2);

// question No.2(1)  =============================================================================

// var nodeTypeId = document.getElementById("form-content").nodeType;
// var count = document.getElementById("form-content").children.length;
// console.log(count);
// console.log(nodeTypeId);

// for (var i = 0; i < count; i++) {
//   if (nodeTypeId === 1) {
//     console.log(
//       document.getElementById("form-content").children[i].textContent
//     );
//     document.write(
//       " TEXT " +
//         i +
//         document.getElementById("form-content").children[i].textContent +
//         "<br>"
//     );
//   }
// }
// question No.2(2)  ======================================================================

// var idLastName = document.getElementById("lastName").nodeType;
// var idLastNameCNode = document.getElementById("lastName").textContent;

// console.log(idLastName);
// console.log(idLastNameCNode);

// document.write(
//   " node type of element having id is " +
//     idLastName +
//     "<br>" +
//     " and its child node is " +
//     idLastNameCNode
// );

// question No.2(3)  ======================================================================

// var idLastName = document.getElementById("lastName").childNodes[0];
// var idLastNameCNode = document.getElementById("lastName").firstChild;
// idLastName.textContent = "My Name : Yaqoob";
// // idLastName.textContent = "";
// console.log(idLastName);
// console.log(idLastNameCNode);
// console.log(document.getElementById("lastName").lastChild);

// question No.2(4)  ======================================================================

// var idFirstChild = document.getElementById("main-content").firstChild;
// var idLastChild = document.getElementById("main-content").lastChild;
// console.log(idFirstChild);

// console.log(idLastChild);

// document.write(
//   "Get First and last child of id “main-content” is : " +
//     " <br> " +
//     idLastChild +
//     " and <br> " +
//     idFirstChild
// );

// question No.2(5)  ======================================================================

// var idnextSibling = document.getElementById("lastName").nextSibling;
// var idPreviousSibling = document.getElementById("lastName").previousSibling;
// console.log(idnextSibling);
// console.log(idPreviousSibling);

// question No.2(6)  ======================================================================

// var idParentNode = document.getElementById("email").parentNode;
// var idNodeType = document.getElementById("email").nodeType;
// console.log(idParentNode);
// console.log(idNodeType);

// document.write(
//   "Parent Node Is : " +
//     idParentNode.textContent +
//     "and it's a Text Node : " +
//     idNodeType
// );

// +++++++++++++++++++++++++++++++++++++++++++END Of EXCERSICE +++++++++++++++++++++++++++++++
