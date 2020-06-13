// var num;
// num = +prompt("Please Enter a Number");
// console.log(num);
// document.write("The value of num is : " + num + "<br>");

// document.write("--------------------------------------------<br>");

// ++num;
// document.write("The value of ++num is : " + num + "<br>");

// num++;

// document.write("The value of num++ is : " + num + "<br>");
// --num;
// document.write("The value of --num is : " + num + "<br>");
// document.write("Now the value of num is : " + num + "<br>");
// num--;
// document.write("The value of num-- is : " + num + "<br>");

document.write("---------------------------------------------------------------------------------------");

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write(result + "<br>")
// document.write("<br>" + result + "<br>");
// document.write(--a - --b + "<br>");
// document.write(--a - --b + ++b + "<br>");
// document.write("<br>")
// document.write(--a - --b + ++b + b--);
// document.write("value of a is " + a + "<br>");
// document.write("value of b is " + b + "<br>");
// document.write("value of result is " + result);




document.write("---------------------------------------------------------------------------------------");


// var userName = prompt("Please Enter Your Name", " MUHAMMAD YAQOOB");
// alert("Hello !!! \n" + "And Welcome \n" + "Mr. " + userName);


// var num = +prompt("Please enter a Number", 5);

// for (let i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + "=" + num * i + "<br>");

// }



document.write("----------------------------------------------------------------------------" + "<br>");

var subNo1, subNo2, subNo3;
var marksSubNo1, marksSubNo2, MarksSubNo3;
var totalMarks = 100, grandTotal = 300;
var percSubNo1, percSubNo2, percSubNo3, grandPerc, totalMarksObtained;

subNo1 = prompt("Please Enter Subject No.1", "maths");
subNo2 = prompt("Please Enter Subject No.2", "English");
subNo3 = prompt("Please Enter Subject No.3", "urdu");

marksSubNo1 = +prompt("Marks Obtained in Subject No.1");
marksSubNo2 = +prompt("Marks Obtained in Subject No.2");
marksSubNo3 = +prompt("Marks Obtained in Subject No.3");

totalMarksObtained = marksSubNo1 + marksSubNo2 + marksSubNo3;

percSubNo1 = (marksSubNo1 / 100) * 100;
percSubNo2 = (marksSubNo2 / 100) * 100;
percSubNo3 = (marksSubNo3 / 100) * 100;


grandPerc = (percSubNo1 + percSubNo2 + percSubNo3) / 3;

document.write("<h3>" + " Subject  " + "\xa0\xa0\xa0" + "  Total Marks  " + "\xa0\xa0\xa0" + "  Obtained Marks  " + "\xa0\xa0\xa0" + "  Percentage  " + "<br>");
document.write("<h4>" + "  " + subNo1 + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + totalMarks + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 " + marksSubNo1 + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + percSubNo1 + " % " + " <br> ");
document.write("<h4>" + "  " + subNo2 + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 " + totalMarks + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + marksSubNo2 + "     \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0          " + percSubNo2 + " % " + "<br>");
document.write("<h4>" + "  " + subNo3 + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 " + totalMarks + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + marksSubNo3 + "     \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0   " + percSubNo3 + " % ");

document.write("<br>" + "--------------------------------------------------------------------------------------------" + "<br>");

document.write("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + grandTotal + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + totalMarksObtained + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + grandPerc + " % ");



