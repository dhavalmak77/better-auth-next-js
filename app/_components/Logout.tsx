'use client';

import { redirect } from 'next/navigation';
import { authClient } from '../lib/auth-client';

const Logout = () => {
	const handleLogout = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					redirect('/login');
				},
			},
		});
	};

	return (
		<button
			onClick={handleLogout}
			className={`hover:text-blue-500 underline-offset-6 hover:underline`}
		>
			Logout
		</button>
	);
};

export default Logout;
