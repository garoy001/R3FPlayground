export const Instructions = () => {
	return (
		<div className="instructions">
			<table>
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
			</table>
		</div>
	);
};
