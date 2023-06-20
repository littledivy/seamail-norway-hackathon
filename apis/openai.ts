import { Configuration, OpenAIApi } from "openai";

export function translateToPirate(message: { to: string; body: string }) {
  const character = getCharacterKind(message.to);
  return createMessageText({
    systemPrompt: `You are a ${character} from the late 1600s.` +
      ` You MUST translate the following message to speak like a ${character}.`,
    userMessage: message.body,
  });
}

export function respondEmail(email: { from: string; body: string }) {
  const character = getCharacterKind(email.from);
  return createMessageText({
    systemPrompt: `You are a ${character} from the late 1600s who reads and ` +
      `responds to emails from the user. You MUST respond like a ${character}.`,
    userMessage: `From: ${email.from}\nBody:\n${email.body}`,
  });
}

function getCharacterKind(email: string) {
  return email.toLowerCase().includes("bert")
    ? "scientologist pirate"
    : "pirate";
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
  return res.data.choices[0].message?.content;
}
