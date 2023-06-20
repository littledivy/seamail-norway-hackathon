import { translateToPirate } from "../../apis/openai.ts";
import { sendSimpleMail } from "../../apis/postmark.ts";

export async function handler(req: Request) {
    const data = await req.formData();
    const emailAddress = getValue(data, "email");
    const message = getValue(data, "message");
    const pirateMessage = await translateToPirate(message);
    console.log(pirateMessage);

    // sendSimpleMail({
    // })
    return Response.json(pirateMessage)
}

function getValue(formData: FormData, key: string) {
    const value = formData.get(key);
    if (value == null) {
        throw new Error(`Not found form data: ${key}`);
    }
    return value.toString();
}