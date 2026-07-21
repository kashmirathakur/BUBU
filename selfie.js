const video=document.getElementById("video");
const canvas=document.getElementById("canvas");
const photo=document.getElementById("photo");

async function startCamera(){

try{

const stream=await navigator.mediaDevices.getUserMedia({
video:{facingMode:"user"}
});

video.srcObject=stream;

}catch(e){

alert("Please allow camera permission.");

}

}

function takeSelfie(){

const ctx=canvas.getContext("2d");

canvas.width=video.videoWidth;
canvas.height=video.videoHeight;

ctx.drawImage(video,0,0);

const image=canvas.toDataURL("image/png");

photo.src=image;

photo.style.display="block";

localStorage.setItem("selfie",image);

alert("Looking handsome ❤️");

}

function nextPage(){

window.location.href="questions.html";

}

window.onload=startCamera;
