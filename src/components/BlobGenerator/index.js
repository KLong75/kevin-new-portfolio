// import React, { useRef, useEffect } from 'react';
// import styled from 'styled-components';

// const BlobBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden; /* hide overflowing blobs */
// `;

// const Blob = styled.div`
//   position: absolute;
//   border-radius: 50%;
//   transform: translate(-50%, -50%);
// `;

// const BlobContainer = styled.div`
//   position: absolute;
//   display: flex;
//   flex-wrap: wrap; /* allow multiple rows of blobs */
// `;

// const getRandomColor = () => {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// };

// const BlobGenerator = () => {
//   const blobContainerRef = useRef(null);

//   useEffect(() => {
//     const container = blobContainerRef.current;
//     const numBlobs = 20;

//     for (let i = 0; i < numBlobs; i++) {
//       const blob = document.createElement('div');
//       blob.classList.add('blob');
//       container.appendChild(blob);

//       const x = Math.random() * container.offsetWidth;
//       const y = Math.random() * container.offsetHeight;
//       const size = Math.random() * 200 + 100;
//       const color = getRandomColor();

//       blob.style.width = `${size}px`;
//       blob.style.height = `${size}px`;
//       blob.style.background = color;
//       blob.style.left = `${x}px`;
//       blob.style.top = `${y}px`;

//       const animationDuration = Math.random() * 5 + 5;

//       blob.animate(
//         [
//           {
//             transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(1)`,
//             opacity: 1,
//           },
//           {
//             transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(0.5)`,
//             opacity: 0.5,
//           },
//           {
//             transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(1)`,
//             opacity: 1,
//           },
//         ],
//         {
//           duration: animationDuration * 1000,
//           iterations: Infinity,
//           easing: 'ease-in-out',
//           direction: 'alternate',
//         }
//       );
//     }
//   }, []);

//   return (
//     <BlobBackground>
//       <BlobContainer ref={blobContainerRef} />
//     </BlobBackground>
//   );
// };

// export default BlobGenerator;




