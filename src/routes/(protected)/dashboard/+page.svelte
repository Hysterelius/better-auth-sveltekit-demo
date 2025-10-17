<script lang="ts">
	import { getAuthSession } from '../../api/auth.remote';
	import { getSecret } from './data.remote';

	const authSession = await getAuthSession();

	const prettyAuthSession = JSON.stringify(authSession, null, 2);
</script>

<h1>Dashboard</h1>

<svelte:boundary>
	<span>Protected Data</span>
	<p>Secret: {await getSecret()}</p>
	{#snippet pending()}
		<p>loading...</p>
	{/snippet}
</svelte:boundary>

<pre>
    {prettyAuthSession}
</pre>
