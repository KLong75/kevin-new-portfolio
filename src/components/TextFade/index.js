import { useState, useEffect } from "react";

const TextFade = ({ phrases, fadeSpeed }) => {
  const [index, setIndex] = useState(0);
  const [isFadingIn, setIsFadingIn] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsFadingIn(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsFadingIn(true);
      }, fadeSpeed);
    }, fadeSpeed);

    return () => clearTimeout(timeoutId);
  }, [index, phrases, fadeSpeed]);

  const opacity = isFadingIn ? 1 : 0;

  return (
    <span style={{
      opacity,
      transition: `opacity ${fadeSpeed / 2}ms ease-in-out`
    }}>
      {phrases[index]}
    </span>
  );
};

export default TextFade;
