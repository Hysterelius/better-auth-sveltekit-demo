import { form, getRequestEvent } from '$app/server';
import { auth } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import { type } from 'arktype';

export const loginUser = form(
	type({
		email: 'string.email',
		password: '8 <= string <= 64'
	}),
	async ({ email, password }) => {
		await auth.api.signInEmail({
			body: {
				email,
				password
			},
			headers: getRequestEvent().request.headers
		});

		redirect(303, '/dashboard');
	}
);
