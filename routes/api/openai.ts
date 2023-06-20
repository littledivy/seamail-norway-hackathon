import { translateToPirate } from "../../apis/openai.ts";
import { sendSimpleMail } from "../../apis/postmark.ts";

export async function handler(req: Request) {
    const message = await req.json();
    if (typeof message?.text !== "string") {
        throw new Error("Invalid data.");
    }
    const pirateMessage = await translateToPirate(message.text);
    console.log(pirateMessage);

    // sendSimpleMail({
    // })
    return Response.json(pirateMessage)
}