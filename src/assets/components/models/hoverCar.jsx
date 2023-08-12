import React, { useRef } from 'react';
import { useGLTF, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { Instructions } from '../instructions';
import { updateVehicle } from '../../util/updateVehicle';
import { RigidBody } from '@react-three/rapier';

const delayedRotMatrix = new THREE.Matrix4();
const delayedQuaternion = new THREE.Quaternion();
export function HoverCar(props) {
	const { nodes, materials } = useGLTF('/models/hoverCar.glb');
	const [subscribeKeys, getKeys] = useKeyboardControls();
	const vehicleRef = useRef();
	const htmlRef = useRef();

	materials['Hover DMC'].toneMapped = false;

	const x = new THREE.Vector3(1, 0, 0);
	const y = new THREE.Vector3(0, 1, 0);
	const z = new THREE.Vector3(0, 0, 1);
	const vehiclePosition = new THREE.Vector3(0, 50, -50);

	useFrame((state, delta) => {
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
		if (forward || backward) {
			materials['Hover DMC'].emissiveIntensity = 6;
		}
		if (!forward && !backward) {
			materials['Hover DMC'].emissiveIntensity = 2.5;
		}
		const rotMatrix = new THREE.Matrix4().makeBasis(x, y, z);

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
		const htmlMatrix = new THREE.Matrix4()
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

			.multiply(new THREE.Matrix4().makeTranslation(0, 0, 0));
		state.camera.matrixAutoUpdate = false;
		state.camera.matrix.copy(cameraMatrix);
		state.camera.matrixWorldNeedsUpdate = true;
		console.log(state.camera);
		vehicleRef.current.matrixAutoUpdate = false;
		vehicleRef.current.matrix.copy(matrix);
		vehicleRef.current.matrixWorldNeedsUpdate;

		htmlRef.current.matrixAutoUpdate = false;
		htmlRef.current.matrix.copy(htmlMatrix);
		htmlRef.current.matrixWorldNeedsUpdate;
	});
	return (
		<>
			<group ref={htmlRef}>
				<Html
					wrapperClass="html-wrapper"
					position={[0, 1.56, -1.4]}
					rotation-x={-0.256}
				>
					<Instructions />
				</Html>
			</group>

			<RigidBody
				canSleep={false}
				type="kinematicPosition"
				restitution={0.2}
				friction={0}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['DMC_Sci-Fi_Hover_Car'].geometry}
					material={materials['Hover DMC']}
					position={[-0.075, 0.125, -1.222]}
					ref={vehicleRef}
				/>
			</RigidBody>
		</>
		// <RigidBody
		// 	restitution={0.2}
		// 	friction={1}
		// 	linearDamping={0.5}
		// 	angularDamping={0.5}
		//
		// 	position={[0, 1, 7]}
		//
		// 	ref={carRef}
		// >

		// </RigidBody>
	);
}

useGLTF.preload('/hoverCar.glb');
