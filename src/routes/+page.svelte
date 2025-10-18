<script>
	import { getDelayedData } from './(protected)/dashboard/data.remote';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<a href="/login">Login</a>
<a href="/signup">Signup</a>
<a href="/dashboard">Dashboard</a>

<svelte:boundary>
	<br />
	<span>Protected Data</span>
	<p>Secret: {await getDelayedData()}</p>
	{#snippet pending()}
		<p>loading...</p>
	{/snippet}
</svelte:boundary>
