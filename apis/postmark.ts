const POSTMARK_API = "https://api.postmarkapp.com/email";

interface IAttachment {
  Content: string[];
  Name: string;
  ContentType: string;
  ContentDisposition: string;
}

interface IBody {
  From: string;
  To: string;
  Subject: string;
  HtmlBody: string;
  Attachments: IAttachment[];
}

export async function sendSimpleMail(body: IBody) {
  const response = await fetch(POSTMARK_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": Deno.env.get("POSTMARK_SERVER_TOKEN")!,
      "Accept": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Invalid reponse: " + await response.text());
  }

  return response.json();
}
