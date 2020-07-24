// let firstName = prompt("Please Enter Your First Name", "Yaqoob");
// let lastName = prompt("Please Enter Your Last Name", "Patel");
// let fullName = (firstName + " " + lastName);
// alert("Assalamoaliekum " + fullName + "\n" + "Wellcome to PATELSOFT");


// =================================================================================================


// let mobileModel = prompt("your favorite mobile model is: ", "Samsung Galaxy S6");

// alert("Your Favorite Mobile Model Is : " + mobileModel + "\n" + "Length Of String Is: " + mobileModel.length);

// =====================================================================================================


// let country = prompt("Please Enter Country Name : ", "Pakistan");
// let alphabet = prompt("Please Enter Character", "P")

// let alphabet1 = alphabet.toLowerCase();

// let country1 = country.toLowerCase();


// let num = country1.indexOf(alphabet1);

// alert("String : " + country + "\n" + "Index of alphabat : " + alphabet + " is " + num);


// =======================================================================================================================


// let para = prompt("Please Enter String with Repeating Charecters", "SOONNEE");
// let repeatChar = prompt("Please Enter Charecter", "N");

// let para1 = para.toLowerCase();
// let repeatChar1 = repeatChar.toLowerCase();

// let num = para1.lastIndexOf(repeatChar1);

// alert("String : " + para + "\n" + "Last Index Of " + repeatChar + " is : " + num)



// ===================================================================================================================


// let yourString = prompt("Please Enter a String", "Any Expression");

// let num = +prompt("Please Enter a Index No. To be Find", "10");

// let reqChar = yourString.charAt(num);

// alert("String: " + yourString + "\n" + "Charecter at " + num + " is " + reqChar)




// ==================================================================================================================



// let firstName = prompt("Please Enter Your First Name", "Yaqoob");
// let lastName = prompt("Please Enter Your Last Name", "Patel");
// let fullName = firstName.concat(" ", lastName);
// alert("Assalamoaliekum " + fullName + "\n" + "Wellcome to PATELSOFT");


// ====================================================================================================================


// var myCity = "Hyderabad";
// var myString = "Islam";

// var newCity = myCity.replace("Hyder", "Islam");

// alert("City : " + myCity + "\n" + "After Replacement : " + newCity);

// =====================================================================================================================


// var message = "“Ali and Sami are best friends.They play cricket and football together.”";

// var newMessage = message.replace(/and/g, "&");

// document.write("<h3>" + newMessage + "</h3>");

// ===================================================================================================================


// var num = prompt("Please Enter a Number", "123");

// var value = typeof (num);
// var a = parseInt(num);
// var value2 = typeof (a);

// console.log(value);

// console.log(value2);


// alert("value Entered = " + num + "\n" + "Type =" + value + "\n" + "Value Entered = " + num + "\n" + "Type = " + value2);


// =======================================================================================================================

// var myString = prompt("Please Enter a word in small latters", "abc");

// var mystring1 = myString.toUpperCase();

// alert("User Input : " + myString + "\n" + "Upper Case :" + mystring1);

// =============================================================================================================

// var myString = prompt("Please Enter a word in small latters", "abc");

// var mystring1 = myString.slice(0, 1);
// var mystring2 = myString.slice(1);

// alert("User Input : " + myString + "\n" + "Title Case : " + mystring1.toUpperCase() + mystring2);



// ================================================================================================================



// var num = +prompt("Please Enter A Number", 123);

// var myString = num.toString();
// document.write(myString + "<br>");

// var x = myString.replace(".", "");

// document.write(x);

// ===========================================================================================================


// var name = prompt("Please Enter Your Name");

// if (name.includes("@") || name.includes(",") || name.includes(".") || name.includes("!")) {

//     alert("Please Enter A Valid User Name");
// }
// else {
//     alert("You have Entered " + name.toUpperCase());
// }


// ===============================================================================================



// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// alert("Hello Sir/Madam \n" + "Welcome To Our Bakery \n" + "What Do You Wants To Order");

// var item = prompt("Please Enter Your Required Item");

// if (A.includes(item.toLowerCase())) {
//     alert("We are Pleased to inform you \n" + "Your Required Item is available. \n" + "Thanks")
// }
// else {
//     alert("So soory \n" + " your required item " + item + " is not available right now.")
// }


// ===========================================================================================================


// var password = prompt("Please Eter Password contains Alphabets and Numbers, Not starting with Number",);
// if (password.length > 6)  {
//     alert("Please Enter Correct Password");
// }

// for (var i = 0; i <= password.length - 1; i++) {

//     var num = password.charCodeAt(i);
//     console.log(num);
//     console.log(password.charAt(i));
//     if ((num >= 65 || num <= 90) && (num >= 97 || num <= 122) && (password.length > 6) && (password.charAt(0) > 58)) {

//         alert("correct Password");


//     if (num >= 97 || num <= 122) {
//         if (password.length >= 6) {
//             if (num >= 48 || num <= 58) {

//                 alert("Password excepted")


//             }

//         }

//     }
//     }
//     else {
//         alert("Please Enter correct Password");
//     }
// }

// =====================================================================================================================

// var university = "University of Karachi in karachi";

// newArray = university.split("");

// for (var i = 0; i < newArray.length; i++) {


//     document.write(newArray[i] + "<br>");

//     console.log(newArray[i]);
// }

// ==================================================================================================================


// var userInput = prompt("Please Enter a Sentance");

// var num = userInput.length - 1;

// lastChar = userInput.charAt(num);

// alert("USER INPUT : " + userInput + "\n" + "LAST CHARECTER : " + lastChar);


// =====================================================================================================================


var sentance = "the quick brown fox jumps over the lazy dog";
var findWord = "'the'"
var word = sentance.match(/the/g);
console.log(word);
var num = word.length;
console.log(num);

alert("TEXT :  the quick brown fox jumps over the lazy dog \n There are " + num + " occourence of the word " + findWord)





