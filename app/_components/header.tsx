import Link from 'next/link';
import Logout from './Logout';
import Navigation from './Navigation';
import { auth } from '../lib/auth';
import { headers } from 'next/headers';

const AppHeader = async () => {
	const session = await auth.api.getSession({
		headers: await headers()
	});

	return (
		<>
			<div className='p-4 flex justify-between pb-4 items-center'>
				<div className='text-3xl'>
					<Link
						href={'/'}
						className='flex gap-2 items-center'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='size-9'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z'
							/>
						</svg>
						<span>
							<span className='underline underline-offset-4'>B</span>etter <span className='underline underline-offset-4'>Auth</span>
						</span>
					</Link>
				</div>

				<div className='flex gap-6 text-lg'>
					<Navigation isAuthenticated={Boolean(session)} />
				</div>
			</div>
			<div className='border border-gray-500'></div>
		</>
	);
};

export default AppHeader;
