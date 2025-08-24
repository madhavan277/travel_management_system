const nodeMailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });
  const transporter = nodeMailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_ID,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });
  return transporter;
};

exports.sendEmail = async (options) => {
  try {
    const { email, subject, message, html } = options;

    const transporter = await createTransporter();
    const mailOptions = {
      from: process.env.EMAIL_ID,
      to: email,
      subject: subject,
      text: message,
      html,
    };
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log("Error sending email: \n", err);
  }
};
