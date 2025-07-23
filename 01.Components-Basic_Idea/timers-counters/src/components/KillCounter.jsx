import { useState } from "react";

export default function KillCounter() {
	const [count, setCount] = useState(0);

	const isMax = count >= 10;

	const increaseCountClickHandler = () => setCount(count + 1);
	const decreaseCountClickHandler = () => setCount(count - 1);

	let titleElement = <h2>Kill Counter</h2>;
	if (count == 1) {
		titleElement = <h1>First Blood!</h1>;
	}

	if (count > 10) {
		return (
			<>
				<h1>Game Over!</h1>
				<hr />
			</>
		);
	}

	switch (count) {
		case 2:
			titleElement = <h5>Double Kill!</h5>;
			break;
		case 3:
			titleElement = <h4>Tripple Kill!</h4>;
			break;
		case 4:
			titleElement = <h3>Multi Kill!</h3>;
			break;
		case 5:
			titleElement = <h2>Unstoppable!</h2>;
			break;
		case 6:
			titleElement = <h1>Godlike!</h1>;
			break;
		default:
			break;
	}
	return (
		<>
			{titleElement}
			<div>{count}</div>
			<button onClick={increaseCountClickHandler}>+</button>
			{count > 6 ? <button onClick={decreaseCountClickHandler}>-</button> : <p>No decrement yet!</p>}

			{isMax && <p>Watch out!</p>}
			<hr />
		</>
	);
}
