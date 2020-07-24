var num, count, name;

num = 113;
count = "why";
name = "yaqoob";


document.write(count + "<br>" + num + "<br>" + name);


document.write("<h1>" + "LEGAL VARIABLES" + "\n" + "</h1>");
document.write("<h3>" + " USERNAME" + "</h3>");
document.write("<h3>" + " username" + "</h3 >");
document.write("<h3>" + " userNam" + "</h3 >");
document.write("<h3>" + " user_name" + "</h3 >");
document.write("<h3>" + "  user1name" + "</h3 >");
// +   " , , user_name, user1name, username1, _username, $username");

document.write("<h1>" + "ILEGAL VARIABLES" + "\n" + "</h1>");
document.write("<h3>" + " 1USERNAME" + "</h3>");
document.write("<h3>" + " @username" + "</h3 >");
document.write("<h3>" + " #userNam" + "</h3 >");
document.write("<h3>" + " -user_name" + "</h3 >");
document.write("<h3>" + "  .user1name" + "</h3 >");
document.write("<h3>" + "  user name" + "</h3 >");
// +   " , , user_name, user1name, username1, _username, $username");


document.write("<h3>" + " Rules for naming JS variables." + "</h3>" +
    " Variable names can only contain Numbers, $ , and _.For example " +
    "<b>" + "$my_1stVariable." + "</b>" + "<br>" +
    " Variables must begin with a letter, $ or _ . For example" + "<b>" + "$name, _name or name." + "</b>" + "<br>" +
    " Variable names are case sensetive." + "<br>" + " Variable names should not be JS Keywords.");
