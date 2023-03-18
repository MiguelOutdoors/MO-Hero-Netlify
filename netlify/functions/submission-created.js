require("dotenv").config();
const fetch = require("node-fetch");
const { BUTTONDOWN_API_KEY } = process.env;

exports.handler = async (event) => {
  const payload = JSON.parse(event.body).payload;
  console.log(`Received a submission: ${payload.email}`);

  const response = await fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${"b3818ec7-3e5b-4363-b476-aa541728f853"}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: payload.email }),
  });

  let responseText = await response.text();
  console.log("response:", responseText);
  return {
    statusCode: response.status,
    body: responseText,
  };
};
