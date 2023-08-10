import React, { useRef } from 'react';
import { useGLTF, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { updateVehicle } from '../../util/updateVehicle';

const delayedRotMatrix = new THREE.Matrix4();
const delayedQuaternion = new THREE.Quaternion();
export function HoverCar(props) {
	const { nodes, materials } = useGLTF('/models/hoverCar.glb');
	const [subscribeKeys, getKeys] = useKeyboardControls();
	const vehicleRef = useRef();
	materials['Hover DMC'].toneMapped = false;
	console.log(nodes['DMC_Sci-Fi_Hover_Car'].position);
	const x = new THREE.Vector3(1, 0, 0);
	const y = new THREE.Vector3(0, 1, 0);
	const z = new THREE.Vector3(0, 0, 1);
	const vehiclePosition = new THREE.Vector3(0, 5, 7);

	useFrame((state, delta) => {
		// console.log(forces);
		const { forward, backward, leftward, rightward, up, down } = getKeys();
		updateVehicle(
			x,
			y,
			z,
			vehiclePosition,
			state.camera,
			forward,
			backward,
			leftward,
			rightward,
			up,
			down,
			delta
		);
		const rotMatrix = new THREE.Matrix4().makeBasis(x, y, z);
		// console.log(rotMatrix);d
		const matrix = new THREE.Matrix4()
			.multiply(
				new THREE.Matrix4().makeTranslation(
					vehiclePosition.x,
					vehiclePosition.y,
					vehiclePosition.z
				)
			)
			.multiply(rotMatrix);
		var quaternionA = new THREE.Quaternion().copy(delayedQuaternion);

		// warning! setting the quaternion from the rotation matrix will cause
		// issues that resemble gimbal locks, instead, always use the quaternion notation
		// throughout the slerping phase
		// quaternionA.setFromRotationMatrix(delayedRotMatrix);

		var quaternionB = new THREE.Quaternion();
		quaternionB.setFromRotationMatrix(rotMatrix);

		var interpolationFactor = 0.175;
		var interpolatedQuaternion = new THREE.Quaternion().copy(quaternionA);
		interpolatedQuaternion.slerp(quaternionB, interpolationFactor);
		delayedQuaternion.copy(interpolatedQuaternion);

		delayedRotMatrix.identity();
		delayedRotMatrix.makeRotationFromQuaternion(delayedQuaternion);
		const cameraMatrix = new THREE.Matrix4()
			.multiply(
				new THREE.Matrix4().makeTranslation(
					vehiclePosition.x,
					vehiclePosition.y,
					vehiclePosition.z
				)
			)
			.multiply(delayedRotMatrix)
			.multiply(new THREE.Matrix4().makeRotationX(Math.PI / 20))
			.multiply(new THREE.Matrix4().makeRotationY(-Math.PI))

			.multiply(new THREE.Matrix4().makeTranslation(0, 7, 20));
		state.camera.matrixAutoUpdate = false;
		state.camera.matrix.copy(cameraMatrix);
		state.camera.matrixWorldNeedsUpdate = true;

		// console.log(carRef.current);
		vehicleRef.current.matrixAutoUpdate = false;
		vehicleRef.current.matrix.copy(matrix);
		vehicleRef.current.matrixWorldNeedsUpdate;

		// carRef.current.applyImpulse(impulse);
		// carRef.current.applyTorqueImpulse(torque);
		// carRef.current.addForce(force);
	});
	return (
		// <RigidBody
		// 	restitution={0.2}
		// 	friction={1}
		// 	linearDamping={0.5}
		// 	angularDamping={0.5}
		// 	canSleep={false}
		// 	position={[0, 1, 7]}
		// 	gravityScale={0}
		// 	ref={carRef}
		// >
		<mesh
			castShadow
			receiveShadow
			geometry={nodes['DMC_Sci-Fi_Hover_Car'].geometry}
			material={materials['Hover DMC']}
			position={[-0.075, 0.125, -1.222]}
			ref={vehicleRef}
		/>
		// </RigidBody>
	);
}

useGLTF.preload('/hoverCar.glb');
