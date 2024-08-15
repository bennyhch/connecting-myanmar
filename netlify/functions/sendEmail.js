import emailjs from "@emailjs/browser";

exports.handler = async function (event, context) {
  // Ensure it's a POST request
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = process.env;

    // Construct the email params
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    // Send the email using EmailJS
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
