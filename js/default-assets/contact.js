function sendMail() {

    let parms = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_dlsn8rc", "template_lxflyn5", parms)
      .then(() => {
        alert("Message sent successfully!");
      }, (err) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS error:", err);
      });
}