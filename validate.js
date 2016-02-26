function nameValidate(id){
	var name = document.getElementById(id).value;
	
	if (name.match(/^[A-Z][A-Z'-]+$/i) == null) {
		document.getElementById("error").innerHTML = "Invalid Name.";
	} else {
		document.getElementById("error").innerHTML = "";
	}
}

function emailValidate(){
	var email = document.getElementById("email").value;
	
	if (email.match(/^[A-Z\d._+-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i) == null) {
		document.getElementById("error").innerHTML = "Invalid Email.";
	} else {
		document.getElementById("error").innerHTML = "";
	}
}

function passValidate(id){
	var pass = document.getElementById(id).value;
	
	if (pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/) == null) {
		document.getElementById("error").innerHTML = "Password must be at least 10 characters and contain an upper-case and lowercase letter and a number.";
	} else {
		document.getElementById("error").innerHTML = "";
	}
}