import { useState } from "react";

function Contact() {
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = () => {
    setShowMsg(true);
  };

  return (
    <div className="p-6 max-w-md mx-auto ">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>

      {showMsg && (
        <p className="text-green-600 text-center my-2">
          Message sent successfully ✅
        </p>
      )}

      <input className="border p-2 w-full my-2" placeholder="Name" />
      <input className="border p-2 w-full my-2" placeholder="Email" />
      <textarea className="border p-2 w-full my-2" placeholder="Message"></textarea>

      <button
        onClick={handleSubmit}
        className="bg-amber-800 text-white px-4 py-2 w-full"
      >
        Send
      </button>
    </div>
  );
}

export default Contact;

