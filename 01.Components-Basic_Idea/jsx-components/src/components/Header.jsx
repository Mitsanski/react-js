export default function Header(props) {
	return (
		<>
			<h1>{props.title}</h1>
			<h2>React is awesome! {props.subHeading}</h2>
		</>
	);
}
