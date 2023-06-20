import { translateToPirate } from "../../apis/openai.ts";
import { sendSimpleMail } from "../../apis/postmark.ts";
import { HandlerContext } from "$fresh/server.ts";

export async function handler(req: Request) {
  const data = await req.formData();
  const emailAddress = getValue(data, "email");
  const message = getValue(data, "message");
  const pirateMessage = await translateToPirate({
    to: emailAddress,
    body: message,
  });
  console.log(pirateMessage);

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
