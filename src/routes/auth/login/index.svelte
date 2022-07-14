<script context="module">
    export function load({ session, props }) {
        if (session.user) {
            return {
                status: 302,
                redirect: "/"
            }
        }

        return { props }
    }
</script>

<script>
    import { session } from "$app/stores";
    import { send } from '$lib/api';
  
    // these props are passed from the page endpoint
    // so the user can get feedback if JavaScript doesn't work
    export let error;
  
    // this runs on the client when JavaScript is available
    // so we can just reuse the existing `error` and `success` props
    async function login(event) {
        const formEl = event.target;
        const response = await send(formEl);
    
        if (response.error) {
            error = response.error;
        }
    
        $session.user = response.user;
    
        formEl.reset();
    }
  </script>
  
  <form on:submit|preventDefault={login} method="post" autocomplete="off">
    <div>
        <label for="username">Username</label>
        <input
            id="username"
            name="username"
            type="text"
            required
        />
    </div>
  
    <div>
        <label for="password">Password</label>
        <input
            id="password"
            name="password"
            type="password"
            required
        />
    </div>
  
    {#if error}
        <p class="error">{error}</p>
    {/if}
  
    <button type="submit">Login</button>
  </form>
  
  <style>
    .error {
      color: tomato;
    }
  </style>