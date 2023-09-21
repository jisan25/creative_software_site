import Link from "next/link";

const WaChat = () => {
  return (
    <div className="wa-chat-wrapper">
      <Link href="#">
        <img className="wa-chat" src="/img/chat-wa.png" alt="what's app chat" />
      </Link>
    </div>
  );
};

export default WaChat;
