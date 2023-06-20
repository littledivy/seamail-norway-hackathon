interface IWebhookData {
  FromName: string;
  MessageStream: "inbound";
  From: string;
  To: string;
  Cc: string;
  Bcc: string;
  OriginalRecipient: string;
  Subject: string;
  MessageID: string;
}

export default async function handler(req: Request) {
  const data = await req.json();
}
