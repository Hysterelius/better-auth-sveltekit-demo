import { form } from '$app/server';
import { auth } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import { type } from 'arktype';

export const addUser = form(
	type({
		name: 'string >= 2',
		email: 'string.email',
		password: '8 <= string <= 64'
	}),
	async ({ name, email, password }) => {
		await auth.api.signUpEmail({
			body: {
				name,
				email,
				password
			}
		});

		// redirect to dashboard
		redirect(307, '/dashboard');
	}
);
