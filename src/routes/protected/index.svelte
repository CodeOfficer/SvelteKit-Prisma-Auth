<script context="module">
    export function load({ session }) {
        if (!session.user) {
            return {
                status: 302,
                redirect: "/auth/login"
            }
        }

        return {
            status: 200,
            props: {
                user: session.user.username
            }
        }
    }
</script>

<script>
    export let user;
</script>

<h1>protected</h1>

<p>Welcome {user}</p>