'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logout from './Logout';

const Navigation = ({ isAuthenticated = false }) => {
	const pathname = usePathname();

	return (
		<>
			<Link
				href={'/'}
				className={`hover:text-blue-500 underline-offset-6 hover:underline ${pathname === '/' ? 'text-blue-500 underline' : ''}`}
			>
				Home
			</Link>
			{!isAuthenticated && (
				<Link
					href={'/login'}
					className={`hover:text-blue-500 underline-offset-6 hover:underline ${pathname === '/login' ? 'text-blue-500 underline' : ''}`}
				>
					Login
				</Link>
			)}
			{!isAuthenticated && (
				<Link
					href={'/register'}
					className={`hover:text-blue-500 underline-offset-6 hover:underline ${pathname === '/register' ? 'text-blue-500 underline' : ''}`}
				>
					Register
				</Link>
			)}
			{isAuthenticated && (
				<Link
					href={'/protected'}
					className={`hover:text-blue-500 underline-offset-6 hover:underline ${pathname === '/protected' ? 'text-blue-500 underline' : ''}`}
				>
					Protected
				</Link>
			)}
            {isAuthenticated && <Logout />}
		</>
	);
};

export default Navigation;
