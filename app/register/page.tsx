'use client';

import { useState } from "react";

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async () => {
		await {};
	};

	return (
		<>
			<div className="text-4xl text-center">
				Register
			</div>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 mx-auto w-lg">
				<input
					type="text"
					id="name"
					placeholder="Name"
					value={name}
					onChange={e => setName(e.target.value)}
					className="border px-3 py-2 rounded"
				/>
				<input
					type="email"
					id="email"
					placeholder="Email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					className="border px-3 py-2 rounded"
				/>
				<input
					type="password"
					id="password"
					placeholder="Password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					className="border px-3 py-2 rounded"
				/>
				<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Register</button>
			</form>
		</>
	);
}

export default Register