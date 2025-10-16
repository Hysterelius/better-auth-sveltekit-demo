<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import { loginUser } from "./data.remote";

</script>

<h1>Login</h1>

<form {...loginUser} use:enhance={() => {
        // redirect to dashboard
        goto('/dashboard');
}}>
    <label for="email">Email</label>
    <input id="email" name="email" type="email" required />

    <label for="password">Password</label>
    <input id="password" name="password" type="password" required />

    <button type="submit">Login</button>
</form>