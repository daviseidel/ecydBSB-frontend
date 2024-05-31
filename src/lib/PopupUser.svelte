<script lang="ts">
  import { popup, Avatar } from '@skeletonlabs/skeleton';
  import type { PopupSettings } from '@skeletonlabs/skeleton';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow }); 
  const popupClick: PopupSettings = {
    event: 'click',
    target: 'popupClick',
    placement: 'bottom'
  };

  export let user;
  export let logout;
  export let login;
  export let isLogado;
</script>

{#if isLogado}
<div class="card p-4 w-72 shadow-xl" data-popup="popupClick">
    <div class="space-y-4 place-content-end justify-items-end">
      <Avatar src="https://ecyd-bsb.pockethost.io/api/files/membros/{user.id}/{user.imagem}" width="w-16" />
      <div>
        <p class="font-bold">{user.nome}</p>
        <p class="opacity-50">{user.etapa}° Etapa</p>
      </div>
      <div class="grid">
        <button class="btn variant-soft">Eventos Inscritos</button>
        <a class="btn variant-soft" href="/membros/{user.id}">Dados</a>
      </div>
      <div class="flex gap-4">
        <small><strong>{2024 - user.anoDeAdesao}</strong> <span class="opacity-50">Anos no ECyD</span></small>
        <small><strong>{0 }</strong> <span class="opacity-50">Eventos</span></small>
      </div>
      <a class="btn variant-filled-error w-full" on:click={logout}> Sair </a>
  </div>
  <div class="arrow bg-surface-100-800-token"></div>
</div>
{:else}
<div class="card p-4 w-72 shadow-xl"  data-popup="popupClick">
  <div class="space-y-4 place-content-end justify-items-end">
      <div class="grid">
        <button class="btn variant-soft" on:click={login}>Login</button>
        <button class="btn variant-soft" on:click={login}>Se Inscrever</button>
      </div>
  </div>
  <div class="arrow bg-surface-100-800-token"></div>
</div> 
{/if}
