<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch, Avatar } from '@skeletonlabs/skeleton';
  import { pb, currentUser } from '../stores/auth.ts';

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login();
  };

  let user;
  $: currentUser.subscribe(value => user = value);

  async function login() {
  try {
    const authData = await pb.collection('membros').authWithOAuth2({ provider: 'google' });
    console.log(pb.authStore.isValid);
    // "logout" the last authenticated model
    pb.authStore.clear();

  } catch (error) {
    console.error('Login failed', error);
  }
}


</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong> <a class="text-xl uppercase" href="/">ECyD BSB</a></strong>
        				<strong> <a class="text-xl uppercase" href="/">{user}</a></strong>

			</svelte:fragment>
      <svelte:fragment slot="trail">
        <LightSwitch />
        <a on:click={login} class="card-hover rounded-full">
          {#if pb.authStore.isValid}
            <Avatar src="https://ecyd-bsb.pockethost.io/api/files/membros/{pb.authStore.user.id}/{pb.authStore.user.imagem}" initials="s" width="w-9"/>
          {:else}
            <Avatar initials="A" width="w-9"/>
          {/if} 
            
          <!-- <Avatar initials="A" width="w-9"/> -->
        </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
  
</AppShell>
