import { useFrame } from '@react-three/fiber';

export const Instructions = () => {
	let deviceType = 'desktop';
	const domWindow = document.getElementById('#root');

	if (
		navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i)
	) {
		deviceType = 'mobile';
	}
	// useFrame(() => {
	// 	// if()
	// });
	return (
		<>
			{deviceType == 'desktop' && (
				<div className="instructions">
					<table>
						<tbody>
							<tr>
								<th>Instructions</th>
							</tr>
							<tr>
								<td>
									<p className="instructions-title">Forward</p>
								</td>
								<td>
									<p className="instructions-button">W</p>
								</td>
							</tr>
							<tr>
								<td>
									<p className="instructions-title">Backward</p>
								</td>
								<td>
									<p className="instructions-button">S</p>
								</td>
							</tr>
							<tr>
								<td>
									<p className="instructions-title">Turn Left</p>
								</td>
								<td>
									<p className="instructions-button">A</p>
								</td>
							</tr>
							<tr>
								<td>
									<p className="instructions-title">Turn Right</p>
								</td>
								<td>
									<p className="instructions-button">D</p>
								</td>
							</tr>
							<tr>
								<td>
									<p className="instructions-title">Up</p>
								</td>
								<td>
									<p className="instructions-button">Spacebar</p>
								</td>
							</tr>
							<tr>
								<td>
									<p className="instructions-title">Down</p>
								</td>
								<td>
									<p className="instructions-button">Left Shift</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
			{deviceType == 'desktop' && (
				<div>
					<div>
						<button></button>
						<button></button>
						<button></button>
						<button></button>
					</div>
					<div>
						<button></button>
						<button></button>
					</div>
				</div>
			)}
		</>
	);
};
