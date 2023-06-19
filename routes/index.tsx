import { Head } from "$fresh/runtime.ts";
import Form from "../islands/Form.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Seamail</title>
      </Head>
      <Form />
    </>
  );
}
