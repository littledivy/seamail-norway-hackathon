import { HandlerContext, Handlers } from "$fresh/server.ts";
import { respondEmail } from "../../apis/openai.ts";
import { sendSimpleMail } from "../../apis/postmark.ts";

interface WebhookData {
  FromName: string;
  MessageStream: "inbound";
  From: string;
  ReplyTo: string;
  To: string;
  Cc: string;
  Bcc: string;
  OriginalRecipient: string;
  Subject: string;
  MessageID: string;
  TextBody: string;
  HtmlBody: string;
}

export const handler: Handlers = {
  async POST(req: Request, _ctx: HandlerContext) {
    const emailData: WebhookData = await req.json();
    console.log("Received inbound web hook.", emailData);

    const text = await respondEmail({
      from: emailData.From,
      body: emailData.TextBody ?? emailData.HtmlBody,
    });

    if (!text) {
      console.error("Failed to respond to email", emailData);
    } else {
      await sendSimpleMail({
        From: "ahoy@sea-mail.co",
        To: emailData.ReplyTo ?? emailData.From,
        TextBody: text,
        Subject: emailData.Subject,
      });
    }

    return new Response("Success", {
      status: 200,
    });
  },
};
