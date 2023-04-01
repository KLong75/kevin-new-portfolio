// import React, { useState } from 'react';
// import { Canvas } from '@react-three/fiber'
// import { useSpring, a } from '@react-spring/three';
// import * as THREE from 'three';

// const ShadedSphere = ({ hovered, setHover }) => {
//   const [active, setActive] = useState(false);
//   const [color, setColor] = useState('hotpink');

//   const props = useSpring({
//     color: active ? 'white' : 'hotpink',
//     scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
//   });

//   return (
//     <a.mesh
//       onPointerOver={() => setHover(true)}
//       onPointerOut={() => setHover(false)}
//       onClick={() => setActive(!active)}
//       scale={props.scale}
//     >
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshStandardMaterial color={props.color} />
//     </a.mesh>
//   );
// };

// const Sphere = () => {
//   const [hovered, setHover] = useState(false);

//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <ShadedSphere hovered={hovered} setHover={setHover} />
//     </Canvas>
//   );
// };

// export default Sphere;


// import React, { useState } from 'react';
// import { Canvas } from '@react-three/fiber'
// import { useSpring, a } from '@react-spring/three';
// import * as THREE from 'three';

// const ShadedSphere = ({ hovered, setHover }) => {
//   const [active, setActive] = useState(false);
//   const [color, setColor] = useState('hotpink');

//   const props = useSpring({
//     color: active ? 'white' : 'hotpink',
//     scale: active ? [3, 3, 3] : [2, 2, 2],
//   });

//   const handleClick = () => {
//     setColor(color === 'hotpink' ? 'green' : 'hotpink');
//     setActive(!active);
//   };

//   return (
//     <a.mesh
//       onPointerOver={() => setHover(true)}
//       onPointerOut={() => setHover(false)}
//       onClick={handleClick}
//       scale={props.scale}
//     >
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshStandardMaterial color={color} />
//     </a.mesh>
//   );
// };

// const Sphere = () => {
//   const [hovered, setHover] = useState(false);

//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <ShadedSphere hovered={hovered} setHover={setHover} />
//     </Canvas>
//   );
// };

// export default Sphere;

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';

const ShadedSphere = ({ hovered, setHover }) => {
  const props = useSpring({
    color: hovered ? 'grey' : 'lightblue',
    scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });

  return (
    <a.mesh
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={props.scale}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <a.meshStandardMaterial color={props.color} />
    </a.mesh>
  );
};

const Sphere = () => {
  const [hovered, setHover] = React.useState(false);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ShadedSphere hovered={hovered} setHover={setHover} />
    </Canvas>
  );
};

export default Sphere;





