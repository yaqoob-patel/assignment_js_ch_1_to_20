// Quetion NO. 1===============================================================
// var num = +prompt("please Enter Number", 3);
// var pow = +prompt("please Enter Power of Number", 2);

// result = calPower(num, pow);

// var heading = document.createElement("p");
// var att = document.createAttribute("id");
// var cla = document.createAttribute("class");
// att.value = "para";
// cla.value = "head";

// heading.setAttributeNode(cla);

// heading.setAttributeNode(att);
// document.body.appendChild(heading);

// document.getElementById("para").innerHTML = " Power of a Number <br>";
// var textAdded = document.createTextNode("Answer is = " + result);
// heading.appendChild(textAdded);

// heading.style.fontSize = "2rem";

// heading.style.textAlign = "center";
// heading.style.textShadow = "2px 4px 6px blue";
// heading.style.background = "lightblue";
// heading.style.width = "33%";
// heading.style.marginLeft = "33%";
// console.log(heading);
// function calPower(num1, pow1) {
//     var result = Math.pow(num1, pow1);
//     return result;
// }

// Quetion NO. 2===============================================================

// var year = +prompt("Please Enter Year", 2020);

// var result = leapYear(year);
// console.log(result);
// document.write("<b>" + result + "</b>");

// function leapYear(year) {
//   var result = year % 4;
//   if (result === 0) {
//     var leapYear = year + " is a Leap Year";
//   } else {
//     leapYear = year + " is not a Leap Year";
//   }
//   return leapYear;
// }

// Quetion NO. 3===============================================================

// var a = +prompt("Please Enter First side of a Triangle", 123);
// var b = +prompt("Please Enter Second side of a Triangle", 456);
// var c = +prompt("Please Enter Third side of a Triangle", 789);

// var result = calcS(a, b, c);

// var result1 = calcArea(a, b, c, result);
// console.log(result1);
// var heading = document.createElement("P");
// document.body.appendChild(heading);
// heading.style.fontSize = "3rem";
// heading.style.textDecoration = "underline";
// heading.style.textShadow = "2px 2px 6px pink";
// var resultText = document.createTextNode("Area = " + result1);
// heading.innerHTML = "Area Of A Triangle <br>";
// heading.appendChild(resultText);

// function calcS(a, b, c) {
//   var s = (a + b + c) / 2;
//   return s;
// }
// function calcArea(a, b, c, s) {

//   var area = s * ((s - a) * (s - b) * (s - c));

//   if (area < 0) {
//     area = area * -1;
//   } else {
//     area = area;
//   }
//   console.log(area);
//   return area;
// }

// Quetion NO. 4 ===============================================================
// var maths = +prompt("Please Enter No. Obtained in Maths", 99);
// var physics = +prompt("Please Enter No. Obtained in Physics", 99);
// var chemistry = +prompt("Please Enter No. Obtained in Chemistry", 99);
// var eachSubMarks = 100;
// var noOfSub = 3;
// mainFunc(maths, physics, chemistry);
// function mainFunc(m, p, c) {
//   var aver = average(m, p, c);
//   var percen = percentage(m, p, c);
//   var heading = document.createElement("p");
//   document.body.appendChild(heading);
//   heading.innerHTML = "Average And Percentage";
//   heading.style.fontSize = "3rem";
//   heading.style.fontStyle = "italic";
//   heading.style.textDecoration = "underline";
//   heading.style.textShadow = "2px 4px 8px black";
//   heading.style.color = "lightblue";
//   //   heading.style.color = "blue";

//   var subHeading = document.createElement("p");
//   document.body.appendChild(subHeading);
//   subHeading.style.fontWeight = "bold";
//   subHeading.style.backgroundColor = "lightblue";
//   subHeading.style.width = "25%";
//   subHeading.style.textAlign = "center";
//   subHeading.style.fontSize = "2rem";
//   subHeading.style.border = "2px solid black";
//   subHeading.style.borderRadius = "10px ";

//   subHeading.innerHTML =
//     "Average is = " +
//     aver +
//     "<br>" +
//     "and" +
//     "<br>" +
//     "Percentage is = " +
//     percen;
// }

// function average(m, p, c) {
//   var result = (m + p + c) / noOfSub;
//   return result;
// }

// function percentage(m, p, c) {
//   result = ((m + p + c) / (eachSubMarks * noOfSub)) * 100;
//   console.log(result);
//   return result;
// }

// Quetion NO. 5 ===============================================================

// var str = "Hello Sir, welcome to the PatelSoft.";
// function myFunction(str) {
//     var n = str.indexOf("S", 7);
//     return n;
// }
// var indexNoIs = myFunction(str);
// document.write("Index No.Is : " + indexNoIs);

// Quetion NO. 6 ===============================================================

// var str = prompt(
//   "Please Enter String Or Word",
//   "Hello Sir, welcome to the PatelSoft."
// );
// var arrOfOthers = [];
// var arrOfVowels = [];

// vowelSeprator(str);
// function vowelSeprator(str) {
//   for (var i = 0; i < str.length; i++) {
//     var newArr = str.split("");
//     // console.log(newArr);
//     if (
//       newArr[i].includes("a") ||
//       newArr[i].includes("e") ||
//       newArr[i].includes("i") ||
//       newArr[i].includes("o") ||
//       newArr[i].includes("u")
//     ) {
//       // console.log(newArr[i]);
//       arrOfVowels.push(newArr[i]);
//       // newArr.push(newArr[i]) = "";
//       // console.log(arrOfVowels);
//     } else {
//       // console.log(newArr[i]);

//       arrOfOthers.push(newArr[i]);
//       var arrJoined = arrOfOthers.join("");
//       //   console.log(arrJoined);
//     }
//   }
//   var heading = document.createElement("p");
//   document.body.appendChild(heading);
//   heading.innerHTML = "Seprating Vowels : ";
//   heading.style.fontSize = "3rem";
//   heading.style.color = "white";
//   heading.style.textShadow = "2px 2px 8px black";
//   heading.style.textDecoration = "underline";
//   heading.style.textDecorationColor = "grey";

//   var subheading = document.createElement("p");
//   document.body.appendChild(subheading);
//   subheading.style.fontSize = "1.5rem";
//   subheading.innerHTML =
//     " given String = " +
//     str +
//     "<br>" +
//     " Vowels in The Given String : " +
//     arrOfVowels +
//     "<br>" +
//     " String without Vowels : " +
//     arrJoined;
// }
// Quetion NO. 7 ===============================================================

// var arrOfVowels = "aeiou";
// var arrVowelSplit = arrOfVowels.split("");
// var found;
// var text;
// // console.log(arrVowelSplit);
// var resultArr = [];
// var count = 0;
// var str = prompt(
//   "Please Enter String.",
//   "Pleases read this application and give me gratuity. "
// );
// for (var i = 0; i < str.length; i++) {
//   if (arrVowelSplit.includes(str[i]) && arrVowelSplit.includes(str[i + 1])) {
//     count++;
//     console.log(i);
//     console.log(i + 1);
//     console.log(str[i]);
//     console.log(str[i + 1]);
//     found = str[i] + str[i + 1];
//     // console.log(found);
//     var result = switchMode(found);
//     resultArr.push(result);
//     // console.log(resultArr);
//   }
// }
// document.write("Such Occurences are : " + count + " - " + resultArr + "<br>");
// function switchMode(vwfound) {
//   //   console.log(vwfound + " " + ++count);
//   switch (vwfound) {
//     case "ae":
//       text = "ae ";
//       break;
//     case "ai":
//       text = "ai ";
//       break;
//     case "ao":
//       text = "ao ";
//       break;
//     case "au":
//       text = "au";
//       break;
//     case "aa":
//       text = "aa";
//       break;
//     //==========================================
//     case "ea":
//       text = "ea";
//       break;
//     case "ei":
//       text = "ei";
//       break;
//     case "eo":
//       text = "eo";
//       break;
//     case "eu":
//       text = "eu";
//       break;
//     case "ee":
//       text = "ee";
//       break;
//     //===============aeiou=============================
//     case "ia":
//       text = "ia";
//       break;
//     case "ie":
//       text = "ie";
//       break;
//     case "io":
//       text = "io";
//       break;
//     case "iu":
//       text = "iu";
//       break;
//     case "ii":
//       text = "ii";
//       break;
//     //========================================================

//     case "oa":
//       text = "oa";
//       break;
//     case "oe":
//       text = "oe";
//       break;
//     case "oi":
//       text = "oi";
//       break;
//     case "ou":
//       text = "ou";
//     case "oo":
//       text = "oo";
//       break;

//     //=======================================================================
//     case "ua":
//       text = "ua";
//       break;
//     case "ue":
//       text = "ue";
//       break;
//     case "ui":
//       text = "ui";
//       break;
//     case "uo":
//       text = "uo";
//       break;
//     case "uu":
//       text = "uu";
//       break;
//     default:
//       text = " nothing found  ";
//   }
//   return text;
// }

// Quetion NO. 8 ===============================================================

// var heading = document.createElement("P");
// document.body.appendChild(heading);
// heading.innerHTML = "C O N V E R S I O N S";
// heading.style.fontSize = "3rem";
// heading.style.textAlign = "center";
// heading.style.textDecoration = "Underline";
// heading.style.width = "35%";
// heading.style.color = "lightblue";
// heading.style.background = "black";
// heading.style.textShadow = "-4px -4px 4px white";
// heading.style.border = "2px solid lightblue";
// heading.style.borderRadius = "5px";

// var distance = +prompt("Please Enter Distance In Kilo-Meters", 200);
// document.write("Given Kilometer is = " + distance + " Kilo-Meters. <br>");

// var resultMeter = meters(distance);
// document.write("Given Kilometer is = " + resultMeter + " Meters. <br>");
// var resultFeet = feet(resultMeter);
// document.write("Given Kilometer is = " + resultFeet + " Feet.<br>");
// var resultInc = inches(resultFeet);
// document.write("Given Kilometer is = " + resultInc + " Inch.<br>");
// var resultCent = centimeter(resultInc);
// document.write("Given Kilometer is = " + resultCent + " Centimeter.<br>");

// //========================================================================
// function meters(m) {
//   var met = m * 1000;
//   return met;
// }
// function feet(f) {
//   var feet = (f * 39.2809) / 12;
//   return feet;
// }
// function inches(i) {
//   var inc = i * 39.2809;
//   return inc;
// }
// function centimeter(c) {
//   var cen = c * 2.54;
//   return cen;
// }

// Quetion NO. 9 ===============================================================
// var heading = document.createElement("div");
// var creatParag = document.createElement("P");

// var att = document.createAttribute("id");
// att.value = "para";
// creatParag.setAttributeNode(att);
// heading.appendChild(creatParag);
// document.body.appendChild(heading);
// console.log(heading);
// heading.innerHTML = "Over Time Calculations";
// heading.style.fontSize = "3rem";
// heading.style.textDecoration = "underline";
// heading.style.width = "40%";
// heading.style.backgroundColor = "black";
// heading.style.color = "white";
// heading.style.textAlign = "center";
// heading.style.paddingBottom = "5px";
// heading.style.textShadow = "-5px -5px 4px lightblue";
// heading.style.marginBottom = "25px";

// var workHours = +prompt("Please enter Working Hours of Employee", 40);
// if (workHours > 40) {
//   var amount = (workHours - 40) * 12;
//   document.write("<b>Your Over Time Amount is Rs. " + amount + "</b>");
// } else {
//   document.write("<b>You Dont have Over Time</b>");
// }

// Quetion NO. 10 ===============================================================

// var amount = prompt("Please Enter Amount", 470);
// var stringAmount = parseInt(amount);

// var hundredNotes = Math.floor(stringAmount / 100);
// stringAmount = stringAmount - hundredNotes * 100;
// console.log(stringAmount);
// var fiftyNotes = Math.floor(stringAmount / 50);
// stringAmount = stringAmount - fiftyNotes * 50;
// console.log(stringAmount);

// var tenNotes = Math.floor(stringAmount / 10);
// console.log(stringAmount);

// alert(
//   " you will have " +
//     hundredNotes +
//     " hundered notes" +
//     "\n" +
//     " you will have " +
//     fiftyNotes +
//     " fifty notes " +
//     "\n" +
//     " you will have " +
//     tenNotes +
//     " ten notes "
// );

// var heading = document.createElement("div");
// var para = document.createElement("p");
// heading.appendChild(para);
// document.body.appendChild(heading);
// heading.style.fontSize = "2rem";
// heading.style.backgroundColor = "lightgrey";
// heading.style.color = "white";
// heading.style.textShadow = "3px 3px 7px black";
// heading.style.textAlign = "center";
// heading.style.paddingBottom = "5px";

// heading.innerHTML =
//   "<b> you will have " +
//   hundredNotes +
//   " hundered notes" +
//   "<br>" +
//   " you will have " +
//   fiftyNotes +
//   " fifty notes " +
//   "<br>" +
//   " you will have " +
//   tenNotes +
//   " ten notes </b>";

// END OF EXERCISE ============================THANKS===================================
