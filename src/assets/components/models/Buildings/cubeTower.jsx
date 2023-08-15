import { Float, useGLTF, useTexture } from '@react-three/drei';
import { useMemo } from 'react';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';
const colorCalc = {
	x: 0.1228405311703682 * 2,
	y: 0.30028337240219116 * 2,
	z: 0.800000011920929 * 2,
};
const colorVar = new THREE.Color(colorCalc.x, colorCalc.y, colorCalc.z);
export const CubeTower = () => {
	const { nodes, materials } = useGLTF('/models/cubeTower.glb');
	const texture = useTexture('/circuitScaledDown2.png');

	const meshes = useMemo(() => {
		const geo = nodes.Cube007.geometry;
		const material = new THREE.MeshStandardMaterial();
		const randomX = (material.color = new THREE.Color('#000000'));
		material.metalness = 0.5;
		material.roughness = 0.5;
		material.emissiveMap = texture;
		material.emissive = colorVar;

		material.emissiveIntensity = 1.5;
		const meshes = [
			// <mesh
			// 	castShadow
			// 	receiveShadow
			// 	geometry={nodes.Cube007.geometry}
			// 	material={material}
			// />,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube005.geometry}
				material={material}
				position={[0, 5.86, 0]}
				rotation={[0, 0.779, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube002.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube009.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube012.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube013.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube014.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube020.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube021.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube022.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube023.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube024.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube025.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube026.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube027.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube028.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube029.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube030.geometry}
				material={material}
				position={[0.017, 1.955, -0.239]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube031.geometry}
				material={material}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube032.geometry}
				material={material}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube033.geometry}
				material={material}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube034.geometry}
				material={material}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube035.geometry}
				material={material}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube036.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube037.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube038.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube039.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube040.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube041.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube042.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube043.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube044.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube045.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube046.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube047.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube048.geometry}
				material={material}
				position={[0.017, 9.211, -0.239]}
				rotation={[0, 0.262, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube049.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube050.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube051.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube052.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube053.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube054.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube055.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube056.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube057.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube058.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube059.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube060.geometry}
				material={material}
				position={[0.017, 16.467, -0.239]}
				rotation={[0, 0.611, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube061.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube062.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube063.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube064.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube065.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube066.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube067.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube068.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube069.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube070.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube071.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube072.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube073.geometry}
				material={material}
				position={[0.017, 23.723, -0.239]}
				rotation={[0, 0.873, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube074.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube075.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube076.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube077.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube078.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube079.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube080.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube081.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube082.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube083.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube084.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube085.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube086.geometry}
				material={material}
				position={[0.017, 30.979, -0.239]}
				rotation={[0, 1.222, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube087.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube088.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube089.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube090.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube091.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube092.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube093.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube094.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube095.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube096.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube097.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube098.geometry}
				material={material}
				position={[0.017, 38.235, -0.239]}
				rotation={[-Math.PI, 1.134, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube099.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube100.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube101.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube102.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube103.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube104.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube105.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube106.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube107.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube108.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube109.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube110.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube111.geometry}
				material={material}
				position={[0.017, 45.49, -0.239]}
				rotation={[0, -1.484, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube112.geometry}
				material={material}
				position={[0, 11.468, 0]}
				rotation={[0, 1.558, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube113.geometry}
				material={material}
				position={[0, 11.468, 0]}
				rotation={[0, 1.558, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube114.geometry}
				material={material}
				position={[0, 11.468, 0]}
				rotation={[0, 1.558, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube115.geometry}
				material={material}
				position={[0, 11.468, 0]}
				rotation={[0, 1.558, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube116.geometry}
				material={material}
				position={[0, 11.468, 0]}
				rotation={[0, 1.558, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube117.geometry}
				material={material}
				position={[0, 17.21, 0]}
				rotation={[-Math.PI, 0.805, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube118.geometry}
				material={material}
				position={[0, 17.21, 0]}
				rotation={[-Math.PI, 0.805, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube119.geometry}
				material={material}
				position={[0, 17.21, 0]}
				rotation={[-Math.PI, 0.805, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube120.geometry}
				material={material}
				position={[0, 17.21, 0]}
				rotation={[-Math.PI, 0.805, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube121.geometry}
				material={material}
				position={[0, 17.21, 0]}
				rotation={[-Math.PI, 0.805, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube122.geometry}
				material={material}
				position={[0, 22.865, 0]}
				rotation={[-Math.PI, 0.027, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube123.geometry}
				material={material}
				position={[0, 22.865, 0]}
				rotation={[-Math.PI, 0.027, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube124.geometry}
				material={material}
				position={[0, 22.865, 0]}
				rotation={[-Math.PI, 0.027, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube125.geometry}
				material={material}
				position={[0, 22.865, 0]}
				rotation={[-Math.PI, 0.027, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube126.geometry}
				material={material}
				position={[0, 22.865, 0]}
				rotation={[-Math.PI, 0.027, -Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube127.geometry}
				material={material}
				position={[0, 28.568, 0]}
				rotation={[Math.PI, -0.752, Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube128.geometry}
				material={material}
				position={[0, 28.568, 0]}
				rotation={[Math.PI, -0.752, Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube129.geometry}
				material={material}
				position={[0, 28.568, 0]}
				rotation={[Math.PI, -0.752, Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube130.geometry}
				material={material}
				position={[0, 28.568, 0]}
				rotation={[Math.PI, -0.752, Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube131.geometry}
				material={material}
				position={[0, 28.568, 0]}
				rotation={[Math.PI, -0.752, Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube132.geometry}
				material={material}
				position={[0, 34.325, 0]}
				rotation={[Math.PI, -1.531, Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube133.geometry}
				material={material}
				position={[0, 34.325, 0]}
				rotation={[Math.PI, -1.531, Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube134.geometry}
				material={material}
				position={[0, 34.325, 0]}
				rotation={[Math.PI, -1.531, Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube135.geometry}
				material={material}
				position={[0, 34.325, 0]}
				rotation={[Math.PI, -1.531, Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube136.geometry}
				material={material}
				position={[0, 34.325, 0]}
				rotation={[Math.PI, -1.531, Math.PI]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube137.geometry}
				material={material}
				position={[0, 40.143, 0]}
				rotation={[0, -0.832, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube138.geometry}
				material={material}
				position={[0, 40.143, 0]}
				rotation={[0, -0.832, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube139.geometry}
				material={material}
				position={[0, 40.143, 0]}
				rotation={[0, -0.832, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube140.geometry}
				material={material}
				position={[0, 40.143, 0]}
				rotation={[0, -0.832, 0]}
			/>,
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube141.geometry}
				material={material}
				position={[0, 40.143, 0]}
				rotation={[0, -0.832, 0]}
			/>,
		];
		return meshes;
	}, []);
	return (
		<group dispose={null} name="cubeTower">
			{meshes.map((e, k) => {
				return (
					<Float rotationIntensity={4} floatIntensity={20}>
						<group scale={2} position={[0, 4, 0]}>
							{e}
						</group>
					</Float>
				);
			})}
		</group>
	);
};
