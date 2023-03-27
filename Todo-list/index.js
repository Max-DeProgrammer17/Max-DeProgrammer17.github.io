let listadd = document.querySelector(".list");
let button = document.querySelector(".btn");
let inputName = document.querySelector("#name");
let task = document.querySelector("#name2");
let btnrem = document.querySelector(".btn-remove");
let msg = document.querySelector(".infor");

  



   function createlist(){
    msg.textContent = `Below Are Your Task For Today`; 
     inputName.value="";
     inputName.focus();
  
     	let insertion = task.value;
      let newlist = document.createElement("li");
    function done(){
    newlist.style.textDecoration = "line-through";
    newlist.style.fontFamily = "fantasy";
    newlist.style.color = "red";
  }
  newlist.addEventListener("click", done);
 
        newlist.textContent = insertion;
         listadd.append(newlist);
         task.value="";
         task.focus();

          newlist.style.fontSize = "24px";
          newlist.style.fontWeigth = "bolder";
          newlist.style.color = "white";
          newlist.style.listStyleType = "square";
          newlist.style.textTransform = "capitalize";
    }


  

   button.addEventListener("click", createlist);
   