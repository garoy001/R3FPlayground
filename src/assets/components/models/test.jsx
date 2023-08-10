import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Test(props) {
	const { nodes, materials } = useGLTF('/models/test.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder.geometry}
				material={materials['Procedural Animated Plasma']}
				position={[-0.935, 2.65, -1.136]}
				rotation={[-1.658, 0, -Math.PI]}
				scale={[-0.165, -4.754, -0.187]}
			/>
		</group>
	);
}

useGLTF.preload('/test.glb');
