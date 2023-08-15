import { useState } from 'react';

export const Modal = () => {
	const [modalState, setModalState] = useState(true);
	console.log(modalState);
	return (
		<>
			{modalState == true && (
				<div id="modal">
					<h1>modal</h1>
					<button
						onClick={() => {
							setModalState(false);
						}}
					/>
				</div>
			)}
		</>
	);
};
