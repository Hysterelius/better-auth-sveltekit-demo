import { query } from '$app/server';

export const getSecret = query(async () => {
	// timeout for 2 seconds to simulate a slow API
	console.log('Fetching secret data...');
	return 'supersecret sh!';
});
