import { getEmailSubject, translateToPirate } from "../../apis/openai.ts";
import { sendSimpleMail } from "../../apis/postmark.ts";

const failureMessage = `Ahoy there, matey!

Batten down the hatches, as ye've just received a message from the high seas via Seamail Ahoy! Avast ye, as this ain't no ordinary missive, but a hearty hello from the captain himself!

We be hopin' yer day be as smooth as calm waters, and yer spirits as high as the crow's nest on the tallest ship! Remember, every day above the briny deep is a good day, so make the most of it, ye scurvy dog!

Fair winds and following seas,

Stormy-eyed Sparrow`;

export async function handler(req: Request) {
  const data = await req.formData();
  const emailAddress = getValue(data, "email");
  const message = getValue(data, "message");
  const pirateMessage = await translateToPirate({
    to: emailAddress,
    body: message,
  }) ?? failureMessage;
  const emailSubject = await getEmailSubject({
    to: emailAddress,
    body: pirateMessage,
  }) ?? "Avast Ye, Matey! Ye've Struck Gold with this Message!";

  await sendSimpleMail({
    From: "ahoy@sea-mail.co",
    To: emailAddress,
    TextBody: pirateMessage,
    Attachments: [],
    Subject: emailSubject,
  });

  const headers = new Headers();
  headers.set("location", "/message-sent");
  return new Response(null, {
    status: 303,
    headers,
  });
}

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);
  if (value == null) {
    throw new Error(`Not found form data: ${key}`);
  }
  return value.toString();
}
