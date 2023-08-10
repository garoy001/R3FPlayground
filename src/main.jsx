import { Environment, Html, OrbitControls } from '@react-three/drei';
// import { FramesComponent } from '/assets/components/frames/frames.jsx';
import { LineGroup } from './assets/components/lines/lineGroup';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { useFrame, useThree } from '@react-three/fiber';
import { Buildings } from './assets/components/models/Buildings';
import { Test } from './assets/components/models/test';
import { HoverCar } from './assets/components/models/hoverCar';
import { Instructions } from './assets/components/instructions';

export const Main = () => {
	const { gl, camera } = useThree();
	useFrame(() => {
		gl.autoClear = false;
		gl.clearDepth();
	});
	return (
		<>
			
			<OrbitControls />
			<color attach="background" args={['#191920']} />
			<fog attach="fog" args={['#191920', 0, 55]} />
			{/* <fog attach="fog" args={['#', 0, 0]} /> */}
			<group position={[0, -0.5, 0]}>{/* <FramesComponent /> */}</group>
			<Buildings />
			<Environment preset="city" />
			<LineGroup />
			{/* <directionalLight castShadow position={[3, 5, 8]} intensity={1.5} /> */}
			{/* <ambientLight intensity={5.5} /> */}
			<EffectComposer>
				<Bloom mipmapBlur intensity={1.0} luminanceThreshold={1} />
			</EffectComposer>
			{/* <Test /> */}

			<HoverCar />
		</>
	);
};
