import Head from "next/head";
import Container from "react-bootstrap/Container";
import ChatBot from "@/components/ChatBot";

export default function Chat() {
  return (
    <div className="d-flex">
      <ChatBot />
    </div>
  );
};
