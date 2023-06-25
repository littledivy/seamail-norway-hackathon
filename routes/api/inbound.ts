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
    console.log("Received inbound web hook.");
    throw new Error("Disabled");
    const emailData: WebhookData = await req.json();
    console.log("Data:", emailData);

    const text = await respondEmail({
      from: emailData.From,
      body: emailData.TextBody ?? emailData.HtmlBody,
    });

    if (!text) {
      console.error("Failed to respond to email", emailData);
    } else {
      await sendSimpleMail({
        From: "ahoy@sea-mail.co",
        To: getReplyTo(emailData),
        TextBody: text,
        Subject: emailData.Subject,
      });
    }

    return new Response("Success", {
      status: 200,
    });
  },
};

function getReplyTo(data: WebhookData) {
  if (data.ReplyTo != null && data.ReplyTo.trim().length > 0) {
    return data.ReplyTo;
  }
  return data.From;
}
