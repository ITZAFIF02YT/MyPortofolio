function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        pesan : document.getElementById("pesan").value,
    }

    emailjs.send("service_kqjeqh9","template_guk2j2r",parms).then(alert("Email Sent!!"))
}