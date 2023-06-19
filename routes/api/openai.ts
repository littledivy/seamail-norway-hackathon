import { createMessageText } from "../../apis/openai.ts";
import { sendSimpleMail } from "../../apis/postmark.ts";

export async function handler(req: Request) {
    const message = await req.json();
    if (typeof message?.text !== "string") {
        throw new Error("Invalid data.");
    }
    const pirateMessage = await createMessageText({
        systemPrompt: `You are a pirate from the late 1600s.`
            + ` You MUST translate the following message to speak like a pirate.`,
        userMessage: message.text,
    });
    console.log(pirateMessage);

    // sendSimpleMail({
    // })
    return Response.json(pirateMessage)
}