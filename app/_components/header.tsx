import Link from "next/link";

const AppHeader = () => {
	return (
		<>
			<div className="p-4 flex justify-between pb-4">
				<div className="text-3xl">Better Auth</div>
				<div className="flex gap-6 text-lg">
					<Link href={'/'} className="hover:text-blue-500">Home</Link>
					<Link href={'/login'} className="hover:text-blue-500">Login</Link>
					<Link href={'/register'} className="hover:text-blue-500">Register</Link>
					<Link href={'/protected'} className="hover:text-blue-500">Protected</Link>
				</div>
			</div>
			<div className="border border-gray-500"></div>
		</>
	);
}

export default AppHeader