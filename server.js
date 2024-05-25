const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package
const sendEmail = require("./sendEmail");

const app = express();
const port = 3000;

// Use the cors middleware
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Endpoint to receive email details and send the email
app.post("/send-email", async (req, res) => {
  const { subject, name, message, email } = req.body;

  if (!subject || !name || !message || !email) {
    return res.status(400).send("All fields are required");
  }

  try {
    await sendEmail({ subject, name, message, email });
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
