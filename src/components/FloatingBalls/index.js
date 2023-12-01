
import React, { useState, useEffect } from 'react';

const Ball = ({ x, y, z, size, color }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: color,
        boxShadow: `0 0 ${z}px 5px ${color}33`,
        opacity: '0.3',
        zIndex: '-100'
      }}
    ></div>
  );
};

const FloatingBalls = () => {
  const [balls, setBalls] = useState([]);

  const colorPalette = [
    { primary: 0, secondary: 100, tertiary: 200 },
    { primary: 40, secondary: 140, tertiary: 240 },
    { primary: 80, secondary: 180, tertiary: 280 },
    { primary: 120, secondary: 220, tertiary: 320 },
    { primary: 160, secondary: 260, tertiary: 0 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prevBalls) => {
        const newBalls = [...prevBalls];
        const randomColorIndex = Math.floor(Math.random() * colorPalette.length);
        const randomColor = colorPalette[randomColorIndex];
        newBalls.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          z: Math.floor(Math.random() * 80) + 20,
          size: Math.floor(Math.random() * 80) + 20,
          color: `hsla(${randomColor.primary},100%,50%,1)`
        });
        return newBalls;
      });
    }, 1000);

    return () => clearInterval(interval);
  },);

  const moveBalls = (event) => {
    setBalls((prevBalls) => {
      const newBalls = prevBalls.map((ball) => {
        const dx = (ball.x - event.clientX) * 0.0005;
        const dy = (ball.y - event.clientY) * 0.0005;
        const dz = Math.abs((ball.z - 200) * 0.01);
        return {
          x: ball.x + dx,
          y: ball.y + dy,
          z: ball.z + dz,
          size: ball.size,
          color: ball.color
        };
      });
      return newBalls;
    });
  };

  return (
    <div style={{ position: 'relative', height: '20%' }} onMouseMove={moveBalls}>
      {balls.map((ball, index) => (
        <Ball key={index} x={ball.x} y={ball.y} z={ball.z} size={ball.size} color={ball.color} />
      ))}
    </div>
  );
};

export default FloatingBalls;











// import React, { useState, useEffect } from 'react';

// const Ball = ({ x, y, z, size, color }) => {
//   const [blobSize, setBlobSize] = useState(size);
//   const [blobShape, setBlobShape] = useState(Math.floor(Math.random() * 10) + 1);

//   useEffect(() => {
//     setBlobSize(size);
//     setBlobShape(Math.floor(Math.random() * 10) + 1);
//   }, [size]);

//   return (
//     <div
//       style={{
//         position: 'absolute',
//         top: `${y}px`,
//         left: `${x}px`,
//         width: `${blobSize}px`,
//         height: `${blobSize}px`,
//         background: `radial-gradient(circle at 50% 50%, ${color}, transparent)`,
//         borderRadius: `${blobShape * 10}%`,
//         boxShadow: `0 0 ${z}px 5px ${color}33`
//       }}
//     ></div>
//   );
// };

// const FloatingBalls = () => {
//   const [balls, setBalls] = useState([]);

//   const colorPalette = [
//     { primary: 0, secondary: 100, tertiary: 200 },
//     { primary: 40, secondary: 140, tertiary: 240 },
//     { primary: 80, secondary: 180, tertiary: 280 },
//     { primary: 120, secondary: 220, tertiary: 320 },
//     { primary: 160, secondary: 260, tertiary: 0 }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBalls((prevBalls) => {
//         const newBalls = [...prevBalls];
//         const randomColorIndex = Math.floor(Math.random() * colorPalette.length);
//         const randomColor = colorPalette[randomColorIndex];
//         newBalls.push({
//           x: Math.random() * window.innerWidth,
//           y: Math.random() * window.innerHeight,
//           z: Math.floor(Math.random() * 80) + 20,
//           size: Math.floor(Math.random() * 80) + 20,
//           color: `hsla(${randomColor.primary},100%,50%,1)`
//         });
//         return newBalls;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const moveBalls = (event) => {
//     setBalls((prevBalls) => {
//       const newBalls = prevBalls.map((ball) => {
//         const dx = (ball.x - event.clientX) * 0.0005;
//         const dy = (ball.y - event.clientY) * 0.0005;
//         const dz = Math.abs((ball.z - 200) * 0.01);
//         return {
//           x: ball.x + dx,
//           y: ball.y + dy,
//           z: ball.z + dz,
//           size: Math.floor(Math.random() * 80) + 20,
//           color: ball.color
//         };
//       });
//       return newBalls;
//     });
//   };

//   return (
//     <div style={{ position: 'relative', height: '80vh' }} onMouseMove={moveBalls}>
//       {balls.map((ball, index) => (
//         <Ball key={index} x={ball.x} y={ball.y} z={ball.z} size={ball.size} color={ball.color} />
//       ))}
//     </div>
//   );
// };

// export default FloatingBalls;














