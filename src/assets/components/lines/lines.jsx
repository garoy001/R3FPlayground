import { useFrame, useThree } from '@react-three/fiber';
import { SelectiveBloom } from '@react-three/postprocessing';
import { color } from 'framer-motion';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const lineScale = [2, 0, 2];
const circleScale = [0.15, 0, 0.15];
const bloomVar = 7;
// const colorCalc = {
// 	x: 0.99 * bloomVar,
// 	y: 0.71 * bloomVar,
// 	z: 0.42 * bloomVar,
// };
const colorCalc = {
	x: 0.1228405311703682 * bloomVar,
	y: 0.30028337240219116 * bloomVar,
	z: 0.800000011920929 * bloomVar,
};
const colorVar = new THREE.Color(colorCalc.x, colorCalc.y, colorCalc.z);
export const Circle = ({ position, scale }) => {
	const lineBloomRef = useRef();
	const segmentCount = 32;
	const radius = 1;
	const material = new THREE.LineBasicMaterial({
		color: colorVar,
	});
	const geoPoints = [];
	for (var i = 0; i <= segmentCount; i++) {
		var theta = (i / segmentCount) * Math.PI * 2;
		geoPoints.push(
			new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius)
		);
	}
	const geometry = new THREE.BufferGeometry().setFromPoints(geoPoints);
	// useFrame(() => {
	// 	// console.log(lineBloomRef);
	// });
	return (
		<>
			<line
				geometry={geometry}
				// material={material}
				scale={scale ? scale : circleScale}
				position={position}
				ref={lineBloomRef}
			>
				{' '}
				<lineBasicMaterial toneMapped={false} color={colorVar} />
			</line>
		</>
	);
};

export const Line1 = ({ position, scale, rotation }) => {
	const circleRef = useRef();
	const lineRef = useRef();
	const cirR = scale[0] * circleScale[0];
	const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
	const points = useMemo(() => {
		const points = {};
		const points1 = [];
		const points2 = [];
		const points3 = [];

		//////////////POINT GROUP 1
		// Starting Points
		points1.push(new THREE.Vector3(0, 0, 0));
		points1.push(new THREE.Vector3(0, 0, -2));
		// Left Fork
		points1.push(new THREE.Vector3(-0.5, 0, -3));
		points1.push(new THREE.Vector3(-0.5, 0, -4));
		// Reset
		points1.push(new THREE.Vector3(-0.5, 0, -3));
		points1.push(new THREE.Vector3(0, 0, -2));
		// Right Fork
		points1.push(new THREE.Vector3(0.5, 0, -3));
		points1.push(new THREE.Vector3(0.5, 0, -6));
		//Reset
		points1.push(new THREE.Vector3(0.5, 0, -3));
		points1.push(new THREE.Vector3(0, 0, -2));
		//Stalk Fork 1
		points1.push(new THREE.Vector3(0, 0, -1.5));
		points1.push(new THREE.Vector3(-0.5, 0, -2.5));
		points1.push(new THREE.Vector3(-0.75, 0, -3));
		//Reset
		points1.push(new THREE.Vector3(-0.5, 0, -2.5));
		points1.push(new THREE.Vector3(0, 0, -1.5));
		points1.push(new THREE.Vector3(0, 0, -1));
		//Stalk Fork 2
		points1.push(new THREE.Vector3(-0.5, 0, -2));
		points1.push(new THREE.Vector3(-0.75, 0, -2.5));

		//////////////POINT GROUP 2
		// Starting Points
		points2.push(new THREE.Vector3(0, 0, 0));
		points2.push(new THREE.Vector3(0, 0, -2));
		// Right Fork
		points2.push(new THREE.Vector3(0.5, 0, -3));
		points2.push(new THREE.Vector3(0.5, 0, -10));

		//////////////POINT GROUP 3
		// Starting Points
		points3.push(new THREE.Vector3(0, 0, 0));
		points3.push(new THREE.Vector3(0, 0, -2));
		// Right Fork
		points3.push(new THREE.Vector3(0.5, 0, -3));
		points3.push(new THREE.Vector3(0.5, 0, -10));
		// Branch Group 1
		points3.push(new THREE.Vector3(1, 0, -11));
		//Reset
		points3.push(new THREE.Vector3(0.5, 0, -10));
		// Branch Group 2
		points3.push(new THREE.Vector3(0.5, 0, -11));
		points3.push(new THREE.Vector3(1.25, 0, -12.5));
		//Reset
		points3.push(new THREE.Vector3(0.5, 0, -11));
		//Branch Group 3
		points3.push(new THREE.Vector3(0.5, 0, -12.5));
		points3.push(new THREE.Vector3(1, 0, -13.5));
		points3.push(new THREE.Vector3(1, 0, -14.5));
		points3.push(new THREE.Vector3(1, 0, -13.5));
		points3.push(new THREE.Vector3(0.5, 0, -12.5));
		points3.push(new THREE.Vector3(0, 0, -13.5));
		points3.push(new THREE.Vector3(0, 0, -14.5));

		points.points1 = points1;
		points.points2 = points2;
		points.points3 = points3;

		return points;
	}, []);
	const geometry1 = new THREE.BufferGeometry().setFromPoints(points.points1);
	const geometry2 = new THREE.BufferGeometry().setFromPoints(points.points2);
	const geometry3 = new THREE.BufferGeometry().setFromPoints(points.points3);
	console.log(scale[0]);
	console.log(-0.5 * scale[0] - cirR + 1);

	return (
		<>
			<group position={position} rotation={rotation}>
				{/* <SelectiveBloom
					selection={[lineRef]}
					selectionLayer={10}
					intensity={1.0}
					blurPass={undefined}
					luminanceThreshold={0.9}
					luminanceSmoothing={0.025}
				/> */}
				<group scale={scale} ref={lineRef}>
					<line
						geometry={geometry1}
						// material={material}
						position={[1, 0, 0]}
						scale={lineScale}
						ref={circleRef}
					>
						<lineBasicMaterial toneMapped={false} color={colorVar} />{' '}
					</line>
					<line
						geometry={geometry2}
						// material={material}
						position={[2, 0, 0]}
						scale={lineScale}
					>
						{' '}
						<lineBasicMaterial toneMapped={false} color={colorVar} />{' '}
					</line>
					<line
						geometry={geometry3}
						// material={material}
						position={[3, 0, 0]}
						scale={lineScale}
					>
						{' '}
						<lineBasicMaterial toneMapped={false} color={colorVar} />{' '}
					</line>
				</group>
				<Circle
					position={[
						-0.5 * scale[0] - cirR + scale[0] / 10,
						0,
						-4 * scale[2] - 1 * scale[2] - cirR,
					]}
					scale={[
						circleScale[0] * scale[0],
						circleScale[1] * scale[0],
						circleScale[2] * scale[0],
					]}
				/>
				<Circle
					position={[
						-0.5 * scale[0] - cirR + scale[0] / 10,
						0,
						-5 * scale[2] - 1 * scale[2] - cirR,
					]}
					scale={[
						circleScale[0] * scale[0],
						circleScale[1] * scale[0],
						circleScale[2] * scale[0],
					]}
				/>
				<Circle
					position={[
						0.05 * scale[0] - cirR + scale[0] / 10,
						0,
						-7 * scale[2] - 1 * scale[2] - cirR,
					]}
					scale={[
						circleScale[0] * scale[0],
						circleScale[1] * scale[0],
						circleScale[2] * scale[0],
					]}
				/>
				<Circle
					position={[
						2.05 * scale[0] - cirR + scale[0] / 10,
						0,
						-11 * scale[2] - 1 * scale[2] - cirR,
					]}
					scale={[
						circleScale[0] * scale[0],
						circleScale[1] * scale[0],
						circleScale[2] * scale[0],
					]}
				/>
				<Circle
					position={[
						3.05 * scale[0] - cirR + scale[0] / 10,
						0,
						-19 * scale[2] - 1 * scale[2] - cirR,
					]}
					scale={[
						circleScale[0] * scale[0],
						circleScale[1] * scale[0],
						circleScale[2] * scale[0],
					]}
				/>
				<Circle
					position={[
						3.05 * scale[0] - cirR + scale[0] / 10,
						0,
						-28 * scale[2] - 1 * scale[2] - cirR,
					]}
					scale={[
						circleScale[0] * scale[0],
						circleScale[1] * scale[0],
						circleScale[2] * scale[0],
					]}
				/>
				<Circle
					position={[
						5.05 * scale[0] - cirR + scale[0] / 10,
						0,
						-28 * scale[2] - 1 * scale[2] - cirR,
					]}
					scale={[
						circleScale[0] * scale[0],
						circleScale[1] * scale[0],
						circleScale[2] * scale[0],
					]}
				/>
				<Circle
					position={[
						5.55 * scale[0] - cirR + scale[0] / 10,
						0,
						-24 * scale[2] - 1 * scale[2] - cirR,
					]}
					scale={[
						circleScale[0] * scale[0],
						circleScale[1] * scale[0],
						circleScale[2] * scale[0],
					]}
				/>
				<Circle
					position={[
						5.05 * scale[0] - cirR + scale[0] / 10,
						0,
						-21 * scale[2] - 1 * scale[2] - cirR,
					]}
					scale={[
						circleScale[0] * scale[0],
						circleScale[1] * scale[0],
						circleScale[2] * scale[0],
					]}
				/>
				<Circle
					position={[1.05 * scale[0] - cirR + scale[0] / 10, 0, cirR]}
					scale={[
						circleScale[0] * scale[0],
						circleScale[1] * scale[0],
						circleScale[2] * scale[0],
					]}
				/>
				<Circle
					position={[2.05 * scale[0] - cirR + scale[0] / 10, 0, cirR]}
					scale={[
						circleScale[0] * scale[0],
						circleScale[1] * scale[0],
						circleScale[2] * scale[0],
					]}
				/>
				<Circle
					position={[3.05 * scale[0] - cirR + scale[0] / 10, 0, cirR]}
					scale={[
						circleScale[0] * scale[0],
						circleScale[1] * scale[0],
						circleScale[2] * scale[0],
					]}
				/>
			</group>
		</>
	);
};
