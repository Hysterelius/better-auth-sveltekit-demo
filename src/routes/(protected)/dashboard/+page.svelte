<script lang="ts">
	import { getAuthSession } from '../../api/auth.remote';
	import { getSecret } from './data.remote';

	const authSession = await getAuthSession();

	const prettyAuthSession = JSON.stringify(authSession, null, 2);
</script>

<h1>Dashboard</h1>

<div>{await getSecret()}</div>

<pre>
    {prettyAuthSession}
</pre>
