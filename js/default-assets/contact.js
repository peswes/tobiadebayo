function sendMail() {

    let parms = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    messageBody = 
        "Name: " + parms.name + "\n" +
        "Phone: " + parms.phone + "\n" +
        "Email: " + parms.email + "\n" +
        "Message: " + parms.message;
      
    emailjs.send("service_dlsn8rc", "template_lxflyn5", parms)
      .then(() => {
       swal("Successful", "Message sent successfully!", "success");
      }, (err) => {
        swal("Error", "Message failed to send, Please try again!", "error");
        console.error("EmailJS error:", err);
      });
}

 