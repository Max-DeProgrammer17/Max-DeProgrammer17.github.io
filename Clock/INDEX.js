 let clock = document.querySelector(".clock");

  clock.style.fontSize = "80px";
  clock.style.fontWeight = "bolder";
  clock.style.fontFamily = "sans-serif";
  clock.style.color = "red";
  clock.style.textShadow = "0px 8px 3px black";

 let change = () => {
 	let date = new Date();

 	let sec = date.getSeconds();
 	let min = date.getMinutes();
 	let hrs = date.getHours();

 	clock.textContent = `${hrs} : ${min} : ${sec}`;
 }

 setInterval(change, 1000);

 