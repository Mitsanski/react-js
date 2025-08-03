import { useFormStatus } from "react-dom";

const wait = (time) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Wait is over");
		}, time);
	});
};

export default function FormAction() {
	const submitAction = async (formData) => {
		// Get form values
		const { username, password } = Object.fromEntries(formData);

		// Call rest api
		await wait(1500);

        console.log(username, password)
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
			<div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
				<h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
					Form Action
				</h2>

				<form action={submitAction} className="space-y-5">
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

					<Submit />
				</form>
			</div>
		</div>
	);
}

function Submit() {
	const { pending, data, method, action } = useFormStatus();
	console.log({ data, method, action });
	return (
		<input
			type="submit"
			value="Login"
			disabled={pending}
			className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors ${
				pending
					? "bg-gray-400 cursor-not-allowed"
					: "bg-blue-600 hover:bg-blue-700 cursor-pointer"
			}`}
		/>
	);
}
