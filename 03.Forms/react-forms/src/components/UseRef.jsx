import { useEffect, useRef, useState } from "react";

export default function UseRef() {
	const [count, setCount] = useState(0);
	const refMounted = useRef(false);

	useEffect(() => {
		if (refMounted.current) {
			console.log(count, "Updated");
		}
		refMounted.current = true;
	}, [count]);

	return (
		<>
			<h2>Use Ref</h2>
			<span>{count}</span>
			<button onClick={() => setCount((s) => s + 1)}>+</button>
		</>
	);
}
