var multiDimentionalarray = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

var num, count;
for (num = 0; num <= 3; num++) {
    for (count = 0; count <= 3; count++) {

        document.write(multiDimentionalarray[num][count] + "\xa0\xa0" + " ");

    }
    document.write("<br>");
}

// =====================================================================================



// var num;
// for (num = 1; num <= 10; num++)
// {
//     document.write(  num  + "<br>");
// }
// =======================================================================================


// var tabloOf, tableTill, num;

// tabloOf = +prompt("Please enter the table # ");
// tableTill = +prompt("Please enter Length of table you Require.");


// for (num = 1; num<=tableTill; num++)
// {
// document.write(tabloOf+"  x  "+num +  " =   "+ tabloOf*num+"<br>")
// }
// ====================================================================================


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {

// document.write(++i + "-  " + fruits[--i] + "<br>"+ "Element at " + i +" Index is " + fruits[i]+"<br>");

// }

// ==========================================================================================


// var series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// document.write("<h4>" + "<u>" + "Counting :" + "</u>" + "</h4>");

// for (var i = series.length - 1; i < series.length; i++) {
//     document.write(series);

// }

// document.write("<h4>" + "<u>" + " Reverse Counting :" + "</u>" + "</h4>");
// var num = 1;

// for (var i = (series.length); i > 0; i--) {
//     document.write(series[series.length - num] + ",");
//     num++;

// }


// document.write("<h4>" + "<u>" + "Even Counting :" + "</u>" + "</h4>");

// var series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for (i = 0; i <= series.length; i++) {
//     if ((series[i] % 2) === 0) {
//         document.write(series[i] + ",");
//     }
// }


// document.write("<h4>" + "<u>" + "Odd Counting :" + "</u>" + "</h4>");

// var series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for (i = 0; i <= series.length; i++) {
//     if ((series[i] % 3) === 0) {
//         document.write(series[i] + ",");
//     }
// }
// document.write("<br>")

// document.write("<h4>" + "<u>" + "Series Counting :" + "</u>" + "</h4>");
// var series = [];

// for (var i = 1; i <= 20; i++) {

//     document.write(series[i - 1] = i + "")

// }
// document.write("<br>")
// document.write(series);
// document.write("<br>")



// for (let i = 0; i < series.length; i++) {


//     if (series[i] % 2 === 0) {
//         document.write(series[i] + "k, ");


//     }
// }

// ===========================================================================================


// var anyInput ,diffNames = ["cake", "apple pie", "cookie", "chips", "patties"],num;

// anyInput = prompt("please enter  name");
// console.log(anyInput);
// num = diffNames.indexOf(anyInput) + 1;
// if (diffNames.includes(anyInput)) {
//     alert("Hurray ... YOU WON\nYou Have Entered " + anyInput + ". \nit is available at index No. " + num);
// }
// else {
//     alert("SORRY\n TRY AGAIN..................\nYou Have Entered " + anyInput);
// }

// ===========================================================================================


// document.write("<h1>" + "<u>" + "Largest Number in the Array" + "</u>" + "</h1>");

// var arrayChecking = [24,12,12,24,53,78,91,3, 6,3,6];
// var acsendingArray = [];
// for (var i = 1; i < arrayChecking.length; i++) {

// for (var num = 0; num <= arrayChecking.length-1; num++) {



//     if (arrayChecking[num] <= arrayChecking[num+1]) {
//         // document.write(arrayChecking[num] + " is larger than " + arrayChecking[num + 1] + "<br>");

//         var temp = arrayChecking[num];
//         arrayChecking[num] = arrayChecking[num+1];
//         arrayChecking[num+1] = temp;
//     }

//     }
// }


// document.write(arrayChecking + "<br>");

// ===============================================================================================


// document.write(arrayChecking + "<br>");
// document.write("largest No. Is "+ arrayChecking[0]+"<br>");
// document.write(arrayChecking[0]+"<br>");
// arrayChecking.reverse();
// document.write("Smallest No. Is " + arrayChecking[0]+"<br>");
// document.write(arrayChecking[0]);

// ============================================================================================

// var multiple_5 = [], i = 0, num, num1;


// for (num = 1; num <= 20; num++) {


//     if ((5 * num) % 5 === 0) {

//         document.write(num * 5 + ",");

//         multiple_5[i] = (5 * num);
//         i++;

//     }
// }
// document.write("<br>")
// document.write(multiple_5 + "<br>");
// num1 = multiple_5.length
// console.log(num1);

// document.write("largest No. Is " + multiple_5[--num1] + "<br>")

// document.write("smallest No. Is " + multiple_5[0] + "<br>")
// multiple_5.sort(function (b, a) { return (a - b) });
// document.write("largest No. Is " + multiple_5[0] + "<br>")
// multiple_5.sort(function (b, a) { return (a - b) });
// document.write(multiple_5[0] + "<br>");
// // document.write(multiple_5[]+"<br>");
// document.write("smallest No. Is " + multiple_5[multiple_5.length - 1] + "<br>")

// ===========================================================================================



