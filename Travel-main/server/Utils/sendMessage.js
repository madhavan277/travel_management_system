require("dotenv").config({ path: "server/.env" });
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.sendMessage = async (message, to) => {
  const response = await client.messages.create({
    body: message,
    from: "+13464722677",
    to: `+91${to}`,
  });

  return response;
};
