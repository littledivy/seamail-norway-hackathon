import { Configuration, OpenAIApi } from "openai";

export function translateToPirate(message: string) {
  return createMessageText({
    systemPrompt: `You are a pirate from the late 1600s.`
        + ` You MUST translate the following message to speak like a pirate.`,
    userMessage: message,
  });
}

export interface Email {
  from: string;
  body: string;
}

export function respondEmail(email: Email) {
  return createMessageText({
    systemPrompt: `You are a pirate from the late 1600s who reads and responds `
        + `to emails from the user. You MUST respond like a pirate.`,
    userMessage: `From: ${email.from}\nBody:\n${email.body}`,
  });
}

async function createMessageText(opts: {
  userMessage: string;
  systemPrompt: string;
}) {
  const configuration = new Configuration({
    apiKey: Deno.env.get("OPENAI_KEY"),
  });
  const openai = new OpenAIApi(configuration);
  const res = await openai.createChatCompletion({
    model: "gpt-4-32k",
    max_tokens: 350,
    messages: [
      { role: "system", content: opts.systemPrompt },
      { role: "user", content: opts.userMessage },
    ],
  });
  return res.data.choices[0].message;
}
