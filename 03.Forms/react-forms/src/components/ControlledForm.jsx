import { useState } from "react";

const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Wait is over')
        }, time);
    })
}


export default function ControlledForm() {
    const [pending, setIsPending] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = async (e) => {
        // Set pending status
        setIsPending(true)

        // Prevent page refresh
        e.preventDefault()

        // Call rest api
        await wait(1500)

        // remove pending status
        setIsPending(false)

        console.log({ username, password })
    }

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Controlled Form</h2>

                <form onSubmit={submitHandler} className="space-y-5">
                    <div>
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
                            Username
                        </label>
                        {/* If you are using value you need to use onChange */}
                        <input
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="username"
                            name="username"
                            onChange={usernameChangeHandler}
                            value={username}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            id="password"
                            name="password"
                            onChange={passwordChangeHandler}
                            value={password}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Login"
                        disabled={pending}
                        className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors ${pending
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                            }`}
                    />
                </form>
            </div>
        </div>

    )
}