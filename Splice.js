let ame = window.prompt();
let N = document.getElementById("name");
ame=ame.trim();
let fname = ame.charAt(0);
fname = fname.toUpperCase();

let Lname = ame.slice(1);
Lname = Lname.toLocaleLowerCase();

N.textContent=fname+Lname;