import { Float, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Outline, Select } from '@react-three/postprocessing';
import { color } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Line1 } from '../../lines/lines';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
const colorCalc = {
	x: 0.1228405311703682 * 4,
	y: 0.30028337240219116 * 4,
	z: 0.800000011920929 * 4,
};
let colorVar = new THREE.Color(colorCalc.x, colorCalc.y, colorCalc.z);

export const FloorCube = ({ position, size, scale }) => {
	// console.log(materials);
	const texture = useTexture('/circuitScaledDown.png');
	const { nodes, materials } = useGLTF('/models/cubeTower.glb');
	const geo = nodes.Cube007.geometry;
	const outlineRef = useRef();
	const floatRef = useRef();
	const cubeParams = {
		scale: scale,
		size: size,
	};
	const lineRef = useRef();
	// console.log(materials);
	const boxStorage = useMemo(() => {
		const returnBox = {};
		returnBox.geo = new THREE.BoxGeometry(
			cubeParams.size,
			cubeParams.size,
			cubeParams.size
		);
		returnBox.wireGeo = new THREE.EdgesGeometry(returnBox.geo);
		returnBox.wireMaterial = new THREE.LineBasicMaterial({
			color: 'darkblue',
			linewidth: 50,
			toneMapped: false,
		});
		returnBox.material = new THREE.MeshStandardMaterial();
		returnBox.material.color = new THREE.Color('#000000');
		returnBox.material.metalness = 0.5;
		returnBox.material.roughness = 0.5;
		returnBox.material.emissiveMap = texture;
		returnBox.material.toneMap = false;
		// console.log(returnBox.material);
		returnBox.material.emissiveIntensity = 1.2;

		returnBox.material.toneMapped = false;
		returnBox.wireframe = new THREE.MeshBasicMaterial();
		returnBox.wireframe.wireframe = true;
		returnBox.wireframe.wireframeLinewidth = 5;
		returnBox.wireframe.color.setRGB(colorCalc.x, colorCalc.y, colorCalc.z);
		returnBox.wireframe.toneMapped = false;

		return returnBox;
	}, []);
	const newRand = Math.random() / 2;
	// colorVar = new THREE.Color(
	// 	colorCalc.x * newRand,
	// 	colorCalc.y * newRand,
	// 	colorCalc.z * newRand,
	// 	0.5
	// );
	boxStorage.material.emissive = colorVar;
	boxStorage.material.emissiveIntensity = newRand + 0.5;
	// boxStorage.material.alpha = newRand;

	return (
		<>
			<RigidBody type="kinematicPosition">
				<Float rotationIntensity={0} ref={floatRef} floatIntensity={10}>
					<mesh
						scale={cubeParams.scale}
						position={position}
						material={boxStorage.material}
						geometry={boxStorage.geo}
						ref={outlineRef}
						receiveShadow
					></mesh>

					{/* <lineSegments
						scale={cubeParams.scale + 0.1}
						position={position}
						material={boxStorage.wireMaterial}
						geometry={boxStorage.wireGeo}
						ref={lineRef}
					></lineSegments> */}
				</Float>
			</RigidBody>
		</>
	);
};
