import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Main } from './main';
import { KeyboardControls } from '@react-three/drei';
import { Instructions } from './assets/components/instructions';

function App() {
	return (
		<>
			<KeyboardControls
				map={[
					{ name: 'forward', keys: ['ArrowUp', 'KeyW'] },
					{ name: 'backward', keys: ['ArrowDown', 'KeyS'] },
					{ name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
					{ name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
					{ name: 'up', keys: ['Space'] },
					{ name: 'down', keys: ['ShiftLeft'] },
				]}
			>
				<Canvas
					dpr={[1, 1.5]}
					camera={{
						fov: 70,
						position: [5, 7, 15],
					}}
				>
					<Main />
				</Canvas>
		
			</KeyboardControls>
		</>
	);
}

export default App;
