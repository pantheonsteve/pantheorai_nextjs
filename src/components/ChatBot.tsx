import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the last message when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);



  // Handle form submission (Enter key)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      alert("Please enter a message");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("https://api.pantheorai.stevebresnick.net/api/chat/", {
        message: input,
        state: { messages },
      });

      const assistantMessage = response.data.content;

      const updatedMessages = [
        ...messages,
        { role: "user", content: input },
        { role: "assistant", content: assistantMessage },
      ];

      setMessages(updatedMessages);
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle key press for Shift + Enter to add newline, Enter to submit
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // Submit form if Enter is pressed without Shift
      handleSubmit(e);
    } else if (e.key === "Enter" && e.shiftKey) {
      // Add newline if Shift + Enter is pressed
      setInput(input + "\n");
    }
  };

  return (
    <div className="container py-5 d-flex flex-column" style={{ height: "100vh" }}>
      {/* Chat Header */}
      <div className="text-center mb-4">
        <h1 className="display-6">Chat with Pantheor AI</h1>
      </div>

      {/* Chat Messages */}
      <div
        className="flex-grow-1 overflow-auto mb-3 p-3 border rounded bg-light"
        style={{ maxHeight: "70vh" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded ${
              msg.role === "user"
                ? "bg-warning text-black text-end"
                : "text-black text-start"
            }`}
          >
            <small className="d-block text-uppercase fw-bold">
              {msg.role === "user" ? "You" : "Assistant"}
            </small>

            {/* Render Markdown content */}
            <Markdown remarkPlugins={[remarkGfm]}>{msg.content}</Markdown>

          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="mt-3">
        <form onSubmit={handleSubmit} className="d-flex align-items-center">
          <textarea
            className="form-control me-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown} // Handle key press
            placeholder="Type your message..."
            disabled={loading}
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
