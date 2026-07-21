const funnyMessages = [

"😂 Wrong Password!",

"🙈 Nice Try!",

"🥺 Think Again!",

"❤️ Ask Your Girlfriend!",

"😜 Not Correct!"

];

function login(){

let pass=document.getElementById("password").value;

if(pass==="5493"){

window.location.href="selfie.html";

}

else{

document.getElementById("message").innerHTML=

funnyMessages[Math.floor(Math.random()*funnyMessages.length)];

}

}
