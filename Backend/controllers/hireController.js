const transporter = require("../config/mailer");

exports.sendHireMail = async (req, res) => {
  try {
    const { name, email, position, salary, jobRole } = req.body;

    // Basic validation
    if (!name || !email || !position || !jobRole) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      replyTo: email,

      to: process.env.EMAIL_USER,

      subject: `New Hiring Proposal • ${position}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: auto;
          padding: 25px;
          background: #f8fafc;
          border-radius: 10px;
        ">

          <h2 style="color:#111827;">
            🚀 New Hiring Proposal
          </h2>

          <p>
            Someone is interested in hiring you through your portfolio.
          </p>

          <hr style="border:none;border-top:1px solid #ddd;" />

          <p>
            <strong>Name:</strong><br/>
            ${name}
          </p>

          <p>
            <strong>Email:</strong><br/>
            ${email}
          </p>

          <p>
            <strong>Job Position:</strong><br/>
            ${position}
          </p>

          <p>
            <strong>Salary / Budget:</strong><br/>
            ${salary || "Not specified"}
          </p>

          <p>
            <strong>Job Details:</strong>
          </p>

          <div style="
            background:white;
            padding:15px;
            border-radius:8px;
            border:1px solid #e5e7eb;
          ">
            ${jobRole}
          </div>

          <br/>

          <p style="font-size:13px;color:#6b7280;">
            Sent from your Portfolio Hire Me form.
          </p>

        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Hiring proposal sent successfully.",
    });
  } catch (error) {
    console.error("Hire mail error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send hiring proposal.",
    });
  }
};
