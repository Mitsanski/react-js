import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function UseActionState() {
	const action = async (values) => {
		// Call rest api
		const response = await fetch(
			`https://swapi.tech/api/people/${values.character}`
		);
		const result = await response.json();
		console.log(result)
		return result;
	};

	const initialFormState = { character: ""};
	const [values, formAction, pending] = useActionState(
		action,
		initialFormState
	);
	console.log(values);
	// console.log(pending);

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
			<div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
				<h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
					Use Action State
				</h2>

				<form action={formAction} className="space-y-5">
					<div>
						<label
							htmlFor="character"
							className="block text-sm font-medium text-gray-700">
							Character - {name}
						</label>
						<input
							type="text"
							id="character"
							name="character"
							className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
						/>
					</div>

					<Submit />
				</form>
			</div>
		</div>
	);
}

function Submit() {
	const { pending } = useFormStatus();
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
