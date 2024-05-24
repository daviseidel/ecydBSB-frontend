<script lang="ts">
  import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
  let tabSet: number = 0;
</script>

<html>
  <TabGroup>
    <Tab bind:group={tabSet} name="guadalupe" value={0}>
		  <span>Guadalupe</span>
	  </Tab>
    <Tab bind:group={tabSet} name="high" value={1}>
		  <span>Everest High</span>
	  </Tab>
    <Tab bind:group={tabSet} name="Forzza" value={2}>
		  <span>Forzza</span>
	  </Tab>
    <svelte:fragment slot="panel">
		  {#if tabSet === 0}
			  (tab panel 1 contents)
		  {:else if tabSet === 1}
			  (tab panel 2 contents)
		  {:else if tabSet === 2}
			  (tab panel 3 contents)
		  {/if}
	</svelte:fragment>

  </TabGroup>

 </html>

