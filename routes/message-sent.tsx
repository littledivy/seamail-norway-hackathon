import { Head } from "$fresh/runtime.ts";
import Form from "../islands/Form.tsx";

export default function MessageSent() {
  return (
    <>
      <Head>
        <title>Sea-Mail</title>
      </Head>
      <p>
        Message sent.
      </p>
    </>
  );
}
