import { getRequestEvent, query } from '$app/server';
import { auth } from '$lib/auth';

type reqEventR = ReturnType<typeof getRequestEvent>;
type sessionR = ReturnType<typeof auth.api.getSession>;

async function _authSession(event: reqEventR): Promise<sessionR | null> {
	const eventSession = event.locals.session;
	const eventUser = event.locals.user;
	if (eventSession && eventUser) {
		return {
			user: eventUser,
			session: eventSession
		};
	}

	// now request the event session
	try {
		const apiSession = await auth.api.getSession({
			headers: event.request.headers
		});
		return apiSession;
	} catch {
		return null;
	}
}

export const getAuthSession = query(async () => {
	const event = getRequestEvent();

	return await _authSession(event);
});
