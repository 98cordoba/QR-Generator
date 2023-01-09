function generateQRCode() {
    let website = document.getElementById("website").value;
    if (website) {
        let qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";
        new QRCode(qrcodeContainer, website);
        document.getElementById("qrcode-container").style.display = "block";
    } else {
        alert("Please enter a valid URL");
    }
}
function generateOTP(limit) {
    let digits = '0123456789';
    let otp = '';
    for (let i = 0; i < limit; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    let otpCodeContainer = document.getElementById("otpcode");
    otpCodeContainer.innerHTML += "Su clave temporal es: <br>" + otp + "<br>";
    document.getElementById("otp-container").style.display = "block";
    document.getElementById("otp-container").style.textAlign = "center";
}