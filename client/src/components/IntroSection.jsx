import React from "react";
import BotResponse from "./BotResponse";

const IntroSection = () => {
  return (
    <div id="introsection">
      <h1>
        Introducing DocSage AI
        <BotResponse response=" - The Ultimate AI Assistant" />
      </h1>
      <h2>
        A cutting-edge AI-powered app that provides instant answers to any
        question you may have. With DocSage AI, you'll never be left searching for
        answers again. Whether you need information for documents, DocSage AI has you covered.
      </h2>
      Features:
      <ul>
        <li>Instant answers to any question</li>
        <li>Deep learning technology that improves with usage</li>
        <li>Continuously Learning</li>
        <li>User-friendly interface</li>
        <li>Available 24/7</li>
      </ul>
      <p>
        Say goodbye to endless searching and typing, and say hello to DocSage AI,
        your personal Document AI assistant. Try it now and see for yourself how DocSage AI
        can make your life easier.
      </p>
    </div>
  );
};

export default IntroSection;
