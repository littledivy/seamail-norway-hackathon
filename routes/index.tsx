import { Head } from "$fresh/runtime.ts";
import Form from "../islands/Form.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sea-Mail</title>
      </Head>
      <img class="max-w-md mx-auto my-8" src="pirate.webp" />
      <h1 class="max-w-md mx-auto my-8 text-3xl text-center font-bold leading-7">
        Sea Mail
      </h1>
      <Form />
    </>
  );
}
