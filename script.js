document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === "")
    {
        alert("All fields are required!");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern))
    {
        alert("Enter valid email!");
        return;
    }

    if(message.length < 10)
    {
        alert("Message must be at least 10 characters!");
        return;
    }

    alert("Form submitted successfully!");

});