import { Head } from "$fresh/runtime.ts";
import Form from "../islands/Form.tsx";

export default function Home() {
  return (
    <div class="bg-blue-200 min-h-screen flex items-center justify-center">
      <Head>
        <title>Sea-Mail</title>
        <link rel="icon" href="/pirate.webp" type="image/webp" />
      </Head>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="mb-4 text-center">
          <h1 class="text-2xl">Sea Mail</h1>
          <img src="pirate.webp" alt="Pirate Logo" class="mx-auto w-64" />
          <p class="mt-2 text-grey-darker text-sm">
            Welcome to Sea Mail! Submit an email and message, and our trusty
            pirate will translate your message into pirate-speak and send it on
            your behalf. Ahoy!
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}
