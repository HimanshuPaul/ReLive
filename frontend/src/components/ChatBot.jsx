import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatBot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there 👋! I'm your mental wellness companion. I’m here to listen and support you. How are you feeling today?",
    },
  ]);
  const [mode, setMode] = useState("menu"); // menu / questions / paragraph
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [paragraph, setParagraph] = useState("");
  const [awaitingParagraph, setAwaitingParagraph] = useState(false);

  const scrollRef = useRef();

  // 8 friendly, meaningful questions (PHQ + GAD)
  const questions = [
    "Have you been enjoying things you usually like doing?",
    "Have you been feeling down, sad, or hopeless lately?",
    "Have you been feeling tired or low on energy?",
    "Have you had trouble sleeping or falling asleep?",
    "Have you been feeling anxious or on edge?",
    "Have you found it hard to control your worries?",
    "Have you had difficulty relaxing or unwinding?",
    "Have you felt afraid something awful might happen?",
  ];

  const options = [
    { label: "Not really / never", value: 0 },
    { label: "Sometimes / a few days", value: 1 },
    { label: "Often / more than half the days", value: 2 },
    { label: "Almost every day / yes", value: 3 },
  ];

  // Auto-scroll messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const startQuestions = () => {
    setMode("questions");
    setCurrentQuestion(0);
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
      calculateSeverity(newAnswers);
    }
  };

  const calculateSeverity = (allAnswers) => {
    const phqScore = allAnswers.slice(0, 4).reduce((a, b) => a + b, 0); // first 4 = PHQ
    const gadScore = allAnswers.slice(4).reduce((a, b) => a + b, 0); // last 4 = GAD
    const totalScore = phqScore + gadScore;

    let severity = "Normal";
    if (totalScore <= 8) severity = "Normal";
    else if (totalScore <= 16) severity = "Moderate";
    else severity = "Severe";

    if (severity === "Normal") {
      addMessage(
        "bot",
        <div>
          ✅ You seem to be doing okay! Keep taking care of yourself.
          <br />
          Try relaxing activities, mindfulness, or talking to a friend.
          <br />
          <button
            className="mt-2 bg-purple-500 text-white px-3 py-2 rounded hover:bg-purple-600"
            onClick={() => navigate("/resources")}
          >
            Explore Helpful Resources
          </button>
        </div>
      );
    } else {
      addMessage(
        "bot",
        "⚠ It looks like you may be feeling stressed, anxious, or down. Could you write a short paragraph about how you've been feeling? It will help me understand better."
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
      text.includes("anxious") ||
      text.includes("hopeless") ||
      text.includes("tired")
    ) {
      sentiment = "Negative";
    } else if (
      text.includes("happy") ||
      text.includes("relaxed") ||
      text.includes("better") ||
      text.includes("good")
    ) {
      sentiment = "Positive";
    }

    addMessage("user", paragraph);

    if (sentiment === "Negative") {
      addMessage(
        "bot",
        <div>
          🧠 Thanks for sharing. I hear you. It seems you might need extra
          support.
          <br />
          I recommend booking an appointment with a professional who can help
          you.
          <br />
          <button
            className="mt-2 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
            onClick={() => navigate("/services")}
          >
            Book an Appointment
          </button>
        </div>
      );
    } else {
      addMessage(
        "bot",
        "🧠 Thanks for sharing! Keep practicing self-care, relaxation, and positive activities. You’re doing your best, and that matters."
      );
    }

    setParagraph("");
    setAwaitingParagraph(false);

    // Reset chat after 10 seconds
    setTimeout(() => {
      resetChat();
    }, 10000);
  };

  const handleMenuOption = (option) => {
    if (option === "wellness") startQuestions();
    else if (option === "volunteer") {
      addMessage(
        "bot",
        <div>
          You can consult these trained volunteers:
          <br />
          <ul className="list-disc ml-5 mt-2">
            <li>Sidhant - sid@gmail.com</li>
            <li>Sam - sam@gmail.com</li>
            <li>Himanshu - himanshu@gmail.com</li>
          </ul>
        </div>
      );

      // Automatically reset chat after 10 seconds
      setTimeout(() => {
        resetChat();
      }, 10000);
    } else if (option === "end") {
      resetChat();
    }
  };

  const resetChat = () => {
    setIsOpen(false);
    setMessages([
      {
        sender: "bot",
        text: "Hi there 👋! I'm your mental wellness companion. I’m here to listen and support you. How are you feeling today?",
      },
    ]);
    setCurrentQuestion(-1);
    setAnswers([]);
    setParagraph("");
    setAwaitingParagraph(false);
    setMode("menu");
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-white/20 backdrop-blur-md hover:bg-emerald-400 text-white p-4 rounded-full shadow-lg transition z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-[28rem] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-emerald-400 text-white px-4 py-2 flex justify-between items-center">
            <h2 className="font-semibold">Wellness Chatbot</h2>
            <X
              size={20}
              className="cursor-pointer"
              onClick={() => resetChat()}
            />
          </div>

          {/* Messages */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-3 text-sm"
            ref={scrollRef}
          >
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
          </div>

          {/* Main Menu Options */}
          {mode === "menu" && (
            <div className="p-3 border-t grid grid-cols-1 gap-2">
              <button
                className="bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600"
                onClick={() => handleMenuOption("wellness")}
              >
                Check Mental Wellness
              </button>
              <button
                className="bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600"
                onClick={() => handleMenuOption("volunteer")}
              >
                Consult Trained Volunteers
              </button>
              <button
                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                onClick={() => handleMenuOption("end")}
              >
                End Chat
              </button>
            </div>
          )}

          {/* Answer Options */}
          {mode === "questions" && !awaitingParagraph && (
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
            </div>
          )}

          {/* Paragraph Input */}
          {awaitingParagraph && (
            <div className="p-3 border-t flex items-center gap-2 bg-yellow-50 rounded-t-lg">
              <input
                type="text"
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
                placeholder="Write how you feel..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none bg-white text-blue-700"
              />
              <button
                onClick={handleParagraphSubmit}
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
