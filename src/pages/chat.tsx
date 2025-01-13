import ChatBot from "@/components/ChatBot";
import StickySidebar from '@/components/StickySidebar';

export default function Chat() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <StickySidebar />

      {/* Main Content */}
      <div
        className="flex-grow-1 p-4"
        style={{ marginLeft: '280px', overflowY: 'scroll' }}
      >
        <ChatBot />
      </div>
    </div>
  );
};