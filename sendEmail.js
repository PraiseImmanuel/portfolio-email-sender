const nodemailer = require("nodemailer");

async function sendEmail({ subject, name, message, email }) {
  // Create a transporter using your Gmail account credentials
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tochimmanuel@gmail.com",
      pass: "rysdsdbqooigqxiu",
    },
  });

  // Set up email data
  let mailOptions = {
    from: email, // sender address
    to: "tochimmanuel@gmail.com", // list of receivers
    subject: subject, // Subject line
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
  };

  // Send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// Export the function for use in other files
module.exports = sendEmail;
