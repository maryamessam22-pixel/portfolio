// /* eslint-disable react/no-unknown-property */
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { Canvas, extend, useFrame } from '@react-three/fiber';
// import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
// import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
// import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
// import * as THREE from 'three';

// import cardGLB from '../assets/card.glb';
// import lanyardTexture from '../assets/lanyard.png';
// import './Lanyard.css';

// extend({ MeshLineGeometry, MeshLineMaterial });

// export default function Lanyard({ position = [0, 0, 30], gravity = [0, -40, 0], fov = 20, transparent = true }) {
//   return (
//     <div className="lanyard-wrapper">
//       <Canvas
//         camera={{ position, fov }}
//         gl={{ alpha: transparent }}
//         onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
//       >
//         <ambientLight intensity={Math.PI} />
//         <Physics gravity={gravity} timeStep={1 / 60}>
//           <Band />
//         </Physics>
//         <Environment blur={0.75}>
//           <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
//           <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
//           <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
//           <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
//         </Environment>
//       </Canvas>
//     </div>
//   );
// }

// function Band({ maxSpeed = 50, minSpeed = 0 }) {
//   const band = useRef();
//   const fixed = useRef();
//   const j1 = useRef();
//   const j2 = useRef();
//   const j3 = useRef();
//   const card = useRef();

//   const vec = new THREE.Vector3();
//   const dir = new THREE.Vector3();
//   const ang = new THREE.Vector3();
//   const rot = new THREE.Vector3();

//   const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };

//   const { nodes, materials } = useGLTF(cardGLB);
//   const texture = useTexture(lanyardTexture);

//   const [curve] = useState(() =>
//     new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
//   );
//   const [dragged, setDragged] = useState(false);
//   const [hovered, setHovered] = useState(false);
//   const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024);

//   useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
//   useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.5, 0]]);

//   useEffect(() => {
//     const handleResize = () => setIsSmall(window.innerWidth < 1024);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     if (hovered) document.body.style.cursor = dragged ? 'grabbing' : 'grab';
//     else document.body.style.cursor = 'auto';
//   }, [hovered, dragged]);

//   useFrame((state, delta) => {
//     if (dragged && card.current) {
//       vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
//       dir.copy(vec).sub(state.camera.position).normalize();
//       vec.add(dir.multiplyScalar(state.camera.position.length()));
//       card.current.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
//     }

//     if (fixed.current && band.current) {
//       [j1, j2].forEach(ref => {
//         if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
//         ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + 1)); // simplified
//       });

//       curve.points[0].copy(j3.current.translation());
//       curve.points[1].copy(j2.current.lerped);
//       curve.points[2].copy(j1.current.lerped);
//       curve.points[3].copy(fixed.current.translation());
//       if (band.current.geometry.setPoints) band.current.geometry.setPoints(curve.getPoints(32));
//     }
//   });

//   curve.curveType = 'chordal';
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

//   return (
//     <>
//       <group position={[0, 4, 0]}>
//         <RigidBody ref={fixed} {...segmentProps} type="fixed" />
//         <RigidBody ref={j1} {...segmentProps} position={[0.5, 0, 0]}>
//           <BallCollider args={[0.1]} />
//         </RigidBody>
//         <RigidBody ref={j2} {...segmentProps} position={[1, 0, 0]}>
//           <BallCollider args={[0.1]} />
//         </RigidBody>
//         <RigidBody ref={j3} {...segmentProps} position={[1.5, 0, 0]}>
//           <BallCollider args={[0.1]} />
//         </RigidBody>
//         <RigidBody ref={card} {...segmentProps} position={[2, 0, 0]} type={dragged ? 'kinematicPosition' : 'dynamic'}>
//           <CuboidCollider args={[0.8, 1.125, 0.01]} />
//           <group
//             scale={2.25}
//             position={[0, -1.2, -0.05]}
//             onPointerOver={() => setHovered(true)}
//             onPointerOut={() => setHovered(false)}
//             onPointerDown={e => setDragged(new THREE.Vector3().copy(e.point))}
//             onPointerUp={() => setDragged(false)}
//           >
//             {nodes.card && <mesh geometry={nodes.card.geometry} material={materials.base} />}
//             {nodes.clip && <mesh geometry={nodes.clip.geometry} material={materials.metal} />}
//             {nodes.clamp && <mesh geometry={nodes.clamp.geometry} material={materials.metal} />}
//           </group>
//         </RigidBody>
//       </group>
//       <mesh ref={band}>
//         <meshLineGeometry />
//         <meshLineMaterial
//           color="white"
//           depthTest={false}
//           resolution={isSmall ? [1000, 2000] : [1000, 1000]}
//           useMap
//           map={texture}
//           repeat={[-4, 1]}
//           lineWidth={1}
//         />
//       </mesh>
//     </>
//   );
// }
