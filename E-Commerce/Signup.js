
//VARIABLES.......
let password = document.querySelector("#pass");
let fname = document.querySelector("#fname");
let sname = document.querySelector("#sname");
let date = document.querySelector("#form-date");
let occupation = document.querySelector("#occupation");
let locations = document.querySelector("#location");
let phone = document.querySelector("#phone");
let alertbtn = document.querySelector("#btn");

//FIELD VALUES...
	
function info(){
	let passval = password.value;
    let fnameval = fname.value;
    let snameval = sname.value;
    let dateval = date.value;
    let occupationval = occupation.value;
    let locationsval = locations.value;
    let phoneval = phone.value;
  
  alert(`Your Informations..\nFirstname:${fnameval}\nSecondname:${snameval}\n
  	D.O.B:${dateval}\nPassword:${passval}\nOccupation:${occupationval}\n
  	Location:${locationsval}\nTelephone:${phoneval}`);
}

alertbtn.addEventListener("click", info);




