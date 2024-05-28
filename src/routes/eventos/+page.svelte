<script lang="ts">
  import MembroCard from "$lib/MembroCard.svelte";
  import PocketBase from 'pocketbase';
  import {onMount} from 'svelte';

  // Initialize PocketBase
  const url = 'https://ecyd-bsb.pockethost.io/'
  const pb = new PocketBase(url)
  let records = {}
  onMount(async () => {
     records = await pb.collection('eventos').getFullList({
      sort: '-created',
    });
    console.log(records)
  });
  
</script>
 
<MembroCard nome="Acampamento ECyD de Inverno 2024" descricao="Teste para entender como uma descrição pode ser feita em um evento de maneira automática" />

