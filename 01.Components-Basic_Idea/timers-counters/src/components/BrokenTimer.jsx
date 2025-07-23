export default function BasicTimer() {
	let timer = 0;
    //! Does not work
    setInterval(() => {
        timer++
    }, 1000);
	return (
		<>
			<h2>Broken timer | Not working</h2>
			<div>{timer}</div>
			<hr />
		</>
	);
}
