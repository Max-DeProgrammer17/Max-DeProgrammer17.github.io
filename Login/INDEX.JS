
let password = document.querySelector("#pass");
let pass2 = document.querySelector("#pass2");
let form = document.querySelector(".login");
let fname = document.querySelector("#fname");
let sname = document.querySelector("#sname");


 function validate(){


 localStorage.setItem("Name", fname.value);
 localStorage.setItem("SecName", sname.value);
 localStorage.setItem("Password", password.value);
 localStorage.setItem("CnfrmPass", pass2.value);
 }


















// function validate(){
// 	  if(password.value.length < 8){
//   	 alert("Your Password must be greater than 8 char");
//   }

//    if(password.value != pass2.value){
//    	alert("Your Passwords must match");
//    }

//   if(password.value == "password"){
//   	 alert("Password can not be Password");
//   }

//    if(password.value.length != pass2.value.length){
//    	alert("Re-type Your Password");
//    }

//   if(fname.value == "" ){
//   	form.addEventListener("submit", (e)=>{
//   		e.preventDefault();
//   	})
//   }

//   if(sname.value == ""){
//   	form.addEventListener("submit", function(e){
//   	 e.preventDefault();
//   	})
//   }
// }

  
