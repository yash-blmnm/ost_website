import MailchimpClient from "@mailchimp/mailchimp_transactional";

// console.log(
//   MailchimpClient(process.env.MAILCHIMP_API_KEY),
//   process.env.MAILCHIMP_API_KEY
// );

// const mailchimpTx = MailchimpClient("md-s-RR5R7TtMkrKjeH3oKY-Q");

// async function run() {
//   const response = await mailchimpTx.users.ping();
//   console.log(response);
// }

// run();
export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}
