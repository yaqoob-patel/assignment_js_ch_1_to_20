// // Question Node.1================================================================

// var name1 = document.createElement("div");
// var para1 = document.createElement("p");
// var attId = document.createAttribute("id");
// attId.value = "paraId";
// para1.setAttributeNode(attId);
// name1.appendChild(para1);
// document.body.appendChild(name1);
// console.log(name1);
// console.log(para1);
// textInput = "Name : <br>";
// para1.innerHTML = textInput;
// // ==========================creating input field=====================================
// var field1 = document.createElement("input");
// field1.setAttribute("type", "text");
// field1.setAttribute("value", "yaqoob");
// field1.setAttribute("id", "input1Id");
// field1.setAttribute("class", "input1Class");
// field1.setAttribute("placeHolder", "Name");

// para1.appendChild(field1);
// console.log(field1);

// // creating another input field=====================================================

// var name2 = document.createElement("div");
// var para2 = document.createElement("p");
// var attId2 = document.createAttribute("id");
// attId2.value = "para2Id";
// para2.setAttributeNode(attId2);
// name2.appendChild(para2);
// document.body.appendChild(name2);
// console.log(name2);
// console.log(para2);
// textInput2 = "Fathers Name :  <br>";
// para2.innerHTML = textInput2;

// var field2 = document.createElement("input");
// field2.setAttribute("type", "text");
// field2.setAttribute("id", "input2Id");
// field2.setAttribute("class", "input2Class");
// field2.setAttribute("placeHolder", "Fathers Name");

// para2.appendChild(field2);
// console.log(field2);

// // creating another input field=====================================================

// var name3 = document.createElement("div");
// var para3 = document.createElement("p");
// var attId3 = document.createAttribute("id");
// attId3.value = "para2Id";
// para3.setAttributeNode(attId3);
// name3.appendChild(para3);
// document.body.appendChild(name3);
// console.log(name3);
// console.log(para3);
// textInput3 = "Address :  <br>";
// para3.innerHTML = textInput3;

// var field3 = document.createElement("input");
// field3.setAttribute("type", "text");
// field3.setAttribute("id", "input3Id");
// field3.setAttribute("class", "input3Class");
// field3.setAttribute("placeHolder", "Address");

// para3.appendChild(field3);
// console.log(field3);

// // creating another input field=====================================================

// var name4 = document.createElement("div");
// var para4 = document.createElement("p");
// var attId4 = document.createAttribute("id");
// attId4.value = "para4Id";
// para4.setAttributeNode(attId4);
// name4.appendChild(para4);
// document.body.appendChild(name4);
// console.log(name4);
// console.log(para4);
// textInput4 = "Phone No. :  <br>";
// para4.innerHTML = textInput4;

// var field4 = document.createElement("input");
// field4.setAttribute("type", "number");
// field4.setAttribute("id", "input4Id");
// field4.setAttribute("class", "input4Class");
// field4.setAttribute("placeholder", "03003644505");

// para4.appendChild(field4);
// console.log(field4);

// // creating another Submitt Button=====================================================

// var name5 = document.createElement("div");
// var para5 = document.createElement("p");
// var attId5 = document.createAttribute("id");
// attId5.value = "para5Id";
// para5.setAttributeNode(attId5);
// name5.appendChild(para5);
// document.body.appendChild(name5);
// console.log(name5);
// console.log(para5);
// textInput5 = "submit :  <br>";
// para5.innerHTML = textInput5;

// var field5 = document.createElement("button");
// field5.setAttribute("type", "submit");
// field5.setAttribute("onclick", "dataOnBrowser()");
// field5.setAttribute("id", "input5Id");
// field5.setAttribute("class", "input5Class");
// field5.setAttribute("placeHolder", "03003655505");
// field5.innerHTML = "Click to Submit";

// para5.appendChild(field5);
// console.log(field5);

// // data targeting===================================================
// function dataOnBrowser() {
//   var data1 = document.getElementById("input1Id").value;
//   var data2 = document.getElementById("input2Id").value;
//   var data3 = document.getElementById("input3Id").value;
//   var data4 = document.getElementById("input4Id").value;
//   var data5 = document.getElementById("input4Id").type;
//   console.log(data1);
//   console.log(data2);
//   console.log(data3);
//   console.log(data4);
//   console.log(data5);

//   var WholeData =
//     "<h3>Name : " +
//     data1 +
//     "<br>" +
//     "Fathers Name : " +
//     data2 +
//     "<br>" +
//     "Address : " +
//     data3 +
//     "<br>" +
//     "Phone No.: " +
//     data4 +
//     "<h3>";
//   document.write(WholeData);
// }

// Question No.2=================================================================

// var contant = document.createElement("div");
// var contantPara = document.createElement("p");
// var contantParaAtt = document.createAttribute("id", "para");
// contantParaAtt.value = "para";
// contantPara.setAttributeNode(contantParaAtt);
// contant.appendChild(contantPara);
// document.body.appendChild(contant);

// newContantAtt = document.createAttribute("onClick", "fullpara()");
// newContantAtt.value = "fullpara()";
// contant.setAttributeNode(newContantAtt);

// console.log(contant);
// contant.style.color = "red";
// contant.innerHTML =
//   "In this article, I’d like to reacquaint you with...........<br>" + "More";
// var newContant = document.createElement("a");
// newContant.innerHTML = "for detail clickMe";
// var newContantAtt = document.createAttribute("id");
// newContantAtt.value = "fullPara()";
// newContant.setAttributeNode(newContantAtt);

// document.body.appendChild(newContant);
// var newContantHerfAtt = document.createAttribute("href");
// newContantHerfAtt.value =
//   "https://www.smashingmagazine.com/2011/11/the-perfect-paragraph/";
// newContant.setAttributeNode(newContantHerfAtt);

// console.log(newContant);
// function fullpara() {
//   contant.innerHTML =
//     "In this article, I’d like to reacquaint you with the humble workhorse of communication that is the paragraph.Paragraphs are everywhere.In fact, at the high risk of stating the obvious, you are reading one now.Despite their ubiquity, we frequently neglect their presentation.This is a mistake.";
// }

// Quesastion No.3 =======================================================================

// // Question Node.1================================================================

// var name1 = document.createElement("div");
// var para1 = document.createElement("p");
// var attId = document.createAttribute("id");
// attId.value = "paraId";
// para1.setAttributeNode(attId);
// name1.appendChild(para1);
// document.body.appendChild(name1);
// console.log(name1);
// console.log(para1);
// textInput = "Name : <br>";
// para1.innerHTML = textInput;
// // ==========================creating input field=====================================
// var field1 = document.createElement("input");
// field1.setAttribute("type", "text");
// field1.setAttribute("value", "yaqoob");
// field1.setAttribute("id", "input1Id");
// field1.setAttribute("class", "input1Class");
// field1.setAttribute("placeHolder", "Name");

// para1.appendChild(field1);
// console.log(field1);

// // creating another input field=====================================================

// var name2 = document.createElement("div");
// var para2 = document.createElement("p");
// var attId2 = document.createAttribute("id");
// attId2.value = "para2Id";
// para2.setAttributeNode(attId2);
// name2.appendChild(para2);
// document.body.appendChild(name2);
// console.log(name2);
// console.log(para2);
// textInput2 = "Fathers Name :  <br>";
// para2.innerHTML = textInput2;

// var field2 = document.createElement("input");
// field2.setAttribute("type", "text");
// field2.setAttribute("id", "input2Id");
// field2.setAttribute("class", "input2Class");
// field2.setAttribute("placeHolder", "Fathers Name");

// para2.appendChild(field2);
// console.log(field2);

// // creating another input field=====================================================

// var name3 = document.createElement("div");
// var para3 = document.createElement("p");
// var attId3 = document.createAttribute("id");
// attId3.value = "para2Id";
// para3.setAttributeNode(attId3);
// name3.appendChild(para3);
// document.body.appendChild(name3);
// console.log(name3);
// console.log(para3);
// textInput3 = "Address :  <br>";
// para3.innerHTML = textInput3;

// var field3 = document.createElement("input");
// field3.setAttribute("type", "text");
// field3.setAttribute("id", "input3Id");
// field3.setAttribute("class", "input3Class");
// field3.setAttribute("placeHolder", "Address");

// para3.appendChild(field3);
// console.log(field3);

// // creating another input field=====================================================

// var name4 = document.createElement("div");
// var para4 = document.createElement("p");
// var attId4 = document.createAttribute("id");
// attId4.value = "para4Id";
// para4.setAttributeNode(attId4);
// name4.appendChild(para4);
// document.body.appendChild(name4);
// console.log(name4);
// console.log(para4);
// textInput4 = "Phone No. :  <br>";
// para4.innerHTML = textInput4;

// var field4 = document.createElement("input");
// field4.setAttribute("type", "number");
// field4.setAttribute("id", "input4Id");
// field4.setAttribute("class", "input4Class");
// field4.setAttribute("placeholder", "03003644505");

// para4.appendChild(field4);
// console.log(field4);

// // creating another Submitt Button=====================================================

// var name5 = document.createElement("div");
// var para5 = document.createElement("p");
// var attId5 = document.createAttribute("id");
// attId5.value = "para5Id";
// para5.setAttributeNode(attId5);
// name5.appendChild(para5);
// document.body.appendChild(name5);
// console.log(name5);
// console.log(para5);
// textInput5 = "submit :  <br>";
// para5.innerHTML = textInput5;

// var field5 = document.createElement("button");
// field5.setAttribute("type", "submit");
// field5.setAttribute("onclick", "dataOnBrowser()");
// field5.setAttribute("id", "input5Id");
// field5.setAttribute("class", "input5Class");
// field5.setAttribute("placeHolder", "03003655505");
// field5.innerHTML = "Click to Submit";

// para5.appendChild(field5);
// console.log(field5);

// // data targeting===================================================
// function dataOnBrowser() {
//   var data1 = document.getElementById("input1Id").value;
//   var data2 = document.getElementById("input2Id").value;
//   var data3 = document.getElementById("input3Id").value;
//   var data4 = document.getElementById("input4Id").value;
//   var data5 = document.getElementById("input4Id").type;
//   console.log(data1);
//   console.log(data2);
//   console.log(data3);
//   console.log(data4);
//   console.log(data5);

//   var WholeData =
//     "<h3>Name : " +
//     data1 +
//     "<br>" +
//     "Fathers Name : " +
//     data2 +
//     "<br>" +
//     "Address : " +
//     data3 +
//     "<br>" +
//     "Phone No.: " +
//     data4 +
//     "<h3>";
//   document.write(WholeData);
// }

// Question No.2=================================================================

// var contant = document.createElement("div");
// var contantPara = document.createElement("p");
// var contantParaAtt = document.createAttribute("id", "para");
// contantParaAtt.value = "para";
// contantPara.setAttributeNode(contantParaAtt);
// contant.appendChild(contantPara);
// document.body.appendChild(contant);

// newContantAtt = document.createAttribute("onClick", "fullpara()");
// newContantAtt.value = "fullpara()";
// contant.setAttributeNode(newContantAtt);

// console.log(contant);
// contant.style.color = "red";
// contant.innerHTML =
//   "In this article, I’d like to reacquaint you with...........<br>" + "More";
// var newContant = document.createElement("a");
// newContant.innerHTML = "for detail clickMe";
// var newContantAtt = document.createAttribute("id");
// newContantAtt.value = "fullPara()";
// newContant.setAttributeNode(newContantAtt);

// document.body.appendChild(newContant);
// var newContantHerfAtt = document.createAttribute("href");
// newContantHerfAtt.value =
//   "https://www.smashingmagazine.com/2011/11/the-perfect-paragraph/";
// newContant.setAttributeNode(newContantHerfAtt);

// console.log(newContant);
// function fullpara() {
//   contant.innerHTML =
//     "In this article, I’d like to reacquaint you with the humble workhorse of communication that is the paragraph.Paragraphs are everywhere.In fact, at the high risk of stating the obvious, you are reading one now.Despite their ubiquity, we frequently neglect their presentation.This is a mistake.";
// }

//Queastion No.3 =======================================================================

// var table = document.createElement("table");
// var tableId = document.createAttribute("id", "idTable");
// tableId.value = "idTable";
// table.setAttributeNode(tableId);
// var tableRow = document.createElement("tr");
// table.appendChild(tableRow);

// var tableHeading1 = document.createElement("th");
// var tableHeading2 = document.createElement("th");
// var tableHeading3 = document.createElement("th");
// var tableHeading4 = document.createElement("th");
// // var tableHeading25 = document.createElement("th");

// tableRow.appendChild(tableHeading1);
// tableRow.appendChild(tableHeading2);
// tableRow.appendChild(tableHeading3);
// tableRow.appendChild(tableHeading4);
// // tableRow.appendChild(tableHeading25);

// tableHeading1.innerHTML = "Index";
// tableHeading2.innerHTML = "Name";
// tableHeading3.innerHTML = "Numbers";
// tableHeading4.innerHTML = "Action";

// tableHeading1.style.border = "1px solid black";
// tableHeading2.style.border = "1px solid black";
// tableHeading3.style.border = "1px solid black";
// tableHeading4.style.border = "1px solid black";
// tableHeading1.style.backgroundColor = "black";
// tableHeading2.style.backgroundColor = "black";
// tableHeading3.style.backgroundColor = "black";
// tableHeading4.style.backgroundColor = "black";
// // tableHeading25.style.backgroundColor = "black";
// // tableHeading25.style.color = "lightgrey";
// tableHeading4.style.color = "lightgrey";
// tableHeading3.style.color = "lightgrey";
// tableHeading2.style.color = "lightgrey";
// tableHeading1.style.color = "lightgrey";

// table.style.border = "4px solid black";
// table.style.width = "33%";
// table.style.textAlign = "center";

// var tableRow2 = document.createElement("tr");
// table.appendChild(tableRow2);
// // console.log(tableRow2);

// var tableData1 = document.createElement("td");
// var tableData2 = document.createElement("td");
// var tableData3 = document.createElement("td");
// var tableData4 = document.createElement("button");
// var tableData26 = document.createElement("button");

// // var idTableData4 = document.createAttribute("id");
// // idTableData4.value = "del1";
// // tableData4.setAttributeNode(idTableData4);

// //==================edit function==================================
// var delTableData26 = document.createAttribute("onclick");
// delTableData26.value = "edit1()";
// tableData26.setAttributeNode(delTableData26);
// var newInputHeading;
// // console.log(newInputHeading);
// var editForm;
// var nameEdit;
// function edit1() {
//   editForm = document.createElement("form");
//   var editFormId = document.createAttribute("id");
//   editFormId.value = "idForm";
//   editForm.setAttributeNode(editFormId);
//   document.body.appendChild(editForm);

//   nameEdit = document.createElement("input");
//   var nameEditId = document.createAttribute("id");
//   nameEditId.value = "newName";
//   nameEdit.setAttributeNode(nameEditId);
//   var nameTypeAtt = document.createAttribute("type");
//   nameTypeAtt.value = "text";
//   nameEdit.setAttributeNode(nameTypeAtt);
//   // var inputNameAtt=document.createAttribute("value")
//   editForm.appendChild(nameEdit);

//   editForm.innerHTML = "F O R M";
//   nameEdit.value = tableData2.innerHTML;

//   document.body.appendChild(nameEdit);
//   var submitBtn = document.createElement("button");
//   var submitBtnAttr = document.createAttribute("onClick");
//   submitBtnAttr.value = "submitCall()";
//   submitBtn.setAttributeNode(submitBtnAttr);
//   submitBtn.innerHTML = "SUBMIT";

//   var subBtnType = document.createAttribute("type");
//   subBtnType.value = "submit";
//   submitBtn.setAttributeNode(subBtnType);

//   var subBtnName = document.createAttribute("name");
//   subBtnName.value = "submit";
//   submitBtn.setAttributeNode(subBtnName);
//   // console.log(submitBtn);

//   document.body.appendChild(submitBtn);

//   newInputHeading = document.getElementById("newName");
//   //   console.log(nameEdit);
//   //   tableData2.innerHTML = ;

//   // console.log(newInputHeading);
//   // console.log(editForm);
//   // return newInputHeading;
// }

// var delTableData4 = document.createAttribute("onclick");
// delTableData4.value = "rem1()";
// tableData4.setAttributeNode(delTableData4);
// //=================================functions remove and Edit=======================
// function rem1() {
//   document.getElementById("idTable");
//   console.log(table.childNodes[1]);
//   table.childNodes[1].innerHTML = "";
// }

// function submitCall() {
//   // console.log(res);
//   //   tableData2.innerHTML = tableData2;
//   tableData2.innerHTML = newInputHeading;
//   // console.log(typeof tableData2);
//   // console.log(typeof editForm);
//   tableData2.innerHTML = nameEdit.value;
// }

// // tableRow2.appendChild(idTableRow2);

// tableData1.style.border = "1px solid black";
// tableData2.style.border = "1px solid black";
// tableData3.style.border = "1px solid black";
// tableData4.style.border = "1px solid black";
// tableData26.style.border = "1px solid black";
// tableData26.style.marginLeft = "20px";

// tableData1.innerHTML = "0";
// tableData2.innerHTML = "Yaqoob";
// tableData3.innerHTML = "10";
// tableData4.innerHTML = "Delete";
// tableData26.innerHTML = "Edit";

// tableRow2.appendChild(tableData1);
// tableRow2.appendChild(tableData2);
// tableRow2.appendChild(tableData3);
// tableRow2.appendChild(tableData4);
// tableRow2.appendChild(tableData26);

// table.appendChild(tableRow2);

// // document.body.appendChild(table);

// // console.log(table);

// var tableRow3 = document.createElement("tr");
// table.appendChild(tableRow3);

// var tableData5 = document.createElement("td");
// var tableData6 = document.createElement("td");
// var tableData7 = document.createElement("td");
// var tableData8 = document.createElement("button");
// var tableData27 = document.createElement("button");

// var delTableData8 = document.createAttribute("onclick");
// delTableData8.value = "rem2()";
// tableData8.setAttributeNode(delTableData8);

// function rem2() {
//   document.getElementById("idTable");
//   console.log(table.childNodes[2]);
//   table.childNodes[2].innerHTML = "";
// }

// tableRow3.appendChild(tableData5);
// tableRow3.appendChild(tableData6);
// tableRow3.appendChild(tableData7);
// tableRow3.appendChild(tableData8);
// tableRow3.appendChild(tableData27);

// tableData5.innerHTML = "1";
// tableData6.innerHTML = "Khalid";
// tableData7.innerHTML = "9";
// tableData8.innerHTML = "Delete";
// tableData27.innerHTML = "Edit";

// tableData5.style.border = "1px solid black";
// tableData6.style.border = "1px solid black";
// tableData7.style.border = "1px solid black";
// tableData8.style.border = "1px solid black";
// tableData27.style.border = "1px solid black";
// tableData27.style.marginLeft = "20px ";
// table.appendChild(tableRow3);

// var tableRow4 = document.createElement("tr");
// table.appendChild(tableRow4);

// var tableData9 = document.createElement("td");
// var tableData10 = document.createElement("td");
// var tableData11 = document.createElement("td");
// var tableData12 = document.createElement("button");
// var tableData28 = document.createElement("button");

// var delTableData12 = document.createAttribute("onclick");
// delTableData12.value = "rem3()";
// tableData12.setAttributeNode(delTableData12);

// function rem3() {
//   document.getElementById("idTable");
//   console.log(table.childNodes[3]);
//   table.childNodes[3].innerHTML = "";
// }

// tableRow4.appendChild(tableData9);
// tableRow4.appendChild(tableData10);
// tableRow4.appendChild(tableData11);
// tableRow4.appendChild(tableData12);
// tableRow4.appendChild(tableData28);

// tableData9.innerHTML = "3";
// tableData10.innerHTML = "Yousuf";
// tableData11.innerHTML = "10";
// tableData12.innerHTML = "Delete";
// tableData28.innerHTML = "Edit";

// tableData9.style.border = "1px solid black";
// tableData10.style.border = "1px solid black";
// tableData11.style.border = "1px solid black";
// tableData12.style.border = "1px solid black";
// tableData28.style.border = "1px solid black";
// tableData28.style.marginLeft = "20px";

// var tableRow5 = document.createElement("tr");
// table.appendChild(tableRow5);

// var tableData17 = document.createElement("td");
// var tableData18 = document.createElement("td");
// var tableData19 = document.createElement("td");
// var tableData20 = document.createElement("button");
// var tableData29 = document.createElement("button");

// var delTableData20 = document.createAttribute("onclick");
// delTableData20.value = "rem4()";
// tableData20.setAttributeNode(delTableData20);

// function rem4() {
//   document.getElementById("idTable");
//   console.log(table.childNodes[4]);
//   table.childNodes[4].innerHTML = "";
// }

// tableRow5.appendChild(tableData17);
// tableRow5.appendChild(tableData18);
// tableRow5.appendChild(tableData19);
// tableRow5.appendChild(tableData20);
// tableRow5.appendChild(tableData29);

// tableData17.innerHTML = "4";
// tableData18.innerHTML = "Navyaan";
// tableData19.innerHTML = "10";
// tableData20.innerHTML = "Delete";
// tableData29.innerHTML = "Edit";

// tableData17.style.border = "1px solid black";
// tableData18.style.border = "1px solid black";
// tableData19.style.border = "1px solid black";
// tableData20.style.border = "1px solid black";
// tableData29.style.border = "1px solid black";
// tableData29.style.marginLeft = "20px";

// var tableRow6 = document.createElement("tr");
// table.appendChild(tableRow6);

// var tableData21 = document.createElement("td");
// var tableData22 = document.createElement("td");
// var tableData23 = document.createElement("td");
// var tableData24 = document.createElement("button");
// var tableData30 = document.createElement("button");

// var delTableData24 = document.createAttribute("onclick");
// delTableData24.value = "rem5()";
// tableData24.setAttributeNode(delTableData24);

// function rem5() {
//   document.getElementById("idTable");
//   console.log(table.childNodes[5]);
//   table.childNodes[5].innerHTML = "";
// }

// tableRow6.appendChild(tableData21);
// tableRow6.appendChild(tableData22);
// tableRow6.appendChild(tableData23);
// tableRow6.appendChild(tableData24);
// tableRow6.appendChild(tableData30);

// tableData21.innerHTML = "4";
// tableData22.innerHTML = "Hamza";
// tableData23.innerHTML = "10";
// tableData24.innerHTML = "Delete";
// tableData30.innerHTML = "Edit";

// tableData21.style.border = "1px solid black";
// tableData22.style.border = "1px solid black";
// tableData23.style.border = "1px solid black";
// tableData24.style.border = "1px solid black";
// tableData30.style.border = "1px solid black";
// tableData30.style.marginLeft = "20px";

// document.body.appendChild(table);

// // console.log(table);
