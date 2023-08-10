import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { addEmission } from '../../util/addEmission';

export function SciFiHouse(props) {
	const { nodes, materials } = useGLTF('/models/sciFiHouse.glb');
	const redLightRef = useRef();
	const redLightRef2 = useRef();
	const emissiveRef = useRef();

	useEffect(() => {
		addEmission(materials['emissive banafffsh'], 0.25);
		addEmission(materials['red light'], 0.3);
		addEmission(materials['red light2'], 0.3);
		addEmission(materials['emissive banafsh'], 0.3);
		addEmission(materials['emmisive kaf'], 0.25);
		addEmission(materials['noor navari'], 0.25);

		console.log(materials);
	});
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['Sci-Fi_House'].geometry}
				material={materials['1']}
				position={[-0.075, 0.125, -1.222]}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC1_Circle001001.geometry}
					material={materials.metal}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC1_Circle001002.geometry}
					material={materials.metal}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC1_Circle001001_1.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC1_Circle001001001.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC2_Plane010001.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC2_Plane010001001.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC3_Plane021001.geometry}
					material={materials.mahvare}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC3_Plane021001_1.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC4_Cube001001.geometry}
					material={materials.metal}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC4_Cube001002.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC4_Cube001003.geometry}
					material={materials['red light2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC4_Cube001004.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC5_Cube002001.geometry}
					material={materials.mahvare}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC5_Cube002001002.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC5_Cube002003.geometry}
					material={materials.metal2}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC5_Cube002004.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC5_Cube002005.geometry}
					material={materials.metal}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AC6_Cube021001.geometry}
					material={materials.metal}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ACC3003_Cube013002.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ACC4003_Cube018002.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ATM_Plane037002.geometry}
					material={materials.metal}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ATM_Plane037003.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ATM_Plane037004.geometry}
					material={materials['noor navari']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ATM_Plane037005.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ATM_Plane037001001.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ATM_Plane037002_1.geometry}
					material={materials['None.007']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ATM_Plane037003_1.geometry}
					material={materials['None.007']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ATM_Plane037004_1.geometry}
					material={materials['None.007']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Circle.geometry}
					material={materials.metal}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube001_Cube002.geometry}
					material={materials.metal2}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube002_Cube003.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube003_Cube004.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube004_Cube005.geometry}
					material={materials['3']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube005_Cube006.geometry}
					material={materials['1']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube006_Cube007.geometry}
					material={materials['3']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube007_Cube.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube008001.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube010_Cube013.geometry}
					material={materials['3']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube011.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube011001.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube012_Cube015.geometry}
					material={materials['2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube013_Cube016.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube013_Cube016001.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube017_Cube021.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder001002.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002.geometry}
					material={materials['1']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002001.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002002.geometry}
					material={materials['red light2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002003.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002004.geometry}
					material={materials['2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002_Cylinder012.geometry}
					material={materials['2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002_Cylinder012001.geometry}
					material={materials['red light2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002_Cylinder012002.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002_Cylinder012003.geometry}
					material={materials['1']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002_Cylinder012004.geometry}
					material={materials['1']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002_Cylinder012005.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D1_Plane001001.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D1_Plane001001_1.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D1_Plane001003.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D1_Plane001003001.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D1_Plane001003002.geometry}
					material={materials.metal3}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D1_Plane001003003.geometry}
					material={materials['emissive banafsh']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D1_Plane001003004.geometry}
					material={materials['2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D1_Plane001003005.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D1_Plane001003006.geometry}
					material={materials['2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D1_Plane001004.geometry}
					material={materials.metal2}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D2_Plane048001.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D2_Plane048002.geometry}
					material={materials['red light2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D2_Plane048003.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D2_Plane048001_1.geometry}
					material={materials.metal3}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.D2_Plane048001001.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.DK_Plane031004.geometry}
					material={materials.kaf}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.DK_Plane031001.geometry}
					material={materials['2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.DK_Plane031001001.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.DK_Plane031002.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.DK_Plane031003.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.H1_Plane008001.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.H1_Plane008002.geometry}
					material={materials['1']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.H1_Plane008002002.geometry}
					material={materials['glass.001']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.H1_Plane008002003.geometry}
					material={materials['glass.002']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.H1_Plane008002004.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.H1_Plane008002005.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.H2_Cube001.geometry}
					material={materials['1']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.H2_Cube001_1.geometry}
					material={materials['2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.NL002003.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.NL_Plane028004.geometry}
					material={materials['emissive banafffsh']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.P1_Plane004001.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.P1_Plane004002.geometry}
					material={materials.metal1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.P2_Plane006001.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.P2_Plane006001_1.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Pi3002_Pi3012001.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Pi3007_Pi3017001.geometry}
					material={materials.metal}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane002.geometry}
					material={materials.mahvare}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.S1_Plane018003.geometry}
					material={materials.metal2}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.S1_Plane018001.geometry}
					material={materials['red light2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.S1_Plane018002.geometry}
					material={materials['2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.S2_Plane007001.geometry}
					material={materials['noor navari']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.S2_Plane007002.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.S3_Plane017001.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.S3_Plane017001_1.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.S4_Plane002001.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.S4_Plane002002.geometry}
					material={materials['emmisive kaf']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.S4_Plane002003.geometry}
					material={materials['noor navari']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.SC_Cube003001.geometry}
					material={materials['red light2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.SC_Cube003002.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Sphere.geometry}
					material={materials['red light']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Sphere001.geometry}
					material={materials['red light']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Sphere001001.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.T1_Cylinder001.geometry}
					material={materials['5']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.T1_Cylinder002.geometry}
					material={materials['noor navari']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.T1_Cylinder003.geometry}
					material={materials['4']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.W1_Cube007001.geometry}
					material={materials['2']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.W1_Cube007001003.geometry}
					material={materials['glass.001']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.W2_Cube008001.geometry}
					material={materials.metal1}
				/>
			</mesh>
		</group>
	);
}

useGLTF.preload('/sciFiHouse.glb');
