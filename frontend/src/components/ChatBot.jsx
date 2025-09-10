import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { MessageCircle, X } from "lucide-react";

const ChatBot = forwardRef(({ isOpen: externalOpen, onClose, onOpen }, ref) => {
  // If externalOpen is provided, sync state with it
  const [isOpen, setIsOpen] = useState(externalOpen ?? false);

  useEffect(() => {
    if (externalOpen !== undefined) {
      setIsOpen(externalOpen);
    }
  }, [externalOpen]);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I’m here to support your mental wellness. How would you like to proceed?",
    },
  ]);

  const [mode, setMode] = useState("menu");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [paragraph, setParagraph] = useState("");
  const [awaitingParagraph, setAwaitingParagraph] = useState(false);
  const messagesEndRef = useRef(null);

  const questions = [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself?",
    "Trouble concentrating?",
    "Moving or speaking slowly, or being fidgety?",
    "Thoughts that you would be better off dead or hurting yourself?",
    "Feeling nervous, anxious, or on edge?",
    "Not being able to stop or control worrying?",
    "Worrying too much about different things?",
    "Trouble relaxing?",
    "Being so restless that it's hard to sit still?",
    "Becoming easily annoyed or irritable?",
    "Feeling afraid as if something awful might happen?",
  ];

  const options = [
    { label: "Not at all", value: 0 },
    { label: "Several days", value: 1 },
    { label: "More than half the days", value: 2 },
    { label: "Nearly every day", value: 3 },
  ];

  const volunteers = [
    { name: "Tanvi", contact: "tanvi@example.com" },
    { name: "Bob Smith", contact: "bob@example.com" },
    { name: "Clara Lee", contact: "clara@example.com" },
  ];

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const startAssessment = () => {
    setMode("mental");
    setCurrentQuestion(0);
    setAnswers([]);
    addMessage("bot", questions[0]);
  };

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    addMessage("user", options[score].label);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      addMessage("bot", questions[currentQuestion + 1]);
    } else {
      finalizeAssessment(newAnswers);
    }
  };

  const finalizeAssessment = (allAnswers) => {
    const totalScore = allAnswers.reduce((a, b) => a + b, 0);
    let severity = "normal";

    if (totalScore <= 16) severity = "normal";
    else if (totalScore <= 32) severity = "moderate";
    else severity = "severe";

    if (severity === "normal") {
      addMessage(
        "bot",
        "✅ Your mental wellness seems fine! You can visit the Resources page, listen to music, or try some relaxing activities."
      );
      setMode("menu");
    } else {
      addMessage(
        "bot",
        "⚠️ It seems you may be experiencing moderate/severe symptoms. Please write a short paragraph about how you feel."
      );
      setAwaitingParagraph(true);
      setMode("paragraph");
    }
  };

  const handleParagraphSubmit = () => {
    if (!paragraph.trim()) return;

    const text = paragraph.toLowerCase();
    let sentiment = "Neutral";
    if (
      text.includes("sad") ||
      text.includes("depress") ||
      text.includes("anxious")
    ) {
      sentiment = "Negative";
    } else if (
      text.includes("happy") ||
      text.includes("relaxed") ||
      text.includes("better")
    ) {
      sentiment = "Positive";
    }

    addMessage("user", paragraph);
    addMessage(
      "bot",
      `🧠 Thanks for sharing. Your text sentiment seems: ${sentiment}.`
    );
    setParagraph("");
    setAwaitingParagraph(false);
    setMode("menu");
  };

  const endChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "👋 Hello! I’m here to support your mental wellness. How would you like to proceed?",
      },
    ]);
    setMode("menu");
    setCurrentQuestion(0);
    setAnswers([]);
    setParagraph("");
    setAwaitingParagraph(false);
  };

  const closeChat = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  const openChat = () => {
    setIsOpen(true);
    onOpen && onOpen();
  };

  // 🔑 Expose methods via ref
  useImperativeHandle(ref, () => ({
    openChat,
    closeChat,
    endChat,
  }));

  return (
    <div>
      {/* Floating Button */}
      {externalOpen === undefined && (
        <button
          onClick={() => (isOpen ? closeChat() : openChat())}
          className="fixed bottom-6 right-6 bg-teal-600 hover:bg-cyan-700 text-white p-4 rounded-full shadow-lg transition z-50"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-[28rem] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 animate-fadeIn">
          {/* Header */}
          <div className="bg-emerald-400 text-white px-4 py-2 flex justify-between items-center">
            <h2 className="font-semibold">Wellness Chatbot</h2>
            <X size={20} className="cursor-pointer" onClick={closeChat} />
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-violet-400 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Section (Menu / Answers / Paragraph) */}
          {mode === "menu" && (
            <div className="p-3 border-t grid grid-cols-1 gap-2">
              <button
                onClick={startAssessment}
                className="bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600 text-sm"
              >
                🧠 Check Mental Wellness
              </button>
              <button
                onClick={() => {
                  setMode("volunteers");
                  addMessage(
                    "bot",
                    "👥 Here are some trained volunteers you can contact:"
                  );
                  volunteers.forEach((v) =>
                    addMessage("bot", `${v.name} - ${v.contact}`)
                  );
                }}
                className="bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600 text-sm"
              >
                🤝 Consult Trained Volunteers
              </button>
              <button
                onClick={endChat}
                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 text-sm"
              >
                🛑 End Chat
              </button>
            </div>
          )}

          {mode === "mental" && !awaitingParagraph && (
            <div className="p-3 border-t grid grid-cols-1 gap-2">
              {options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt.value)}
                  className="bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600 text-sm"
                >
                  {opt.label}
                </button>
              ))}
              <button
                onClick={endChat}
                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 text-sm mt-2"
              >
                🛑 End Chat
              </button>
            </div>
          )}

          {mode === "paragraph" && awaitingParagraph && (
            <div className="p-3 border-t flex items-center gap-2">
              <input
                type="text"
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
                placeholder="Write how you feel..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none"
              />
              <button
                onClick={handleParagraphSubmit}
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
              >
                Send
              </button>
              <button
                onClick={endChat}
                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 text-sm ml-2"
              >
                🛑 End Chat
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default ChatBot;
