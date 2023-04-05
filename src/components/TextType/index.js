
import { useState, useEffect } from "react";

const TextType = ({ phrases, typingSpeed }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const phrase = phrases[index];
      if (isTyping) {
        if (text.length < phrase.length) {
          setText((prevText) => prevText + phrase.charAt(prevText.length));
        } else {
          setIsTyping(false);
        }
      } else {
        if (text.length > 0) {
          setText((prevText) => prevText.slice(0, prevText.length - 1));
        } else {
          setIsTyping(true);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [index, isTyping, text, phrases, typingSpeed]);

  return <span>{text}</span>;
};

export default TextType;
