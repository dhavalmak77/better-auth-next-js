import { redirect } from "next/navigation";
import { auth } from "../lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

const Protected = async () => {
	const session = await auth.api.getSession({
		headers: await headers()
	})

	console.log('session', session);

	if (!session) {
		redirect('/');
	}

	return <div className='text-3xl text-center'>Hello {session.user.name}! 🙂👋</div>;
}

export default Protected;