import React, { useRef } from 'react';
import { useGLTF, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { Instructions } from '/assets/components/HTML/instructions.jsx';
import { updateVehicle } from '/assets/util/updateVehicle.jsx';
//0720
const delayedRotMatrix = new THREE.Matrix4();
const delayedQuaternion = new THREE.Quaternion();
export function HoverCar(props) {
	const { nodes, materials } = useGLTF('/models/hoverCar.glb');
	const [subscribeKeys, getKeys] = useKeyboardControls();
	const vehicleRef = useRef();
	const htmlRef = useRef();

	materials['Hover DMC'].toneMapped = false;
	materials['Hover DMC'].transparent = true;
	console.log(materials['Hover DMC']);
	const x = new THREE.Vector3(1, 0, 0);
	const y = new THREE.Vector3(0, 1, 0);
	const z = new THREE.Vector3(0, 0, 1);
	const vehiclePosition = new THREE.Vector3(0, 30, -244);
	const cameraTranslate = new THREE.Vector3(0, 3, 6);
	useFrame((state, delta) => {
		// console.log(vehiclePosition);
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
		//Check if still in tunnel
		if (vehiclePosition.z > -45) {
			cameraTranslate.lerp(new THREE.Vector3(0, 7, 20), 0.0175);
		}
		if (
			vehiclePosition.z < -45 &&
			vehiclePosition.x < 18 &&
			vehiclePosition.x > -16 &&
			vehiclePosition.y < 44 &&
			vehiclePosition.y > 27
		) {
			cameraTranslate.lerp(new THREE.Vector3(0, 3, 6), 0.02);
		}
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

			.multiply(
				new THREE.Matrix4().makeTranslation(
					cameraTranslate.x,
					cameraTranslate.y,
					cameraTranslate.z
				)
			);
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
		// console.log(cameraMatrix);
		state.camera.matrixAutoUpdate = false;
		state.camera.matrix.copy(cameraMatrix);
		state.camera.matrixWorldNeedsUpdate = true;
		// console.log(state.camera);
		vehicleRef.current.matrixAutoUpdate = false;
		vehicleRef.current.matrix.copy(matrix);
		vehicleRef.current.matrixWorldNeedsUpdate;

		htmlRef.current.matrixAutoUpdate = false;
		htmlRef.current.matrix.copy(htmlMatrix);
		htmlRef.current.matrixWorldNeedsUpdate;
	});
	useFrame(() => {
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

		console.log(vehiclePosition);
		// console.log(vehiclePosition.distanceTo(new THREE.Vector3(0, 0, 0)));
	});
	return (
		<>
			<group ref={htmlRef} name="HTML">
				<Html
					wrapperClass="html-wrapper"
					position={[0, 1.56, -1.4]}
					rotation-x={-0.256}
				>
					<Instructions />
				</Html>
			</group>

			<mesh
				name="hoverCar"
				castShadow
				receiveShadow
				geometry={nodes['DMC_Sci-Fi_Hover_Car'].geometry}
				material={materials['Hover DMC']}
				position={[-0.075, 0.125, -1.222]}
				ref={vehicleRef}
			/>
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
