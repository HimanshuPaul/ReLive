import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 rounded-t-2xl font-semibold flex justify-between items-center">
            AI Chatbot
            <X
              className="cursor-pointer"
              size={20}
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-sm text-gray-700">
            <div className="mb-2">
              <p className="bg-gray-200 p-2 rounded-lg w-fit">Hello 👋</p>
            </div>
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white p-2 rounded-lg w-fit ml-auto">
                Hi!
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
