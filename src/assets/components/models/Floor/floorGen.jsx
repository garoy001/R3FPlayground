import { useMemo } from 'react';
import { FloorCube } from './floorCube';
import {
	EffectComposer,
	Outline,
	Selection,
	Select,
	Bloom,
} from '@react-three/postprocessing';
import * as THREE from 'three';
import { BlendFunction, KernelSize } from 'postprocessing';
export const FloorGen = ({ cubeSize, overallWidth, scale }) => {
	const cubeMap = useMemo(() => {
		return genCubeMap(cubeSize, overallWidth, scale);
	}, []);
	// console.log(cubeMap)
	return (
		<>
			<group name="FloorCubeFloor">
				<Selection>
					<EffectComposer autoClear={false}>
						<Bloom mipmapBlur Bloom intensity={1} luminanceThreshold={0.5} />
					</EffectComposer>
					{/* <Select enabled> */}
					{cubeMap.map((e, k) => {
						// console.log(e);
						return (
							<FloorCube position={e} size={cubeSize} scale={scale} key={k} />
						);
					})}
					{/* </Select> */}
				</Selection>
			</group>
		</>
	);
};

const genCubeMap = (cubeSize, overallWidth, scale) => {
	cubeSize = cubeSize * scale;
	overallWidth *= scale / 2;
	const startPositionX = -overallWidth / 2;
	const startPositionY = overallWidth / 2;
	// console.log(cubeSize);
	// console.log(overallWidth)
	const cubeTotalX = overallWidth / cubeSize;
	const cubeTotalY = overallWidth / cubeSize;
	// console.log(cubeTotalX);
	const cubeTotal = cubeTotalX * cubeTotalY;
	const offset = cubeSize + 0.5;
	// console.log(offset);
	const cubeMap = [];
	for (let i = startPositionY; i > -startPositionY; i -= offset) {
		for (let j = startPositionX; j < startPositionX * -1; j += offset) {
			const y = (Math.random() - 0.5) * 2;
			cubeMap.push([j, -0.2 - cubeSize / 2, i]);
		}
	}

	return cubeMap;
};
