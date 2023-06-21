import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export default function Submit() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    let x = new FormData(event.target);
    let message = x.get("message");
    let email = x.get("email");
    console.log(email, message);
    setSending(true);
    try {
      const resp = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });

      const data = await resp.json();
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
        return false;
      }}
    >
      <div className="container mx-auto p-8 bg-gray-100 rounded-md max-w-md">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-bold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
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
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
            required
          >
          </textarea>
        </div>
        <Button disabled={sending} />
      </div>
    </form>
  );
}
