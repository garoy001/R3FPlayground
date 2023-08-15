import { Environment, Html, OrbitControls } from '@react-three/drei';
// import { FramesComponent } from '/assets/components/frames/frames.jsx';
import { LineGroup } from './assets/components/lines/lineGroup';

import { useFrame, useThree } from '@react-three/fiber';
import { Buildings } from './assets/components/models/Buildings/Buildings';
import * as THREE from 'three';
import { HoverCar } from './assets/components/models/hoverCar';

import { EnvModel } from './assets/components/models/envModel';
import { FloorCube } from './assets/components/models/Floor/floorCube';
import { Suspense, useRef } from 'react';

import { FloorGen } from './assets/components/models/floorGen';

import { CubeTower } from './assets/components/models/cubeTower';

import { Corridor } from './assets/components/models/Objects/corridor';
const colorCalc = {
	x: 0.1228405311703682,
	y: 0.30028337240219116,
	z: 0.800000011920929,
};
export const Main = () => {
	const { gl, camera } = useThree();
	const groupRef = useRef();
	let time = 0;
	let check = true;
	let mult = 1;
	useFrame((state, delta, clock) => {
		time += delta * 10;
		// console.log(floorRef);
		gl.autoClear = false;
		gl.clearDepth();
	});

	return (
		<>
			<group></group>
			<OrbitControls />
			<color attach="background" args={['#191920']} />
			<fog attach="fog" args={['#191920', 0, 150]} />
			{/* <fog attach="fog" args={['#', 0, 0]} /> */}
			<group position={[0, -0.5, 0]}>{/* <FramesComponent /> */}</group>
			{/* <Buildings /> */}

			{/* <Environment preset="dawn" /> */}
			{/* <LineGroup /> */}
			{/* <directionalLight castShadow position={[3, 5, 8]} intensity={1.5} /> */}
			{/* <ambientLight intensity={5.5} /> */}

			{/* <Test /> */}
			<Suspense>
				<HoverCar />
				<CubeTower />
				{/* <EnvModel /> */}
				<Corridor />
				<group ref={groupRef}>
					<FloorGen cubeSize={1} overallWidth={50} scale={10} />
				</group>
			</Suspense>
		</>
	);
};
