import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { addEmission } from '../../util/addEmission';
import { color } from 'framer-motion';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';
const bloomVar = 2;

const colorCalc = {
	x: 0.1228405311703682 * bloomVar,
	y: 0.30028337240219116 * bloomVar,
	z: 0.800000011920929 * bloomVar,
};
export function EnvModel(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF('/models/environment.glb');

	const { actions } = useAnimations(animations, group);
	// console.log(actions);
	useEffect(() => {
		Object.values(actions).map((e) => {
			// console.log(e);
			e.play();
		});
		addEmission(materials['Material.015'], 2);
		addEmission(materials['Metal'], 2);
		// console.log(materials);
		materials['Material.015'].emissive.setRGB(
			colorCalc.x,
			colorCalc.y,
			colorCalc.z
		);
		materials['Material.015'].emissiveIntensity = 3;

		materials['Metal'].emissive.setRGB(0, 0, 0);
	});
	const colorVar = new THREE.Color(colorCalc.x, colorCalc.y, colorCalc.z);
	const groupScale = 20;
	return (
		<group ref={group} {...props} dispose={null}>
			<group
				name="SCI-Fi_motion_graphics_loop_animation"
				scale={[groupScale, groupScale, groupScale]}
				position={[0, 70, 0]}
			>
				<RigidBody type="kinematicPosition">
					<mesh
						name="Inner"
						castShadow
						receiveShadow
						geometry={nodes.Inner.geometry}
						material={materials.Metal}
						scale={0.456}
					/>
					<mesh
						name="Center"
						castShadow
						receiveShadow
						geometry={nodes.Center.geometry}
						material={materials['Material.015']}
						scale={0.137}
					/>
					<pointLight intensity={10} color={colorVar} />
					<mesh
						name="Outer"
						castShadow
						receiveShadow
						geometry={nodes.Outer.geometry}
						material={materials.Metal}
					/>
				</RigidBody>

				<mesh
					name="Outer_ring"
					castShadow
					receiveShadow
					geometry={nodes.Outer_ring.geometry}
					material={materials['Material.015']}
					position={[0, -0.043, 0]}
					scale={1.033}
				/>
				<mesh
					name="Outer_ring_2"
					castShadow
					receiveShadow
					geometry={nodes.Outer_ring_2.geometry}
					material={materials['Material.015']}
					position={[0, 0.036, 0]}
					scale={1.033}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/environment.glb');
