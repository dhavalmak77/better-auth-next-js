'use client';

import { useState } from 'react';
import { authClient } from '../lib/auth-client';
import { redirect } from 'next/navigation';

const Login = () => {
	const { data: session, isPending } = authClient.useSession();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (session) {
		redirect('/protected');
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { data, error } = await authClient.signIn.email(
			{
				email: email,
				password: password,
				callbackURL: '/protected',
				rememberMe: true
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
					console.log('Error on Auth Sign In', ctx);
				},
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
			<div className='text-4xl text-center'>Login</div>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-4 mt-4 mx-auto w-md'
			>
				<input
					type='email'
					id='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='border px-3 py-2 rounded'
				/>
				<input
					type='password'
					id='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='border px-3 py-2 rounded'
				/>
				<button
					type='submit'
					className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
				>
					Login
				</button>
				<h1 className='text-center'>OR</h1>
				<button
					type='button'
					onClick={handleSignInWithGoogle}
					className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition'
				>
					Continue with Google
				</button>
			</form>
		</>
	);
};

export default Login;
