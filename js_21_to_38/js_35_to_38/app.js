// Question No.1 ====================================================

// function newDate() {
//   var newDate = new Date();
//   document.write(newDate);
// }

// newDate();

// Question No.2 ====================================================

// function userData() {
//     var firstName = prompt("Please Enter Your First Name", "Muhammad");
//     var lastName = prompt("Please Enter Your Last Name", "Yaqoob");
//     alert(" Hello " + firstName + " " + lastName);
// }

// userData();

// Question No.3 ====================================================

// function numbyuser() {
//     var firstNum = +prompt("Please Enter First No.", 1234);
//     var secondNum = +prompt("Please Enter Second No", 4567);
//     alert("Addition = " + (firstNum + secondNum));
// }

// numbyuser();

// Question No.4 ====================================================

// function calculator() {
//     var firstNum = +prompt("Please Enter First No.", 1234);
//     var secondNum = +prompt("Please Enter Second No", 4567);
//     var sign = prompt("Please Enter operation Sign", "+  -  /  *");
//     console.log(sign);
//     var result = firstNum + sign + secondNum;
//     console.log(result);
//     document.write(
//         " Result of given Number is = " + "<b>" + eval(result) + "</b>"
//         );
//     }
//     calculator();

// Question No.5 ====================================================

// function square(a) {
//   var num = a * a;
//   return num;
// }

// var num = prompt("Please Enter a Number", 1234);
// var result = square(num);
// alert("square of given No. =" + result);

// Question No.6 ====================================================
// var main = document.createElement("h1");
// document.body.appendChild(main).innerHTML = "FACTORIAL";
// main.style.color = "red";
// main.style.textDecoration = "underline";
// main.style.background = "black";
// main.style.width = "20%";
// main.style.textAlign = "center";

// var heading = document.createElement("p");
// var para = document.getElementsByTagName("p");
// var att = document.createAttribute("id");
// att.value = "para";
// heading.setAttributeNode(att);
// // console.log(heading);
// document.body.appendChild(heading);

// // heading.innerText = "FACTORIAL OF A NUMBER";

// // document.createAttribute("id", "para");
// // console.log(heading);
// // console.log(text);

// var num = +prompt("Please Enter Any Number", 123);

// function factorial(a) {
//   if (a === 0) {
//     return 1;
//   } else {
//     return a * factorial(a - 1);
//   }
// }
// var result = factorial(num);
// console.log(result);

// document.getElementById("para").innerHTML =
//   "FACTORIAL OF A NUMBER = " + "<b>" + result + "</b>";

// Question No.7 ====================================================

// var startNum = +prompt("Please Enter a Number to start counting from", 12);
// var endNum = +prompt("Please Enter a Number to end counting ", 24);
// function counting(a, b) {
//   if (a < b) {
//     for (var i = a; i <= b; i++) {
//       console.log(i);
//       var p = document.createElement("p");
//       var att = document.createAttribute("id");
//       att.value = "count";
//       p.setAttributeNode(att);
//       document.body.appendChild(p);
//       p.innerHTML = " <b>" + i + "</b>";
//       console.log(p);
//     }
//   } else {
//     alert("Please enter correct numbers. \n Thanks");
//   }
// }

// counting(startNum, endNum);

// Question No.8 ====================================================

// var heading = document.createElement("p");
// document.body.appendChild(heading).innerHTML =
//   "HYPOTENUSE OF A RIGHT ANGLE TRIANGLE ";
// heading.style.fontSize = "4rem";
// heading.style.color = "green";
// heading.style.textDecoration = "underline";

// var base = +prompt("Please Enter 'Base' Of A Right Angle Triangle ");
// var perp = +prompt("Please Enter 'Perpendicular' Of A Right Angle Triangle ");

// function hypotenuse(b, h) {
//   console.log(b);
//   console.log(h);
//   var ba = bas(b);
//   console.log(ba);
//   var per = perpend(h);
//   console.log(per);
//   var hyp = Math.sqrt(ba * per);
//   return hyp;
// }

// function bas(x) {
//   var ba = x * x;
//   console.log(ba);
//   return ba;
// }

// function perpend(y) {
//   var perp = y * y;
//   console.log(perp);
//   return perp;
// }

// var hyp = hypotenuse(base, perp);
// alert("Base : " + base + " And " + " Perpendicular : " + perp + " is = " + hyp);

// var cal = document.createElement("p");
// var att = document.createAttribute("id", "para");
// att.value = "para";
// cal.setAttributeNode(att);
// document.body.appendChild(cal);
// cal.innerHTML =
//   "<h3> Base : " +
//   base +
//   " And " +
//   " Perpendicular : " +
//   perp +
//   " is = " +
//   hyp +
//   " HYPOTENUSE";
// ("</h3>");

// Question No.9 ====================================================
// var rec = document.createElement("p");
// document.body.appendChild(rec);
// rec.innerHTML = "<h1>Area of a RECTANGLE</h1>";
// rec.style.textAlign = "center";
// rec.style.fontSize = "3rem";
// rec.style.fontStyle = "italic";
// rec.style.textDecoration = "underline";

// var width = +prompt("Please Enter Width");
// var height = +prompt("Please Enter Height");

// function area(a = 6, b = 6) {
//   var A = a * b;
//   console.log(A);
//   alert("Area Of A Rectangle = " + A);
//   return A;
// }

// var res = area(width, height);

// var result = document.createElement("p");
// document.body.appendChild(result);
// result.style.border = "2px solid black";
// result.style.backgroundColor = "green";
// result.style.color = "white";
// result.style.width = "30%";
// result.style.textAlign = "center";
// result.style.marginLeft = "33%";

// result.innerHTML = "<h1><b> Area Of A Rectangle = " + res + "<b></h1>";

// Question No.10 ====================================================

// var str = prompt("Please Enter a Palindromic Word", "madam");

// var arr = /[^A-Za-z0-9]/g;
// str = str.replace(arr, " ");
// str = str.toLowerCase();
// console.log(str);
// function palindromic(w) {
//   console.log(w);
//   var strLength = w.length;
//   for (var i = 0; i <= Math.floor(w.length / 2); i++) {
//     if (w[i] !== w[w.length - 1 - i]) {
//       console.log(w[i]);
//       console.log(w[strLength - 1 - i]);

//       console.log("not palindromic ");
//     } else {
//       console.log("its a palindromic");
//     }
//   }
// }

// palindromic(str);

// Question No.11 ====================================================

// var str = prompt("please Enter a Phrase", "hello! how are you dear");
// var strArr = str.split(" ");
// console.log(strArr);
// console.log(strArr.length);
// for (var i = 0; i <= strArr.length - 1; i++) {
//   var word = strArr[i].slice(0, 1);
//   word = word.toUpperCase();
//   var wordRemain = strArr[i].slice(1);
//   var newWord = word + wordRemain + " ";
//   document.write(newWord);
//   console.log(word);
//   console.log(word + wordRemain);
// }
// Question No.12 ====================================================

// var result;
// var str = prompt("Please Enter String", "my name is Muhammad yaqoob");
// var strToLower = str.toLowerCase();
// var strToLower = strToLower.split(" ");

// strToLower.push(" ");
// // console.log(str.length);
// // console.log(strToLower);
// var maxLengthWord = wordlength(strToLower, strToLower.length);
// // console.log(maxLengthWord, str.length);

// var back = backToOriginal(maxLengthWord);
// // console.log(back);
// var heading = document.createElement("p");
// var para = document.createAttribute("id", "para");
// para.value = "para";
// heading.setAttributeNode(para);
// document.body.appendChild(heading);
// console.log(heading);
// document.getElementById("para").innerHTML = "BIGGEST WORD IN GIVEN STRING";
// heading.style.fontSize = "3rem";
// heading.style.textDecoration = "underline";
// heading.style.color = "red";
// heading.style.textShadow = "2px 2px 4px #000000";

// var subHeading = document.createElement("p");
// var att = document.createAttribute("id", "subhead");
// att.value = "subhead";
// subHeading.setAttributeNode(att);
// console.log(subHeading);
// document.body.appendChild(subHeading).innerHTML =
//   "Biggest word in given string is " + "<b> " + back + "</b>";
// subHeading.style.fontSize = "1.5rem";
// // var newArr;
// function wordlength(str, num) {
//   // console.log(num);
//   var newArr = str;

//   // console.log(str);
//   // console.log(newArr);
//   result = newArr[0];
//   // console.log(result);
//   for (var i = 1; i < num; i++) {
//     console.log(i);
//     if (result.length < newArr[i].length) {
//       // console.log(newArr[i]);
//       var result = newArr[i];
//       // result1 = newArr[i];
//       // console.log(i);
//     }
//     //  else {
//     //   result = newArr[i].length;
//     //   console.log(i);
//     // }
//   }
//   return result;
// }

// function backToOriginal(name) {
//   var name1 = name.toUpperCase();
//   // console.log(name1);
//   var firstLatter = name1.slice(0, 1);
//   var first = firstLatter.toUpperCase();
//   console.log(first);
//   var allLatters = name1.slice(1);
//   var all = allLatters.toLowerCase();
//   console.log(all);
//   var CompleteWord = first + all;

//   console.log(CompleteWord);

//   return CompleteWord;
// }

// Question No.13 ====================================================

// var para = document.createElement("p");
// var id = document.createAttribute("id", "result");
// id.value = "result";
// para.setAttributeNode(id);
// document.body.appendChild(para);
// console.log(para);
// para.innerHTML = "Repeted Letters";
// para.style.fontSize = "3rem";
// para.style.textDecoration = "underline";
// para.style.textShadow = "2px 2px 4px green";

// var str = "AAAAAAAAAA AAAAAAA '''''' AAAAA";
// var letter = "A";
// var newArr = [];
// var count = 0;
// var newArr = word_checker(str, letter);
// document.write(
//   "Your Required Result is :  " +
//     "<b> " +
//     "&nbsp" +
//     newArr +
//     "</b>" +
//     " Times appeared in Given String."
// );

// //console.log(letter1);
// function word_checker(str1, letter1) {
//   // console.log(str1);
//   // console.log(letter1);
//   for (var i = 0; i <= str1.length - 1; i++) {
//     if (str1[i].match(letter1)) {
//       // console.log(str1[i]);

//       newArr.push(str[i]);
//       count++;
//     }
//     // count++;

//     // console.log(i);
//     // var word = str[i].match(/o/g);
//     // console.log(word);
//   }
//   // newArr.unshift(" ");
//   newArr.push(count);
//   // console.log(newArr);
//   // console.log(count);
//   return newArr;
// }

// Question No.14 ====================================================
// var heading = document.createElement("p");
// var att = document.createAttribute("id");
// att.value = "para";
// heading.setAttributeNode(att);
// document.body.appendChild(heading);
// console.log(heading);
// heading.innerHTML = "Area And Cicumfrence Of A circle";
// heading.style.fontSize = "3rem";
// heading.style.textDecoration = "underline";
// heading.style.textShadow = "2px 4px 8px blue";
// heading.style.background = "yellow";
// heading.style.width = "50%";
// document.body.style.textAlign = "center";
// heading.style.marginLeft = "25%";

// var radius = +prompt("Please Enter Radius Of A Circle", 123);
// var result = calCercumference(radius);
// var result1 = calArea(radius);

// var subhead = document.createElement("p");
// var para = document.createAttribute("id");
// para.value = "sub";
// subhead.setAttributeNode(para);
// document.body.appendChild(subhead);
// subhead.innerHTML = "Radius Of A Circle is : " + "<b>" + result + "</b>";
// subhead.style.color = "white";
// subhead.style.background = "black";
// subhead.style.width = "25%";
// subhead.style.height = "30px";
// subhead.style.paddingTop = "10px";
// subhead.style.marginLeft = "37.5%";
// // console.log(result);

// var subhead1 = document.createElement("p");
// var para = document.createAttribute("id");
// para.value = "sub1";
// subhead1.setAttributeNode(para);
// document.body.appendChild(subhead1);
// subhead1.innerHTML = "Area Of A Circle is : " + "<b>" + result1 + "</b>";
// subhead1.style.color = "white";
// subhead1.style.background = "black";
// subhead1.style.width = "25%";
// subhead1.style.height = "30px";
// subhead1.style.paddingTop = "10px";
// subhead1.style.marginLeft = "37.5%";

// function calCercumference(num) {
//   var circumfrence = 2 * Math.PI * num;
//   console.log(num);
//   // console.log(Math.PI);
//   return circumfrence;
// }

// function calArea(rad) {
//   var area = Math.PI * Math.pow(rad, 2);
//   // console.log(Math.pow(radius, 2));
//   console.log(area);
//   return area;
// }

// Question No.15 ====================================================
