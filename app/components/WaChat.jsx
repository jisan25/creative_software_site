import Link from "next/link";

const WaChat = () => {
  return (
    // chat with us on whats app
    <div className="wa-chat-wrapper">
      <Link href="#">
        <img className="wa-chat" src="/img/chat-wa.png" alt="what's app chat" />
      </Link>
    </div>
  );
};

export default WaChat;
