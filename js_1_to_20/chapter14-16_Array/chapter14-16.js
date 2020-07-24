// var studentsName = [];
// var studentsName = {};

// var studentsName = ["yaqoob","yousuf","khalid"];

// var studentsNumber = [1, 2, 3, 4, 5];

// booleanArray = [true, false];

// mixedArray = [123, 234, 345, "yaqoob", "yousuf", "khalid"];

// ===========================================================================

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "Ph.D."];
// var num=0;
// document.write("<h1>" + "Educational Qualifications In Pakistan." + "</h1> " );
// document.write(++num + "- " + qualifications[0] + "<br>");
// document.write(++num + "- " + qualifications[1] + "<br>");
// document.write(++num + "- " + qualifications[2] + "<br>");
// document.write(++num + "- " + qualifications[3] + "<br>");
// document.write(++num + "- " + qualifications[4] + "<br>");
// document.write(++num + "- " + qualifications[5] + "<br>");
// document.write(++num + "- " + qualifications[6] + "<br>");
// document.write(++num + "- " + qualifications[7] + "<br>");
// ===================================================================================


// var studentsName = ["yaqoob","khalid","yousuf"];
// var studentsNumber = [480, 320, 230];
// var totalNumbers = 500;
// var percentage1, percentage2, percentage3var;

// percentage1 = (studentsNumber[0] / totalNumbers) * 100;
// percentage2= (studentsNumber[1] / totalNumbers) * 100;
// percentage3 = (studentsNumber[2] / totalNumbers) * 100;

// document.write("Score of "+studentsName[0] + " is " +studentsNumber[0]+" and percentage is " + percentage1 + " % " + "<br>");
// document.write("Score of "+studentsName[1] + "  is " +studentsNumber[1]+" and percentage is " + percentage2 + " % " + "<br>");
// document.write("Score of "+studentsName[2] + "  is " +studentsNumber[2]+" and percentage is " + percentage3 + " % " + "<br>");

// ==========================================================================================



// var colors = ["pink", "Red" , "Green"];
// var newColor;
// newColor = prompt("Please Enter a Color of Your Choice to be Added");
// document.write(newColor + "<br>");
// document.write(colors + "<br>");
// console.log(newColor);
// colors.push(newColor);
// colors.push(newColor);
// colors.push(newColor);
// document.write(colors + "<br>");
// colors.pop();
// document.write(colors + "<br>");

// ==========================================================================
// var colors = ["pink", "Red" , "Green"];
// var newColor;
// newColor = prompt("Please Enter a Color of Your Choice to be Added");
// document.write(newColor + "<br>");
// document.write(colors + "<br>");
// console.log(newColor);
// colors.unshift(newColor);
// colors.unshift(newColor);
// colors.unshift(newColor);
// document.write(colors + "<br>");
// colors.shift();
// document.write(colors + "<br>");

// colors.push("black","brown");
// document.write(colors + "<br>");
// colors.pop();
// document.write(colors + "<br>");

// ==========================================================================



// var colorsArray = ["RED", "YELLOW", "GREEN", "BLACK"];

// var newColor;
// var num;
// var toUppcase;

// newColor = prompt("Please Enter a Color of Your Choice");
// num = +prompt("Please Enter Location no.");
// --num;
// toUppcase=newColor.toUpperCase(newColor);
// document.write(colorsArray+"<br>");
// colorsArray.splice(num, 0, toUppcase);
// document.write(colorsArray + "<br>");
// ===================================================================

// var colorsArray = ["RED", "YELLOW", "GREEN", "BLACK"];

// var newColor;
// var num ,num1, num2;
// var toUppcase;

// newColor = prompt("Please Enter a Color of Your Choice");
// num = +prompt("Please Enter Location no. Where You Want to Add");
// num1 = +prompt("Please Enter Location no. Where You Want to substract");
// num2 = +prompt("Please Enter How Many Location  You Want to Delete");
// --num;
// --num1;
// toUppcase=newColor.toUpperCase(newColor);
// document.write(colorsArray+"<br>");
// colorsArray.splice(num, 0, toUppcase);
// document.write(colorsArray + "<br>");
// colorsArray.splice(num1, num2);

// document.write(colorsArray + "<br>");

// ================================================================================

// var numbersArray = [180,320,230,480,199,100];
// document.write("<h1>" + "SORT" + "</h1>");
// document.write("<h1>" + "{" + numbersArray + " }" + "</h1>");
// numbersArray.sort().slice();
// document.write("<h1>" + "{" + numbersArray + " }" + "</h1>");

// ==========================================================================================

// var citiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Multan"];
// var selectedCities, newCityList, num;
// citiesList[0] = citiesList[0].toUpperCase();
// citiesList[1] = citiesList[1].toUpperCase();
// citiesList[2] = citiesList[2].toUpperCase();
// citiesList[3] = citiesList[3].toUpperCase();
// citiesList[4] = citiesList[4].toUpperCase();

// document.write(citiesList[0] + "<br>");
// document.write(" <h3> " + "CITY LIST " + "</h3>");

// document.write("<h3>" + "{" + citiesList + "}" + "</h3>")
// num = citiesList.length;

// newCityList = citiesList.slice(1, (num -2));

// document.write("<h3>" + "{" + newCityList + "}" + "</h3>")

// document.write(num);

// ===========================================================================================

// var simpleArray = ["This", "is", "My", "Cat"];
// var changeSimpleArray=[];
// changeSimpleArray =simpleArray.toLocaleString();
// document.write( simpleArray +"<br>");

// document.write(changeSimpleArray[0] + changeSimpleArray[1] + changeSimpleArray[2]+changeSimpleArray[3] );
// document.write(" ");
// document.write(changeSimpleArray[5] + changeSimpleArray[6] );
// document.write( " ");
// document.write(changeSimpleArray[8] + changeSimpleArray[9] );
// document.write(" ");
// document.write(changeSimpleArray[11] + changeSimpleArray[12] + changeSimpleArray[13] );



// =============================================================================

// var names = [];
// var num, num1 = 0, count;

// names[0] = prompt("Pleaae Enter First Name");
// names[1] = prompt("Pleaae Enter Last  Name");
// names[2] = prompt("Pleaae Enter First Name");
// names[3] = prompt("Pleaae Enter Last Name");
// names[4] = prompt("Pleaae Enter First Name");
// names[5] = prompt("Pleaae Enter Last Name");

// document.write(names + "<br>");
// num = names.length;
// console.log(num);



// num = num - (num - num1);

// console.log(num1);
// names[num] = names[num].toUpperCase();
// num++;

// names[num] = names[num].toUpperCase();
// console.log(num);

// ++num;
// names[num] = names[num].toUpperCase();
// console.log(num);

// ++num;
// names[num] = names[num].toUpperCase();
// console.log(num);
// ++num;
// names[num] = names[num].toUpperCase();
// console.log(num);
// num++;
// names[num] = names[num].toUpperCase();
// console.log(num);


// document.write("You Have Entered " + names[0] + " " + names[1] + "<br>");
// document.write("You Have Entered " + names[2] + " " + names[3] + "<br>");
// document.write("You Have Entered " + names[4] + " " + names[5] + "<br>");
// ============================================================================


var names = [];
var num1 = 0;


names[0] = prompt("Pleaae Enter First Name");
names[1] = prompt("Pleaae Enter Last  Name");
names[2] = prompt("Pleaae Enter First Name");
names[3] = prompt("Pleaae Enter Last Name");
names[4] = prompt("Pleaae Enter First Name");
names[5] = prompt("Pleaae Enter Last Name");

document.write(names + "<br>");
// num1 = names.length;
// console.log(num1);
// num1 = 0;

// num1++;
// console.log(num1);

names[num1] = names[num1].toUpperCase();
num1++;
names[num1] = names[num1].toUpperCase();
document.write("You Have Entered " + names[--num1] + " " + names[++num1] + "<br>");
++num1;

names[num1] = names[num1].toUpperCase();
num1++;
names[num1] = names[num1].toUpperCase();
document.write("You Have Entered " + names[--num1] + " " + names[++num1] + "<br>");
++num1;

names[num1] = names[num1].toUpperCase();
num1++;
names[num1] = names[num1].toUpperCase();
document.write("You Have Entered " + names[--num1] + " " + names[++num1] + "<br>");

// =========================================================================================

var phoneManufacturers = ["IPhone", "Samsung", "Motorola", "Q-Mobile", "Oppo", "Vivo"];
