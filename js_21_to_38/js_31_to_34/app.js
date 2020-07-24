// Question No.1==========================================================

// dont comment this section. it is used i all questions.
// var d = new Date();
// d.setMonth(6);

// var h = console.log(d);
// document.write(d + "<br>");
// Question No.2==========================================================

// monthArr = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // alert("CURRENT DATE = " + d);

// alert("CURRENT MONTH = " + monthArr[d.getMonth()]);

// Question No.3==========================================================

// monthArr = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var month = monthArr[d.getMonth()];
// var monthINShort = month.slice(0, 3);
// alert("today is " + monthINShort);

// Question No.4==========================================================

// dayArr = [
//     "Saturday",
//     "Sunday",
//     "Monday",
//     "Teusday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
// ];
// var day = dayArr[d.getDay()];
// console.log(day);
// // var monthINShort = month.slice(0, 3);
// // alert("today is " + monthINShort);
// if (day === "Saturday" || day === "Sunday") {
//     document.write("Its Fun Day");
// } else {
//     document.write("Its WORKING Day");
// }

// Question No.5==========================================================

// var todayDate = d.getDate();
// if (todayDate <= 15) {
//   document.write("<br> First Fifteen Days Of A Month");
// } else {
//   document.write("Last Fifteen Days Of A Month");
// }

// Question No.6==========================================================

// var elapsedTime = d.getTime();
// console.log(elapsedTime);
// document.write("<br>" + "Elapsed Time Since January,1 1970 = " + elapsedTime);
// document.write(
//   "<br>" +
//     "Elapsed Minutes Since January,1 1970 = " +
//     Math.floor(elapsedTime / (1000 * 60))
// );

// Question No.7==========================================================

// var timeNow = d.getHours();
// // console.log(timeNow);
// if (timeNow >= 12) {
//   alert("Its P.M");
// } else {
//   alert("Its A.M");
// }

// Question No.8==========================================================
// d.setFullYear(2020);
// d.setMonth(11);
// d.setDate(31);
// d.setHours(12);
// d.setMinutes(00);
// d.setSeconds(00);
// d.setMilliseconds(000);
// var laterDate = d;
// console.log(d);
// document.write(d);

// Question No.9==========================================================

// oldDate = 18 ay 2015. dont uncomment this (thanks)

// var dateCurrent = d.getDate();
// console.log(dateCurrent);
// var monthsCurrent = d.getMonth() + 1;
// console.log(monthsCurrent);
// var yearCurrent = d.getFullYear();
// console.log(yearCurrent);
// console.log(d);

// d.setDate(18);
// d.setMonth(4);
// d.setFullYear(2015);
// var newDate = d;
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getDate());

// var yearsDays = (yearCurrent - newDate.getFullYear()) * 365;
// console.log(yearsDays);
// var monthsDays = (monthsCurrent + (newDate.getMonth() + 1)) * 30 + 5;

// console.log(monthsDays);
// var dayDays = dateCurrent + (30 - newDate.getDate());
// console.log(dayDays);
// var totaldays = yearsDays + monthsDays + dayDays;
// console.log(totaldays);

// alert(totaldays + " Days have been passed since last Ramazan.");

// Question No.10==========================================================

// var d = new Date();
// console.log(d);
// var timeInmsec = d.getTime();
// console.log(timeInmsec);

// d.setDate(01);
// d.setMonth(0);
// d.setFullYear(2020);
// var newDate = d;
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getTime());

// var diffInMsec = timeInmsec - newDate.getTime();
// console.log(diffInMsec);
// var totalSeconds = diffInMsec / 1000;
// console.log(totalSeconds);

// document.write(
//   "On Reference Date" +
//     newDate +
//     " , " +
//     "<br>" +
//     totalSeconds +
//     " Seconds has Passed since beginng of 2020"
// );

// Question No.11==========================================================

// var currentDate = new Date();
// console.log(currentDate);
// var currentHour = currentDate.getHours();
// console.log(currentHour);
// var setCurrrentHours = currentHour - 1;
// console.log(setCurrrentHours);
// currentDate.setHours(setCurrrentHours);

// console.log(currentDate);

// document.write(
//   "CURRENT DATE : " + new Date() + "<br> One Hour Ago, It Was" + currentDate
// );

// Question No.12==========================================================

// var currentDate = new Date();
// console.log(currentDate);
// var currentYear = currentDate.getFullYear();
// console.log(currentYear);
// var resetYear = currentYear - 100;
// var newCurrentDate = currentDate.setFullYear(resetYear);
// console.log(currentDate);
// alert(
//   "Current Date : " + new Date() + " \n 100 Years Back It Was " + currentDate
// );

// Question No.13==========================================================
// var age = +prompt("Please Enter your Age :", 123);
// console.log(age);
// var year = new Date().getFullYear();
// var birthYear = year - age;

// console.log(birthYear);
// document.write(
//     "your Age Is : " + age + "<br> Your Birth Year Is :" + birthYear
//     );

// Question No.14==========================================================
// document.getElementById("heading").innerHTML = "K-ELECTRIC BILL";
// document.getElementById("heading").style.fontSize = "3rem";
// document.getElementById("heading").style.textDecoration = "underline";

// var customerName = prompt("<b>Your Name</b>", "Muhammad Yaqoob");
// var monthName = prompt("Month", "January");
// var unitUsed = +prompt("No Of Units", "450");
// var UnitCost = +prompt("Charges Per Unit", "20.77");

// document.getElementById("name").innerHTML = "Customers Name : " + customerName;
// document.getElementById("name").style.fontSize = "2rem";

// document.getElementById("month").innerHTML = "Month : " + monthName;
// document.getElementById("month").style.fontSize = "2rem";

// document.getElementById("units").innerHTML = "Number Of Units : " + unitUsed;
// document.getElementById("units").style.fontSize = "2rem";

// document.getElementById("cost").innerHTML = "Charge Per Unit : " + UnitCost;
// document.getElementById("cost").style.fontSize = "2rem";

// document.getElementById("netAmount").innerHTML =
//   "Net Amount Payable (Within Due Date) : " + Math.floor(UnitCost * unitUsed);
// document.getElementById("netAmount").style.fontSize = "2rem";

// var latePaySurcharge = UnitCost * unitUsed * 0.03;
// document.getElementById("surcharge").innerHTML =
//   "Late Payment Surcharge = " + Math.floor(latePaySurcharge);
// document.getElementById("surcharge").style.fontSize = "2rem";

// document.getElementById("afterduedate").innerHTML =
//   "Gross Amount Payable (After Due Date) = " +
//   Math.floor(unitUsed * UnitCost + latePaySurcharge);
// document.getElementById("afterduedate").style.fontSize = "2rem";

// Question No.15==========================================================
