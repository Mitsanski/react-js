import { useRef } from "react";
import './UncontrolledFormRef.css';

const wait = (time) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Wait is over");
		}, time);
	});
};

// Dont do this just learn 
export default function UncontrolledFormRef() {
	const submitRef = useRef();

	const submitHandler = async (e) => {
		submitRef.current.disabled = true;
		// Prevent page refresh
		e.preventDefault();

		// Get form data from dom
		const formData = new FormData(e.currentTarget);

		// Get form values
		const { username, password } = Object.fromEntries(formData);

		// Call rest api
		await wait(1500);

		submitRef.current.disabled = false;

		// remove pending status
		console.log({ username, password });
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
			<div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
				<h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
					Uncontrolled Form Ref
				</h2>

				<form onSubmit={submitHandler} className="space-y-5">
					<div>
						<label
							htmlFor="username"
							className="block text-gray-700 font-medium mb-1">
							Username
						</label>
						<input
							className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							type="text"
							id="username"
							name="username"
							defaultValue="Pesho"
						/>
					</div>

					<div>
						<label
							htmlFor="password"
							className="block text-gray-700 font-medium mb-1">
							Password
						</label>
						<input
							className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							type="password"
							id="password"
							name="password"
						/>
					</div>
					<Submit ref={submitRef} />
				</form>
			</div>
		</div>
	);
}

function Submit({ ref }) {
	return (
		<div>
			<input
				ref={ref}
				type="submit"
				value="Login"
				className={`submit-btn w-full py-2 px-4 rounded-md bg-blue-500 text-white font-semibold transition-colors `}
			/>
		</div>
	);
}
