import { useState } from "react";

const wait = (time) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Wait is over");
		}, time);
	});
};

export default function UnifiedControlledForm() {
	const [pending, setIsPending] = useState(false);
    // ! Set initial values 
	const [values, setValues] = useState({
        username: '',
        password: '',
        tos: false
    });

	const submitHandler = async (e) => {
		// Set pending status
		setIsPending(true);

		// Prevent page refresh
		e.preventDefault();

		// Call rest api
		await wait(1500);

		// remove pending status
		setIsPending(false);

		console.log({ username: values.username, password: values.password });
	};

	const changeHandler = (e) => {
		setValues((state) => ({
			...state,
			[e.target.name]:
				e.target.type === "radio" || e.target.type === "checkbox"
					? e.target.checked
					: e.target.value,
		}));
	};

	return (
		<div
			className="
                flex
                min-h-screen
                p-4
                bg-gradient-to-br from-blue-100 to-blue-300
                items-center justify-center
            ">
			<div
				className="
                    w-full max-w-md
                    p-6
                    bg-white
                    rounded-xl
                    shadow-lg
                ">
				<h2
					className="
                        mb-6
                        text-3xl font-bold text-center text-gray-800
                    ">
					Unified Controlled Form
				</h2>

				<form
					onSubmit={submitHandler}
					className="
                        space-y-5
                    ">
					<div>
						<label
							htmlFor="username"
							className="
                                block
                                mb-1
                                text-gray-700 font-medium
                            ">
							Username
						</label>
						{/* If you are using value you need to use onChange */}
						<input
							type="text"
							id="username"
							name="username"
							onChange={changeHandler}
							value={values.username}
							className="
                                w-full
                                px-4 py-2
                                border border-gray-300 rounded-md
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                            "
						/>
					</div>

					<div>
						<label
							htmlFor="password"
							className="
                                block
                                mb-1
                                text-gray-700 font-medium
                            ">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							onChange={changeHandler}
							value={values.password}
							className="
                                w-full
                                px-4 py-2
                                border border-gray-300 rounded-md
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                            "
						/>
					</div>
					<div>
						<label
							htmlFor="tos"
							className="
                                block
                                mb-1
                                text-gray-700 font-medium
                            ">
							Accept term of service
						</label>
						<input
							type="checkbox"
							id="tos"
							name="tos"
							checked={values.tos}
							onChange={changeHandler}
							className="
                                px-4 py-2
                                border border-gray-300 rounded-md
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                            "
						/>
					</div>
					<input
						type="submit"
						value="Login"
						disabled={pending}
						className={`
                            w-full
                            py-2 px-4
                            text-white font-semibold
                            rounded-md
                            transition-colors
                            ${
								pending
									? "bg-gray-400 cursor-not-allowed"
									: "bg-blue-600 hover:bg-blue-700 cursor-pointer"
							}
                        `}
					/>
				</form>
			</div>
		</div>
	);
}
