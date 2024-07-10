<script lang="ts">
  // Imports da interface
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch, Avatar } from '@skeletonlabs/skeleton';
  // Imports da autenticação
  import { pb, currentUser, login, logout } from '../stores/auth.ts';
  // Imports do Popup
  import PopupUser  from "$lib/PopupUser.svelte"; 
  import { popup } from '@skeletonlabs/skeleton';
  import type { PopupSettings } from '@skeletonlabs/skeleton';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow }); 
  const popupClick: PopupSettings = {
    event: 'click',
    target: 'popupClick',
    placement: 'bottom'
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login();
  };

  let user;
  $: user = pb.authStore.model;

</script>
{#key currentUser}
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong> <a class="text-xl uppercase" href="/">ECyD BSB </a></strong>
			</svelte:fragment>

      <svelte:fragment slot="trail">
        <LightSwitch />
        <button use:popup={popupClick} class="card-hover rounded-full">
          {#if user}
            <Avatar src="https://ecyd-bsb.pockethost.io/api/files/membros/{user.id}/{user.imagem}" initials="" width="w-9"/>
          {:else}
            <Avatar initials="" width="w-9"/>
          {/if} 
        </button>
			</svelte:fragment>      
      <PopupUser user={user} login={login} logout={logout} isLogado={user} />   
		</AppBar> 
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
  
</AppShell>
{/key}
<!-- popup -->



