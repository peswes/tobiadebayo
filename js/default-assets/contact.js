function emailSend() {
    var userName = document.getElementById("fullName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("emailId").value;
    var message = document.getElementById("resume").value;

    messageBody = "Name: " + userName + "<br> Email:" + email + "<br> Message: " + message + "<br> Phone: " + phone;

    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "tobiadebayoart@gmail.com",
    Password : "9DD4B90BB60EAD7B89F8B4A17E464177E036",
    To : 'jackeywalley@gmail.com',
    From : "tobiadebayo.com",
    Subject : "New Entry from Tobiadebayo.com",
    Body : messageBody
}).then(
  message => {
    if (message == 'OK') {
        swal("Successful", "Thanks for reaching out to us, we'll get back to you as soon as possible!", "success");
    } else {
        swal("Error!", "Kindly enter valid details!", "error");
    }
  }
);
    return false;
}