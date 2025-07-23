import "./App.css";
import BasicTimer from "./components/BrokenTimer";
import Counter from "./components/Counter";
import KillCounter from "./components/KillCounter";
import Timer from "./components/Timer";

function App() {
	return (
		<>
			<h1>Timers and Counters</h1>
			<BasicTimer />

			<Timer />

			<Counter />

			<KillCounter />
		</>
	);
}

export default App;
