import React, { useEffect, useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { addEmission } from '../../../util/addEmission';
export function Corridor(props) {
	const { nodes, materials } = useGLTF('/models/CORRIDOR2.glb');
	const bakedTexture = useTexture('/maps/CorrBaked.png');
	const ledTexture = useTexture('/maps/ledMap.jpg');
	bakedTexture.flipY = false;
	ledTexture.flipY = false;
	bakedTexture.colorSpace = THREE.SRGBColorSpace;
	const material = new THREE.MeshBasicMaterial({
		map: bakedTexture,
		side: THREE.DoubleSide,
	});
	const color = new THREE.Color(0.25, 0.553, 1);
	const ledMaterial1 = nodes.Scifi_Corridor002.material;
	const ledMaterial2 = nodes.Scifi_Corridor005.material;

	ledMaterial1.color = color;
	ledMaterial1.emissive = color;
	ledMaterial1.emissiveIntensity = 10;
	ledMaterial2.emissiveMap = ledTexture;
	ledMaterial2.color = color;
	ledMaterial2.emissive = color;
	ledMaterial2.emissiveIntensity = 10;
	console.log(ledMaterial1);
	useEffect(() => {
		addEmission(ledMaterial1, 1);
		addEmission(ledMaterial2, 1);
	});
	return (
		<group {...props} dispose={null} position={[0, 30, -50]} scale={3.5}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Scifi_Corridor002.geometry}
				material={ledMaterial1}
				position={[-0.075, 0.125, -1.222]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Scifi_Corridor004.geometry}
				material={material}
				position={[-0.075, 0.125, -1.222]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Scifi_Corridor005.geometry}
				material={ledMaterial2}
				position={[-0.075, 0.125, -1.222]}
			/>
		</group>
	);
}

useGLTF.preload('/CORRIDOR2.glb');
