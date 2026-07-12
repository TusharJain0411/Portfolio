const transporter = require("../config/mailer");

exports.sendMail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      replyTo: email,

      to: process.env.EMAIL_USER,

      subject: `Portfolio Contact • ${subject}`,

      html: `
            <h2>New Portfolio Message</h2>

            <hr>

            <p><strong>Name:</strong> ${name}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Subject:</strong> ${subject}</p>

            <p><strong>Message:</strong></p>

            <p>${message}</p>
            `,
    });

    res.json({
      success: true,

      message: "Message sent successfully.",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,

      message: "Unable to send email.",
    });
  }
};
