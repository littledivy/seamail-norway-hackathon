export default function Submit() {
  const handleSubmit = async () => {
    const resp = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
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
            rows="4"
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
            required
          >
          </textarea>
        </div>

        {
          /* <div className="flex flex-col">
            <label
              htmlFor="messageType"
              className="mb-2 font-bold text-gray-700"
            >
              Message Type
            </label>
            <select
              id="messageType"
              name="messageType"
              className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
              required
            >
              <option value="pirate">Pirate</option>
              <option value="shakespeare">Shakespeare</option>
              <option value="yoda">Yoda</option>
              <option value="robot">Robot</option>
              <option value="rapper">Rapper</option>
            </select>
          </div> */
        }
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="p-4 py-2 my-8 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
