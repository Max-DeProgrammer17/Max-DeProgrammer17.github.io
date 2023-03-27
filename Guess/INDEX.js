//VARIABLES

let field = document.querySelector(".enter"); 
let submit = document.querySelector(".submit");
let hint = document.querySelector(".hint");
let correct = document.querySelector(".correct-count");
let wrong = document.querySelector(".wrong-count");
let result = document.querySelector(".resulting");
let help = document.querySelector(".help");
let wrongcount = 0;
let correctcount = 0;

 
 function submitbtn(){
 	 field.focus();
 	 field.value = "";	
  let valuef = Number(field.value);
  let random = Math.floor(Math.random()*10) + 1;
   console.log(random);

 	if(valuef == random){
       result.textContent = ` "CORRECT GUESS"!!🙂🤗`;
       correctcount = correctcount + 1;
       correct.innerHTML = correctcount;

 	}else{
 		result.textContent = ` "WRONG GUESS"!! 😋😒😂`;
 		wrongcount = wrongcount + 1;
 		wrong.innerHTML = wrongcount;
 	}

 }

 function hintbtn(){
  let random = Math.floor(Math.random()*10) + 1;
 	
   if(Number(field.value) > random){
   	help.textContent = `Too High Try again!!`;
   }else{
   	help.textContent = `Too Low Try again!!`;
   }

 }

  submit.addEventListener("click", submitbtn);
  hint.addEventListener("click", hintbtn);



