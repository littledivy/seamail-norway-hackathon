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
        <div class="mt-2 text-red-600 text-sm border-red-600 border-2 p-3 max-w-lg self-center mb-4">
          <p>Avast ye, matey!</p>
          <p>
            Blow me down and shiver me timbers! Our trusty ol' parrot, Seamail,
            has taken a long walk off a short plank. It be no more, retired it
            has, to save us from the scurvy dogs a'loose on the high seas of the
            internet, lookin' to maroon us all with their mischievous ways.
          </p>
          <p>
            Ye see, matey, even in the world of digital parley, ye can't escape
            from the roguish types. So, Seamail be in Davy Jones' Locker now,
            taking a well-deserved nap with the fishes, probably swappin' tales
            with a drunken squid. Who knows, perhaps it's happier down there!
          </p>
          <p>
            In the spirit of jolly cooperation, let's hoist the Jolly Roger high
            and continue our adventure without it. Savvy?
          </p>
          <p>Batten down the hatches and full sails ahead!</p>
        </div>
        <Form />
      </div>
    </div>
  );
}
