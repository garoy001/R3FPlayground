import { Environment, Html, OrbitControls } from '@react-three/drei';
// import { FramesComponent } from '/assets/components/frames/frames.jsx';

import { useFrame, useThree } from '@react-three/fiber';
import { Buildings } from '/assets/components/models/Buildings/Buildings';
import * as THREE from 'three';
import { HoverCar } from '/assets/components/models/User/hoverCar';
import { SceneLight } from '/assets/components/Lighting/sceneLight';
import { EnvModel } from '/assets/components/models/Buildings/envModel';
import { FloorCube } from '/assets/components/models/Floor/floorCube';
import { Suspense, useRef } from 'react';

import { FloorGen } from '/assets/components/models/Floor/floorGen';

import { CubeTower } from '/assets/components/models/Buildings/cubeTower';
import { Corridor } from '/assets/components/models/Buildings/corridor';

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
		// console.log(state.scene);
	});

	return (
		<>
			{/**Controls//////////////////////*/}
			<OrbitControls />
			{/**Scene//////////////////////*/}
			<color attach="background" args={['#191920']} />
			<fog attach="fog" args={['#191920', 0, 150]} />

			{/**Lighting//////////////////////*/}
			<SceneLight />
			{/**Models//////////////////////*/}
			<Suspense>
				{/* <Buildings /> */}
				<HoverCar />
				<Corridor />
				{/* <CubeTower /> */}
				<EnvModel />
				<group ref={groupRef} name="Floor">
					<FloorGen cubeSize={1} overallWidth={50} scale={10} />
				</group>
			</Suspense>
			<group position={[0, -0.5, 0]}>{/* <FramesComponent /> */}</group>

			{/* <Environment preset="dawn" /> */}
			{/* <LineGroup /> */}

			{/* <Test /> */}
		</>
	);
};
