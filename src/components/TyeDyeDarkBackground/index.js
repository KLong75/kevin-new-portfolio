import React, { useEffect, useRef } from "react";
import "../TyeDyeBackground/TyeDyeBackground.css";

const TyeDyeDarkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let hue = 0;
    let frameCount = 0;
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = 100;
    let velocityX = 0.5;
    let velocityY = 0.5;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      centerX += velocityX;
      centerY += velocityY;
      if (centerX + radius > canvas.width || centerX - radius < 0) {
        velocityX = -velocityX;
      }
      if (centerY + radius > canvas.height || centerY - radius < 0) {
        velocityY = -velocityY;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, canvas.width);

      
      
      gradient.addColorStop(0, `hsla(${hue}, 0%, 0%, 1)`);
     
      gradient.addColorStop(0.5, `hsla(${hue}, 0%, 100%, 1)`);

      gradient.addColorStop(1, `hsla(${hue}, 0%, 50%, 1)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      frameCount++;
      hue = frameCount % 360;

      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="northern-lights-background">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default TyeDyeDarkBackground;
