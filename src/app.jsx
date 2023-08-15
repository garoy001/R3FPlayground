import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Main } from './main';
import { KeyboardControls } from '@react-three/drei';

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
					gl={{
						antialias: true,

						autoClear: false,
						depth: true,
					}}
				>
					<Main />
				</Canvas>
			</KeyboardControls>
		</>
	);
}

export default App;
