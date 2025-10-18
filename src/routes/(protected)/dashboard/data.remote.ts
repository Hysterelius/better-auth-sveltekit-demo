import { query } from '$app/server';

export const getDelayedData = query(async () => {
	await new Promise((f) => setTimeout(f, 2000));

	// timeout for 2 seconds to simulate a slow API
	return 'supersecret sh!';
});
