import Twilio from "twilio";

const twilioClient = Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

export const sendSMS = (to: string, body: string) => {
  return twilioClient.messages.create({
    body,
    to,
    from: process.env.TWILIO_PHONE,
  });
};

export const sendVerificationSMS = async (to: string, key: string) => {
  console.log(`sendVerificationSMS, to=>${to}`);
  const ret = await sendSMS(to, `Your verification key is : ${key}`);
  console.log(`[sendSMS] ret => ${ret}`);
};
