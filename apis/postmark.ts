const POSTMARK_API = "https://api.postmarkapp.com/email";

interface EmailBody {
  From: string;
  To: string;
  Subject: string;
  TextBody: string;
}

export async function sendSimpleMail(body: EmailBody) {
  console.log("To:", body.To, "\nBody:", body.TextBody);
  const response = await fetch(POSTMARK_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": Deno.env.get("POSTMARK_SERVER_TOKEN")!,
      "Accept": "application/json",
    },
    body: JSON.stringify({
      ...body,
      ReplyTo: "4cb6195adabd74755e2d54d89e2857e0@inbound.postmarkapp.com",
    }),
  });

  if (!response.ok) {
    throw new Error("Invalid reponse: " + await response.text());
  }

  return response.json();
}
