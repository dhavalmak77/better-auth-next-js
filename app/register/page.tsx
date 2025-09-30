'use client';

import { useState } from "react";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { data, error } = await authClient.signUp.email(
			{
				name: name,
				email: email,
				password: password,
				// image: 'https://example.com/image.png',
				callbackURL: '/protected',
			},
			{
				onRequest: (ctx) => {
					//show loading
					console.log('making request');
				},
				onSuccess: (ctx) => {
					//redirect to the dashboard or sign in page
					redirect('/protected');
				},
				onError: (ctx) => {
					// display the error message
					console.log('Error on Auth Sign Up', ctx);
				}
			}
		);

		console.log('data', data);
	};

	const handleSignInWithGoogle = async () => {
		const data = await authClient.signIn.social({
			provider: 'google',
		});
		console.log('data', data);
	};

	return (
		<>
			<div className="text-4xl text-center">
				Register
			</div>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 mx-auto w-md">
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
				<h1 className="text-center">OR</h1>
				<button type="button" onClick={handleSignInWithGoogle} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Continue with Google</button>
			</form>
		</>
	);
}

export default Register