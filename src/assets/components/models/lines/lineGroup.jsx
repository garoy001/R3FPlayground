import { Line1 } from '/assets/components/lines/lines.jsx';
export const LineGroup = () => {
	return (
		<>
			<group position={[2.5, 0, 0]}>
				{' '}
				<Line1 position={[-10, 0, 10]} scale={[2, 0, 1]} />
				<Line1
					position={[0, 0, 0]}
					scale={[2, 0, 1]}
					rotation={[0, Math.PI, 0]}
				/>
				<Line1 position={[10, 0, -10]} scale={[2, 0, 2]} />
				<Line1
					position={[12, 0, -10]}
					scale={[2, 0, 1]}
					rotation={[0, Math.PI, 0]}
				/>
				<Line1 position={[-18, 0, -20]} scale={[2, 0, 3]} />
				<Line1
					position={[-10, 0, -19.5]}
					scale={[2, 0, 1]}
					rotation={[0, Math.PI, 0]}
				/>
			</group>
		</>
	);
};
