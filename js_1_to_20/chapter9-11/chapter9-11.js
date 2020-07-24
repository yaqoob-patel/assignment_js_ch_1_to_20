
// ================================================================================================================

var city;

city = prompt("Please Entr your City Name");

if (city === "Karachi") {
    alert("Welcome To City Of Lights")
    document.write("Welcome To City Of Lights" + "<br>" + "<b>" + "            " + "KARACHI" + "</b>")
}
else {
    alert("INCORRECT CITY NAME")
}

// ===================================================================================================================


// var gender;

// gender = prompt("Please Enter your Gender.\n" + ' "Male" ' + "or" + ' "Female" ');


// if (gender === "Male" || gender === "male") {
//     alert("Good Morning Sir");
//     document.write("Good Morning Sir");

// }
// else if (gender === "Female" || gender === "female") {
//     alert("Good Morning Madam");
//     document.write("Good Morning Madam");

// }

// else {
//     alert(" Please Spell Correctly ");
// }


// =====================================================================================================================================


// var color;

// color = prompt("Please Enter Signal color\n" + "RED, GREEN or YELLOW");


// if ((color === "Red")    || (color === "red") || (color === "RED"))
// {

//     alert("STOP");
//     document.write(" <h1> " + "STOP" + "</h1>");
// }


//  if ((color === "YELLOW") || (color === "yellow") || (color === "Yellow"))
// {

//     alert("READY TO MOVE");
//     document.write(" <h1> " + "READY TO MOVE" + "</h1>");
// }


// else if ((color === "GREEN") || (color === "green") || (color === "Green"))
// {

//     alert("READY TO MOVE");
//     document.write(" <h1> " + "MOVE NOW" + "</h1>");
// }

// else
// {
//     alert("Please Enter Correct Color");
//      document.write("<h1>" +"Please Enter Correct Color"+ "</hi>");
// }



// ==============================================================================================================================





// var feulPosition;

// feulPosition = prompt("Please enter your fuel gauge reading in liters ");


// if (feulPosition<=0.25)
// {
//     alert("Please refill The fuel in Your Car.\n THANKS");
//     document.write("Please refill The fuel in Your Car."+ "<br>" + "THANKS");
// }

// else {
//     alert("GO GO AND GO>>>>>>>>>>>>>>>>>>> ");
//     document.write("GO GO AND GO>>>>>>>>>>>>>>>>>>> ");
// }

// ==========================================================================================================

// var a = 4;
// if (++a === 5)
// {
//     alert("given condition for variable a is true");
// }

// no alert
// ===========================================================================================================





// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// noalert

// ============================================================================================


// var c = 12;
// // c++;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// 2nd and 4th Working

// =======================================================================================


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// console.log(totalCost);
// console.log(materialCost);
// console.log(laborCost);
// if (totalCost === materialCost + laborCost)
// {
//     alert("The cost equals");
// }

// ============================================================================================


// if (true)
// {
//     alert("True");
// } if (NaN)
// {
//     alert("False");
// }
// ============================================================================================

// if ( "car" < "cat" )
// {
//     alert("car is smaller than cat");
// }
// workig================================================================================================



// var subjectNo1, subjectNo2, subjectNo3, grade;
// var totalMarks, totalMarksObtained, percTotal, marksObtainedinSubjectNo1,
//     marksObtainedinSubjectNo2, marksObtainedinSubjectNo3, percSub1, percSub2,
//     percSub3, sub1Totalmarks, sub2Totalmarks, sub3Totalmarks;

// document.write("<h1>" + " MARKS SHEET " + "</h1>");


// subjectNo1 = prompt("Please Enter First Subject Name");
// marksObtainedinSubjectNo1 = +prompt("Please Enter Marks Obtained In " + subjectNo1);
// sub1Totalmarks = +prompt("Please Enter total Marks of " + subjectNo1);
// percSub1 = (marksObtainedinSubjectNo1 / sub1Totalmarks) * 100;


// subjectNo2 = prompt("Please Enter Second Subject Name");
// marksObtainedinSubjectNo2 = +prompt("Please Enter Marks Obtained In " + subjectNo2);
// sub2Totalmarks = +prompt("Please Enter total Marks of " + subjectNo2);
// percSub2 = (marksObtainedinSubjectNo2 / sub2Totalmarks) * 100;




// subjectNo3 = prompt("Please Enter Third Subject Name");
// marksObtainedinSubjectNo3 = +prompt("Please Enter Marks Obtained In " + subjectNo3);
// sub3Totalmarks = +prompt("Please Enter total Marks of " + subjectNo3);
// percSub3 = (marksObtainedinSubjectNo3 / sub3Totalmarks) * 100;




// totalMarks = sub1Totalmarks + sub2Totalmarks + sub3Totalmarks;
// totalMarksObtained = marksObtainedinSubjectNo1 + marksObtainedinSubjectNo2 + marksObtainedinSubjectNo3;
// percTotal = (totalMarksObtained / totalMarks) * 100;




// document.write("<b>" + subjectNo1 + "</b>" + ":" + "<br>" + " Marks Obtained are:  " + marksObtainedinSubjectNo1 + "   Total Marks are : " + sub1Totalmarks + ": " + subjectNo1 + " Percntage is : " + percSub1 + "%" + "<br>");
// document.write("<b>" + subjectNo2 + "</b>" + ":" + "<br>" + " Marks Obtained are:  " + marksObtainedinSubjectNo2 + "   Total Marks are : " + sub2Totalmarks + ": " + subjectNo2 + " Percntage is : " + percSub2 + "%" + "<br>");
// document.write("<b>" + subjectNo3 + "</b>" + ":" + "<br>" + " Marks Obtained are:  " + marksObtainedinSubjectNo3 + "   Total Marks are : " + sub3Totalmarks + ": " + subjectNo3 + " Percntage is : " + percSub3 + "%" + "<br>");
// document.write("<b>" + "<u>" + "TOTAL PERCENTAGE :" + "</u>" + "</b>" + "<br>");
// document.write(" Percentage in All Subjects: " + percTotal + "%" + "<br>");


// if (percTotal < 33) {
//     document.write("<b>" + "Grade 'F'" + "</b>" + "<br>");
//     document.write("Please Try Again. You Need To Improve." + "<br>" + "<b>" + "SORRY" + "</b>" + "<br>" + " 'You Are Fail' ");
// }
// else if (percTotal >= 33 && percTotal <= 40) {
//     document.write("<b>" + "Grade 'E'" + "</b>" + "<br>");
//     document.write("Please Try Your Best in Future" + "<br>" + "<b>" + "FAIR" + "</b>" + "<br>" + " 'You Are PASS' ");
// }

// else if (percTotal > 40 && percTotal < 50) {
//     document.write("<b>" + "Grade 'D'" + "</b>" + "<br>");
//     document.write("Please Try Your Best in Future" + "<br>" + "<b>" + "BETTER" + "</b>" + "<br>" + " 'You Are PASS' ");
// }

// else if (percTotal >= 50 && percTotal < 60) {
//     document.write("<b>" + "Grade 'C'" + "</b>" + "<br>");
//     document.write("Please Try Your Best in Future" + "<br>" + "<b>" + "GOOD" + "</b>" + "<br>" + " 'You Are PASS' ");
// }
// else if (percTotal >= 60 && percTotal < 70) {
//     document.write("<b>" + "Grade 'B'" + "</b>" + "<br>");
//     document.write("Please Try Your Best in Future" + "<br>" + "<b>" + "GOOD" + "</b>" + "<br>" + " 'You Are PASS' ");
// }
// else if (percTotal >= 70 && percTotal < 80) {
//     document.write("<b>" + "Grade 'A'" + "</b>" + "<br>");
//     document.write("Please Try Your Best in Future" + "<br>" + "<b>" + "BEST" + "</b>" + "<br>" + " 'You Are PASS' ");
// }
// else if (percTotal >= 80 && percTotal <= 100) {
//     document.write("<b>" + "Grade 'A+'" + "</b>" + "<br>");
//     document.write("Please Try Your Best in Future" + "<br>" + "<b>" + "MARVOLUS" + "</b>" + "<br>" + " 'You Are PASS' ");
// }
// else {
//     alert("PLEASE ENTER CORRECT INFORMATIONS")
// }

// ================================================================================================================================


// var numGuessed , number = 9;

// numGuessed = +prompt(" Guess The Number ");

// if (numGuessed === number) {
//     document.write("Bingoo............CORRECT ANSWER")
//     alert("Bingoo............ CORRECT ANSWER");
// }

// else if (numGuessed === 10 || numGuessed === 8) {  
//     document.write("Close Enough To The Correct Answer");
//     alert("Close Enough To The Correct Answer");
// }

// =============================================================================================================================


// var num1=3, number, answer ;

// number = +prompt("Enter Any Number");

// answer = number % num1;

// console.log(answer);

// if(answer===0)
// {
//     alert("Your Given Number Is Divisable by 3")

//     document.write("Your Given Number Is Divisable by 3")
// }
// else {
//     alert("Your Given Number Is Not Divisable by 3")
//     document.write("Your Given Number Is Not Divisable by 3")
// }

// ==================================================================================================================


// var num = 2, givenNumber, answer;

// givenNumber = +prompt("Enter Any Number To Be Checked \n EVEN OR ODD");

// answer = givenNumber % num;

// if (answer===0) {
//     alert("Entered NUMBER is " + givenNumber + " and it is \n  EVEN NUMBER");
//     document.write(" Entered NUMBER is " + givenNumber  + " and it is \n  EVEN NUMBER ")
// }

// else {
//     alert("Entered NUMBER is " + givenNumber + " and it is \n  ODD NUMBER");
//     document.write(" Entered NUMBER is " + givenNumber + " and it is \n  ODD NUMBER ")
// }


// ==============================================================================================


// var temp;

// temp = +prompt("Enter Today's Temperature");

// if (temp >= 0 && temp <= 10)
// {
//     alert("“OMG! Today’s weather is so Cool.”")
//     document.write("“OMG! Today’s weather is so Cool.”")
// }

// else if (temp > 10 && temp <= 20) {
//     alert("“OMG! Today’s weather is  Cool.”")
//     document.write("“OMG! Today’s weather is  Cool.”")
// }
// else if (temp > 30 && temp <= 40) {
//     alert("“OMG! Today’s weather is  NORMAL.”")
//     document.write("“OMG! Today’s weather is  Normal.”")
// }
// else if ( temp>40) {
//     alert("“OMG! Today’s weather is  HOT.”")
//     document.write("“OMG! Today’s weather is  Hot.”")
//     }
// else {
//     alert("Please Check and Try Again.......")
//     document.write("Please Check and Try Again.......")
// }
// ===============================================================================================================


// var firstNum, secondNum, operator, answer;

// firstNum = +prompt("Please Enter First Number");
// operator =  prompt("Please Enter Operation");
// secondNum = +prompt("Please Enter Second Number");
// console.log(operator);

// if ((operator==="+") || (operator==="-") || (operator ==="*") || (operator ==="/") || (operator==="%"))
// {

//     if (operator === "*") {
//         answer = firstNum * secondNum

//         document.write(firstNum + " x " + secondNum + " = " + answer)
//     }
//     else if (operator === "/") {

//         // answer = firstNum / secondNum
//         answer = firstNum / secondNum

//         document.write(firstNum + " / " + secondNum + " = " + answer)
//     }
//     else if (operator === "+") {
//         // answer = firstNum + secondNum
//         answer = firstNum + secondNum

//         document.write(firstNum + " + " + secondNum + " = " + answer)
//     }
//     else if (operator === "-") {
//         // answer = firstNum - secondNum
//         answer = firstNum - secondNum

//         document.write(firstNum + " - " + secondNum + " = " + answer)
//     }
//     else if (operator === "%") {
//         answer = firstNum % secondNum
//         // answer = firstNum - secondNum

//         document.write(firstNum + " % " + secondNum + " = " + answer)
//     }
// }
// else
// {
//     document.write("SORRY.......................\nYou Have Entered Wrong Operator")
//     alert("SORRY.......................\nYou Have Entered Wrong Operator")
// }

// =============================================================================================================
