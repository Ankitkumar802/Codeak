<script src="https://smtpjs.com/v3/smtp.js"></script>
    async function sendEmail() {
        const fromEmail = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const body = `Name: ${document.getElementById("name").value}<br>
                      Phone number: ${document.getElementById("number").value}<br>
                      Email: ${fromEmail}<br>
                      Message: ${document.getElementById("message").value}`;

        const formMessage = document.getElementById("formMessage");
        const loadingIndicator = document.getElementById("loading");

        formMessage.style.display = 'none';
        loadingIndicator.style.display = 'block';

        try {
            const message = await Email.send({
                Host: "smtp.elasticemail.com",
                Username: "ankitkumar777768@gmail.com",
                Password: "FAE1947F17C7DAB43835DE8DF3AA1A311AA1",
                To: 'ankitkumar777768@gmail.com',
                From: "ankitkumar777768@gmail.com",
                Subject: subject,
                Body: body
            });

            loadingIndicator.style.display = 'none';
            showMessage("Email successfully sent!", "success");
        } catch (error) {
            loadingIndicator.style.display = 'none';
            showMessage("Failed to send email: " + error.message, "error");
        }
    }

    function showMessage(message, type) {
        const formMessage = document.getElementById("formMessage");
        formMessage.textContent = message;
        formMessage.className = "message " + type;
        formMessage.style.display = 'block';
    }