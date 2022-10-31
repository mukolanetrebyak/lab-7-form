function isPasswordMatch() {
    var password = document.getElementById("myPassword");
    var confirmPassword = document.getElementById("myPasswordR");

    if (password != confirmPassword) 
	{
	alert("Паролі не сходяться");}
    else {
    alert("Паролі сходяться");}
}

function myFunction() {
  var x = document.getElementById("myPassword");
  var y = document.getElementById("myPasswordR");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}

