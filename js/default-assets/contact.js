function sendMail() {

    let parms = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_dlsn8rc", "template_lxflyn5", parms)
      .then(() => {
       swal("Successful", "Message sent successfully!", "success");
      }, (err) => {
        swal("Error", "Message sent successfully!", "error");
        console.error("EmailJS error:", err);
      });
}

 