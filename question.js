const questions=[

"1️⃣ If your girlfriend asks for your phone, will you give it?\n\nजर गर्लफ्रेंडने मोबाईल मागितला तर देशील का?",

"2️⃣ Who is the cutest person?\n\nसर्वात गोड व्यक्ती कोण आहे?",

"3️⃣ Will you always respect your girlfriend?\n\nतू नेहमी तुझ्या गर्लफ्रेंडचा आदर करशील का?",

"4️⃣ Will you take her on surprise dates?\n\nतिला सरप्राईज डेटवर नेशील का?",

"5️⃣ Do you promise to love your Bubu forever?\n\nतुझ्या Bubu वर कायम प्रेम करशील का?"

];

let current=0;

let answers=[];

document.getElementById("question").innerHTML=questions[current];

function answer(value){

answers.push({
question:questions[current],
answer:value
});

current++;

if(current<questions.length){

document.getElementById("question").innerHTML=questions[current];

}else{

localStorage.setItem("answers",JSON.stringify(answers));

window.location.href="result.html";

}

}
