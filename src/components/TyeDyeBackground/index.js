// this version is pretty good
// import React, { useEffect, useRef } from "react";
// import "./NorthernLightsBackground.css";

// const NorthernLightsBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     let hue = 0;
//     let frameCount = 0;
//     // let time = 0;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       const centerX = canvas.width / 2;
//       const centerY = canvas.height / 2;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const gradient = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, canvas.width);

//       gradient.addColorStop(0, `hsla(${hue},100%,50%,0.2)`);
//       gradient.addColorStop(1, `hsla(${hue + 70},100%,50%,0.1)`);

//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       frameCount++;
//       // time += 0.1;
//       hue = frameCount % 360;

//       animationFrameId = window.requestAnimationFrame(draw);
//     };

//     draw();

//     return () => {
//       window.cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div className="northern-lights-background">
//       <canvas ref={canvasRef} />
//     </div>
//   );
// };

// export default NorthernLightsBackground;


// import React, { useEffect, useRef } from "react";
// import "./NorthernLightsBackground.css";

// const NorthernLightsBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     let hue = 0;
//     let frameCount = 0;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       const centerX = canvas.width / 2;
//       const centerY = canvas.height / 2;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const gradient = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, canvas.width);

//       gradient.addColorStop(0, `hsla(${hue},100%,50%,1)`);
//       gradient.addColorStop(1, `hsla(${hue + 120},100%,50%,1)`);

//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       frameCount++;
//       hue = frameCount % 360;

//       animationFrameId = window.requestAnimationFrame(draw);
//     };

//     draw();

//     return () => {
//       window.cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div className="northern-lights-background">
//       <canvas ref={canvasRef} />
//     </div>
//   );
// };

// export default NorthernLightsBackground;






import React, { useEffect, useRef } from "react";
import "./TyeDyeBackground.css";

const TyeDyeBackground = () => {
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

      gradient.addColorStop(0, `hsla(${hue},100%,50%,1)`);
      gradient.addColorStop(0.5, `hsla(${hue + 100},100%,50%,1)`);
      gradient.addColorStop(1, `hsla(${hue + 200},100%,50%,1)`);

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

export default TyeDyeBackground;










// this version was circular. looks like an eye.
// import React, { useEffect, useRef } from "react";
// import "./NorthernLightsBackground.css";

// const NorthernLightsBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     let hue = 0;
//     let frameCount = 0;
//     let time = 0;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       const centerX = canvas.width / 2;
//       const centerY = canvas.height / 2;
//       const radius = Math.min(canvas.width, canvas.height) * 0.7;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.3, centerX, centerY, radius);
//       gradient.addColorStop(0, `hsla(${hue},90%,60%,0.5)`);
//       gradient.addColorStop(0.3, `hsla(${hue + 60},80%,70%,0.8)`);
//       gradient.addColorStop(0.7, `hsla(${hue + 120},80%,70%,0.8)`);
//       gradient.addColorStop(1, `hsla(${hue + 180},90%,60%,0.5)`);

//       ctx.beginPath();
//       ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
//       ctx.fillStyle = gradient;
//       ctx.shadowColor = `hsla(${hue}, 90%, 60%, 0.5)`;
//       ctx.shadowBlur = 50;
//       ctx.fill();

//       frameCount++;
//       time += 0.1;
//       hue = (frameCount % 360) * 2;

//       animationFrameId = window.requestAnimationFrame(draw);
//     };

//     draw();

//     return () => {
//       window.cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div className="northern-lights-background">
//       <canvas ref={canvasRef} />
//     </div>
//   );
// };

// export default NorthernLightsBackground;










