function checkPassword() {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (password === "5493") {
        window.location.href = "selfie.html";
    } else {
        message.innerHTML = "❌ Wrong Password! / ❌ चुकीचा पासवर्ड!";
    }
}
