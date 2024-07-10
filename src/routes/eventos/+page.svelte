<script lang="ts">
  import EventoCard from "$lib/EventoCard.svelte";
  import PocketBase from 'pocketbase';
  import {onMount} from 'svelte';

  export let data: PageData; 
</script>

<div>
  {#each data.records.items as evento}
    <EventoCard nome="{evento.titulo}" descricao="{evento.desc}" data="{evento.data}" local="{evento.local}" id="{evento.id}"/>
  {/each}
</div>
