<script lang="ts">
	import { getAuthSession } from "../../routes/api/auth.remote";

    // lets go and get the auth session
    const authSession = await getAuthSession();

</script>

<header>
    <a href="/">Home</a>
    {#if authSession}
        <a href="/profile">Profile</a>
        <a href="/logout">Logout</a>
    {:else}
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    {/if}
</header>

<style>
    header {
        width: 100%;
        height: 60px;
        background-color: #f8f9fa;
        display: flex;
        align-items: center;
        padding: 0 20px;
    }
</style>