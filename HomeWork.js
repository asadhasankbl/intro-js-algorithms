function output(){
var firstnum = parseInt(document.getElementById('firstnum').value);
var secondnum = parseInt(document.getElementById('secondnum').value);
document.getElementById('total').innerHTML = firstnum + secondnum;
}


function check(form) { 
if(form.username.value == "asad" && form.password.value == "asad") {
window.open('http://omahacodeschool.com')
}
else {
alert("Error Password or Username")
}
}

function check(form) { 

if(form.userid.value == "Asad" && form.pswrd.value == "asad") {
alert("Hi Asad, this is your lucky day")
}
else {
alert("Error Password or Username")
}
}


function myFunction() {
document.body.style.backgroundColor = "#e94034";
}