import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { addEmission } from '../../util/addEmission';
export function SciFiShop(props) {
	const { nodes, materials } = useGLTF('/models/sciFiShop.glb');
	const redLightRef = useRef();
	const redLightRef2 = useRef();
	const emissiveRef = useRef();
	useThree(() => {});
	useEffect(() => {
		// console.log(emissiveRef.current.material);
		const emissiveColor = emissiveRef.current.material;
		addEmission(emissiveColor, 0.5);
		const redLightColor = redLightRef.current.material;
		addEmission(redLightColor, 2);
		const redLightColor2 = redLightRef2.current.material;
		addEmission(redLightColor2, 2);
	});
	useFrame(() => {
		// console.log(materials);
	});
	return (
		<group {...props} dispose={null}>
			<group position={[-0.075, 0.125, -1.222]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001.geometry}
					material={materials.Body}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_1.geometry}
					material={materials.mahvare}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_2.geometry}
					material={materials.Body2}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_3.geometry}
					material={materials.frame}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_4.geometry}
					material={materials.metal}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_5.geometry}
					material={materials['emmisive kaf']}
					ref={emissiveRef}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_6.geometry}
					material={materials.metal2}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_7.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_8.geometry}
					material={materials['red light']}
					ref={redLightRef}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_9.geometry}
					material={materials.plastic2}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_10.geometry}
					material={materials['red light2']}
					ref={redLightRef2}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_11.geometry}
					material={materials.Body3}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_12.geometry}
					material={materials['mahvare.001']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_13.geometry}
					material={materials['noor navari']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_14.geometry}
					material={materials.glass}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_Cube001_15.geometry}
					material={materials.plastic}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/sciFiShop.glb');
