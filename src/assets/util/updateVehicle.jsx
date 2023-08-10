const forces = {
	maxVelocity: 0.4,
	jawVelocity: 0,
	pitchVelocity: 0,
	turnVelocity: 0,
	vehicleSpeed: 0,
	vehicleAcceleration: 0,
	vehicleDeceleration: 0,
	ascDescSpeed: 0,
	maxSpeed: 0.3,
};
const limits = {
	tilt: 0.95,
	rise: 0.5,
};
let isActive = true;
export const updateVehicle = (
	x,
	y,
	z,
	currentPosition,
	camera,
	forward,
	backward,
	leftward,
	rightward,
	up,
	down,
	time
) => {
	window.onfocus = function () {
		isActive = true;
	};
	window.onblur = function () {
		isActive = false;
	};

	// console.log(isActive);
	if (!isActive) {
		forces.jawVelocity = 0;
		forces.turnVelocity = 0;
		forces.vehicleAcceleration = 0;
		forces.vehicleDeceleration = 0;
		forces.ascDescSpeed = 0;
		forces.vehicleSpeed = 0;
	}
	// console.log(leftward);
	if (isActive) {
		if (Math.abs(forces.jawVelocity) > forces.maxVelocity)
			forces.jawVelocity = Math.sign(forces.jawVelocity) * forces.maxVelocity;

		if (Math.abs(forces.pitchVelocity) > forces.maxVelocity)
			forces.pitchVelocity =
				Math.sign(forces.pitchVelocity) * forces.maxVelocity;
		// console.log(time);s
		// console.log(forces.vehicleSpee);

		if (forward) {
			// forces.pitchVelocity += 0.0025;
			forces.vehicleDeceleration = 0;
			if (forces.vehicleSpeed < forces.maxSpeed) {
				forces.vehicleAcceleration = Math.min(
					forces.vehicleAcceleration + 0.00005
				);
				forces.vehicleSpeed = Math.min(
					Math.max(forces.vehicleSpeed + time, 0),
					forces.maxSpeed
				);
			}
		}

		if (backward) {
			forces.vehicleDeceleration = 0;

			// forces.pitchVelocity -= 0.0025;
			if (Math.abs(forces.vehicleSpeed) < forces.maxSpeed) {
				forces.vehicleSpeed = Math.min(
					Math.min(forces.vehicleSpeed - time, 0),
					forces.maxSpeed
				);
			}
		}
		if (!forward && !backward) {
			forces.vehicleDeceleration = Math.min(
				forces.vehicleDeceleration + 0.00035,
				0.1
			);
			if (forces.vehicleSpeed > 0) {
				forces.vehicleSpeed = Math.max(
					forces.vehicleSpeed - forces.vehicleDeceleration,
					0
				);
			}
			if (forces.vehicleSpeed < 0) {
				forces.vehicleSpeed = Math.min(
					forces.vehicleSpeed + forces.vehicleDeceleration,
					0
				);
			}
		}
		if (up) {
			forces.vehicleDeceleration = 0;
			forces.ascDescSpeed;
			if (Math.abs(forces.ascDescSpeed) < forces.maxSpeed) {
				forces.ascDescSpeed = Math.max(
					Math.min(forces.ascDescSpeed + time, 0),
					forces.maxSpeed
				);
			}
		}
		if (down) {
			forces.vehicleDeceleration = 0;
			forces.ascDescSpeed;
			if (Math.abs(forces.ascDescSpeed) < forces.maxSpeed) {
				forces.ascDescSpeed = Math.min(
					Math.min(forces.ascDescSpeed - time, 0),
					forces.maxSpeed
				);
			}
		}
		if (!up && !down) {
			forces.vehicleDeceleration = Math.min(
				forces.vehicleDeceleration + 0.0165,
				0.1
			);
			if (forces.ascDescSpeed > 0) {
				forces.ascDescSpeed = Math.max(
					forces.ascDescSpeed - forces.vehicleDeceleration,
					0
				);
			}
			if (forces.ascDescSpeed < 0) {
				forces.ascDescSpeed = Math.min(
					forces.ascDescSpeed + forces.vehicleDeceleration,
					0
				);
			}
		}
		if (forces.vehicleSpeed == 0) {
			forces.vehicleAcceleration = 0;
			forces.vehicleDeceleration = 0;
		}
		if (rightward) {
			forces.jawVelocity = Math.max(forces.jawVelocity - 0.025, -0.055);
			// forces.turnVelocity = 0.025;
			// if (x.x < limits.tilt && x.y > 0) {
			// 	forces.jawVelocity = 0;
			// }
			// if (forward) {
			// }
		}
		if (leftward) {
			forces.jawVelocity = Math.min(forces.jawVelocity + 0.025, 0.055);
			// forces.turnVelocity = 0.025;
			// if (x.x < limits.tilt && x.y < 0) {
			// 	forces.jawVelocity = 0;
			// }
		}

		if (!leftward && !rightward) {
			forces.jawVelocity = 0;
			// forces.turnVelocity = 0;
			if (forces.jawVelocity > 0) {
				forces.jawVelocity = Math.max(forces.turnVelocity + 0.00001, 0);
				if (x.x != 1 || x.y != 0) {
				}
			}
			if (forces.turnVelocity < 0) {
				forces.turnVelocity = Math.min(forces.turnVelocity + 0.00001, 0);
			}
			if (forces.turnVelocity > 0) {
				forces.turnVelocity = Math.max(forces.turnVelocity + 0.00001, 0);
				if (x.x != 1 || x.y != 0) {
				}
			}
			if (forces.turnVelocity < 0) {
				forces.turnVelocity = Math.min(forces.turnVelocity + 0.00001, 0);
			}
		}
	}

	x.applyAxisAngle(y, forces.jawVelocity);
	z.applyAxisAngle(y, forces.jawVelocity);
	y.applyAxisAngle(x, forces.pitchVelocity);
	z.applyAxisAngle(x, forces.pitchVelocity);

	x.normalize();
	y.normalize();
	z.normalize();
	camera.updateProjectionMatrix();
	currentPosition
		.add(
			z.clone().multiplyScalar(Math.min(forces.vehicleSpeed, forces.maxSpeed))
		)
		.add(
			y.clone().multiplyScalar(Math.min(forces.ascDescSpeed, forces.maxSpeed))
		);
};
