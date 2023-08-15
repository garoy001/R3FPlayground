import { useFrame } from '@react-three/fiber';

export const CubeBoundary = (vehiclePosition, limits, thickness) => {
	if (vehiclePosition.z < -244) {
		vehiclePosition.z = -244;
	}
	// console.log(vehicleRef.current.matrix);
	if (
		vehiclePosition.z < -45 &&
		vehiclePosition.x < 10.5 &&
		vehiclePosition.x > -10.5 &&
		vehiclePosition.y < 44 &&
		vehiclePosition.y > 28
	) {
		//Tube Collision
		if (vehiclePosition.x > 9 && vehiclePosition.x < 10) {
			vehiclePosition.x = 9;
		}
		if (vehiclePosition.x < -9 && vehiclePosition.x > -10) {
			console.log(true);
			vehiclePosition.x = -9;
		}
		if (vehiclePosition.y < 31 && vehiclePosition.y > 30) {
			vehiclePosition.y = 31;
		}
		if (vehiclePosition.y > 40 && vehiclePosition.y < 41) {
			vehiclePosition.y = 40;
		}
	} else {
		if (vehiclePosition.y < 3) {
			vehiclePosition.y = 3;
		}
		//Tube Collision
		if (vehiclePosition.z < -45) {
			if (
				vehiclePosition.x < 17 &&
				vehiclePosition.x > 16 &&
				vehiclePosition.y < 44 &&
				vehiclePosition.y > 27
			) {
				vehiclePosition.x = 17;
			}
			if (
				vehiclePosition.x > -17 &&
				vehiclePosition.x < -16 &&
				vehiclePosition.y < 44 &&
				vehiclePosition.y > 27
			) {
				vehiclePosition.x = -17;
			}
			if (
				vehiclePosition.y < 28 &&
				vehiclePosition.y > 27 &&
				vehiclePosition.x < 18 &&
				vehiclePosition.x > -16
			) {
				vehiclePosition.y = 27;
			}
			if (
				vehiclePosition.y < 46 &&
				vehiclePosition.y > 45 &&
				vehiclePosition.x < 18 &&
				vehiclePosition.x > -16
			) {
				vehiclePosition.y = 46;
			}
		}
	}
};
