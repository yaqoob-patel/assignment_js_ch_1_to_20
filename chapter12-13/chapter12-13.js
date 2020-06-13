

// var char, caplatter, num, number,num2=1;

// char = prompt("Please enter a charectars");

// number = char.length;


// document.write("<u>" + number +  " CHARECTERS ARE ENTERED\n\n " + "</u>" + "<br>");


// for (var num1 = 0; num1 <= number - 1; num1++) {




//     if (char.charCodeAt(num1) >= 65 && char.charCodeAt(num1) <= 90) {

//         document.write(num2++ + "- CAPITAL LATTER " + char.charAt(num1) + "<br>");

//         document.write(char.charCodeAt(num1) + " is " + " character code of  "+ " " + char.charAt(num1) + "<br>")
//     }




//     else if (char.charCodeAt(num1) >= 97 && char.charCodeAt(num1) <= 122) {

//         document.write ( num2++ +"- Small LATTER " + char.charAt(num1) + "<br>");
//         document.write(char.charCodeAt(num1) + " is " + " character code of  " + char.charAt(num1) + "<br>")
//     }



//     else if ((char.charCodeAt(num1) >= 58 && char.charCodeAt(num1) <= 64) || (char.charCodeAt(num1) >= 32 && char.charCodeAt(num1) <= 47) ||
//         (char.charCodeAt(num1) >= 91 && char.charCodeAt(num1) <= 96) || (char.charCodeAt(num1) >= 123  && char.charCodeAt(num1) <= 126))
//     {
//         document.write( num2++ +"- YOU HAVE ENTERED SPECIAL CHARECTER " + char.charAt(num1) + "<br>")
//         document.write(char.charCodeAt(num1) + " is " + " character code of  " + char.charAt(num1) + "<br>")

//     }
//     else {

//         document.write("YOU HAVE ENTERED NUMBER " + char.charAt(num1) + "<br>")
//         document.write(char.charCodeAt(num1) + " is " + " character code of  " + char.charAt(num1) + "<br>")
//     }

// }


// =================================================================================================================================================

// var num1, num2, result;

// num1 = prompt("PLEASE ENTER NUMBER 1");
// num2 = prompt("PLEASE ENTER NUMBER 2");

// result = num1 + num2;

// if (num1===num2)
// {
//     document.write("Numbers are EQUAL")  

// }

// else if (num1 > num2) {
//     document.write("Number " + "(" + num1 + ")" + " Is Bigger than Number " + "(" + num2 + ")")  

// }
// else {
//     document.write("Number " + "(" + num2 + ")" + " Is Bigger than Number " + "(" + num1 + ")")
// }
// =====================================================================================================



// var number;

// number = prompt("PLEASE ENTER ANY NUMBER");

// if (number> 0) {

//     document.write("You have Entered (+ve) NUMBER  "+ "<br>" + number)
// }

// else if (number < 0) {

//     document.write("You have Entered (-ve) NUMBER  "+ "<br>" + number)

// }
// else {

//     document.write("You have Entered  "+ "<br>" + number)
// }
// ============================================================================================================


// var char;

// char = prompt("Please Enter Single Alphabat Character");

// if ((char.charAt(0) === "a") || (char.charAt(0) === "e" ) || (char.charAt(0) === "i")
//     || (char.charAt(0) === "o") || (char.charAt(0) === "u") || (char.charAt(0) === "A")
//     || (char.charAt(0) === "E") || (char.charAt(0) === "E") || (char.charAt(0) === "i")
//     || (char.charAt(0) === "O") || (char.charAt(0) === "U") ) {
//     document.write("CHARACTER YOU HAVE ENTERED IS A VOWEL" + "(" + char.charAt(0) + ")")
//     console.log(char.charAt(0));
// }
// else {
//     document.write("CHARACTER YOU HAVE ENTERED IS NOT A VOWEL" + "(" + char.charAt(0) + ")")

// }
// ================================================================================================

// var yourPassword, passwordCheck, testing;
// yourPassword = prompt("PLEASE ENTER PASSWORD");
// passwordCheck = prompt("PLEASE ENTER PASSWORD AGAIN");

// if (yourPassword.length < 1) {
//     alert("PLEASE ENTER PASSWORD")
//     document.write("PLEASE ENTER PASSWORD")

// }
// else{ 

// if (testing = yourPassword.includes(passwordCheck)) {
//     document.write("CORRECT !!! THE PASSWORD YOU ENTERED MATCHES THE ORIGINAL PASSWORD ");
// }
// else {
//     document.write("INCORRECT PASSWORD"+ "<br>"+ passwordCheck)
// }
// console.log(yourPassword);
// console.log(passwordCheck);
// console.log(testing);

// }
// ===============================================================================================================


// var greeting;
// var hour = 20;
// if (hour < 18) {
//     greeting = ("Good day")
//     document.write(greeting)
// }
// else {
//     greeting = ("Good evening")
//     document.write(greeting)
// }

// =====================================================================================================================

var time;
time = prompt("Please Enter Time In 24 Hours Format i.e 1900\n which is Equal to 7.00pm")

if (time >= 0000 && time <= 2399) {

    if (time >= 0000 && time <= 1200) {
        document.write("GOOD MORNING")
        alert("GOOD MORNING")
    }
    else if (time >= 1200 && time <= 1700) {
        document.write("GOOD AFTERNOON")
        alert("GOOD AFTERNOON")
    }

    else if (time >= 1700 && time <= 2100) {
        document.write("GOOD EVENING")
        alert("GOOD EVENING")
    }
    else {
        document.write("GOOD NIGHT")
        alert("GOOD NIGHT")
    }

}

else {

    document.write("PLEASE ENTER CORRECT TIME")
    alert("PLEASE ENTER CORRECT TIME")
}