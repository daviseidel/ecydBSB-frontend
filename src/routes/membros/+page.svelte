<script lang="ts">
  import { TabGroup, Tab } from '@skeletonlabs/skeleton';
  import MembroCard from '$lib/MembroCard.svelte'
  var tabSet: number = 0;

  export let data;
</script>

<html lang="pt-BR">
  <TabGroup>
    <Tab bind:group={tabSet} name="guadalupe" value={0}>
		  <span>Guadalupe</span>
	  </Tab>
    <Tab bind:group={tabSet} name="high" value={1}>
		  <span>Everest High</span>
	  </Tab>
    <Tab bind:group={tabSet} name="asanorte" value={2}>
		  <span>Everest Asa Norte</span>
	  </Tab>
    <svelte:fragment slot="panel">
		  {#if tabSet === 0}
        {#each data.records.items as membro}
          {#if membro.local === "Guadalupe"}
            <MembroCard nome={membro.nome} etapa={membro.etapa} id={membro.id} image={membro.imagem} />
          {/if}
        {/each}
		  {:else if tabSet === 1}
        {#each data.records.items as membro}
          {#if membro.local === "Everest High"}
            <MembroCard nome={membro.nome} etapa={membro.etapa} id={membro.id} image={membro.imagem}/>
          {/if}
        {/each}
		  {:else if tabSet === 2}
			  {#each data.records.items as membro}
          {#if membro.local === "Everest Asa Norte"}
            <MembroCard nome={membro.nome} etapa={membro.etapa} id={membro.id} image={membro.imagem} />
          {/if}
        {/each}
		  {/if}
	  </svelte:fragment>
  </TabGroup>

 </html>

