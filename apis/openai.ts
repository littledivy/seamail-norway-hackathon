import { Configuration, OpenAIApi } from "openai";

export function translateToPirate(message: string) {
  return createMessageText({
    systemPrompt: `You are a pirate from the late 1600s.`
        + ` You MUST translate the following message to speak like a pirate.`,
    userMessage: message,
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
