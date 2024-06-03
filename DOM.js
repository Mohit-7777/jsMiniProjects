// DOM = Document Object Model 
//       Object{} that represents the page you see in the web browser
//       and provide you with an API to interact with it.API
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the Element in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the content, structure, and style of a web page. 

const username = " Mohit";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username===""? ' Guest' :  username;
