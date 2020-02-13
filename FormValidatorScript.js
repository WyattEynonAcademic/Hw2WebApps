// JavaScript Document
document.getElementById("ClearButt").addEventListener("click", clearFunction());
document.getElementById("SubmitButt").addEventListener("click", validateFunction());
//semi-outdated does less now with html required tags
function checkNameStr(str){
	for (var x = 0; x < str.length; x++){
		var c = str.charAt(x);
		if((isNaN(c)==false)||(c==" ")){
				return false;
			}
		}
	return true;
}
function validateFunction(){
	alert("validating...");
	//document.getElementById("FailMsg").innerHTML = "";
	var fNameTxt = document.getElementById("firstName1").value;
	//fNameTxt = document.getElementById("firstName1").value;
	//alert(fNameTxt);
	if(fNameTxt.length>2){
		//alert("longer than 2");
		var lNameTxt = document.getElementById("lastName").value;
		if(lNameTxt.length>2){
			//alert("last name longer than 2");
			var emailTxt= document.getElementById("electoMail1").value;
			if((emailTxt.length>2)&&(emailTxt.indexOf("@")!=-1)){
				//alert("email good?");
				//The length of all fields is checked now...
				if(checkNameStr(fNameTxt)){
					window.location.href = "http://www.w3schools.com";
				}
				else{
					document.getElementById("FailMsg").innerHTML="Fail: Names cannot contain numbers or spaces";
				}
			}
			else{
				document.getElementById("FailMsg").innerHTML="Fail: Email Inavlid";
				}
			}
			else{
				document.getElementById("FailMsg").innerHTML="Fail: Last Name Too Short";	
			}	
		}
		else{
			document.getElementById("FailMsg").innerHTML="Fail: First Name Too Short";
		}
	}
function clearFunction(){
	document.getElementById("FailMsg").innerHTML = "hey";
	alert("Form Clearing...");
	document.getElementById("signUpForm").reset();
	}

