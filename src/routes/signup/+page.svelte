<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import { addUser } from "./data.remote";

</script>

<h1>Sign Up</h1>

<form {...addUser} use:enhance={() => {
        // redirect to dashboard
        goto('/dashboard');
}}>
    <label for="name">Name</label>
    <input id="name" name="name" type="text" required minlength="2" />

    <label for="email">Email</label>
    <input id="email" name="email" type="email" required />

    <label for="password">Password</label>
    <input id="password" name="password" type="password" required />

    <button type="submit">Sign Up</button>
</form>