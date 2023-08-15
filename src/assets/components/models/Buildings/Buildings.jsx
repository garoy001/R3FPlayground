import { SciFiShop } from './SciFiShop';
import { SciFiHouse } from './SciFiHouse';

export const Buildings = () => {
	return (
		<>
			<group position={[3, 0, -7]} rotation={[0, -Math.PI / 2, 0]}>
				<SciFiShop />
			</group>
			<group position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
				<SciFiHouse />
			</group>
		</>
	);
};
