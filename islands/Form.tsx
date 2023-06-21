import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export default function Submit() {
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    const resp = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      })
    });


    const data = await resp.json();
    console.log("handleSubmit response", data);

    setSending(false);
  }

  return (
    <form>
      <div className="container mx-auto p-8 bg-gray-100 rounded-md max-w-md">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-bold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-bold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onInput={(e) => setMessage(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
            required
          >
          </textarea>
        </div>
        <div className="flex justify-center">
          <Button
            disabled={sending}
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </div>
    </form>
  );
}
