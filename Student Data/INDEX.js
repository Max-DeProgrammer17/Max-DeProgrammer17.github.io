let btn = document.querySelector(".button");
let age = document.querySelector(".age");
let name = document.querySelector(".name");
let telephone = document.querySelector(".telephone");
let std = document.querySelector(".student");



 

   function output(){
     let headerthree = document.createElement("h3");
    let headertwo = document.createElement("h2");
      let headerfour = document.createElement("h4");

  std.style.width = "80%"; 
  std.style.backgroundColor = "blueviolet";
  std.style.marginTop = "20px";
  std.style.fontFamily = "Century Schoolbook";
  std.style.color = "white";
  std.style.borderRadius = "12px";
  std.style.textAlign = "center";
  

  headertwo.innerHTML= `Student's Name: ${name.value}`;
  headerthree.innerHTML= `Student's Age: ${age.value}`;         
  headerfour.innerHTML = `Parent's Phone:  ${telephone.value}</br> </br>`;

  localStorage.setItem("Names", name.value);
  localStorage.setItem("age", age.value);
  localStorage.setItem("Tel", telephone.value);

    std.append(headertwo);
    std.append(headerthree);
    std.append(headerfour);
  
   age.value = "";
   age.focus();

   name.value = "";
   name.focus();

   telephone.value = "";
   telephone.focus();



  }

  // function tocheck(){
    // if(name.value === ""){
    //   alert("Enter Student Name");
    // }

    // if(telephone.value === "" || telephone.value.length < 9){
    //   alert("Invalid Number");
    // }
     
    //  if(age.value === ""){
    //   alert("Enter  Student Name");
    //  }
      


  //  }

  btn.addEventListener("click", output);
  // btn.addEventListener("click", tocheck);

