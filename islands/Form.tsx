export default function Submit() {
  return (
    <form method="POST" action="/api/openai">
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
        <div className="flex justify-center">
          <button
            type="submit"
            className="p-4 py-2 my-8 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
