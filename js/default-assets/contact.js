function sendMail() {
    let parms = {
        name: document.getElementById("fullName").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("emailId").value,
        message: document.getElementById("resume").value,
    };

    emailjs.send("service_dlsn8rc", "template_lxflyn5", parms)
      .then(() => {
        alert("Message sent successfully!");
      }, (err) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS error:", err);
      });
}