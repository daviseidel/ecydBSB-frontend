<script>
  export let data;

  const membro = data.records;
</script> 
<div>
  <h1 class="text-2xl font-bold text-gray-900 mt-5">{membro.nome}</h1>
  <p class="text-sm text-gray-600 mb-5">{membro.etapa}° Etapa</p>
</div>
<div class="logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-0.5">
	<a href="" class="logo-item">Celular: {membro.celular}</a>
	<a href="" class="logo-item">RG: {membro.rg}</a>
	<a href="" class="logo-item">{2024 - membro.anoDeAdesao} anos no ECyD</a>
	<a href="/membros" class="logo-item">Clube: {membro.local}</a>
  {#each membro.eventos as item}
     <p>{membro.expand.eventos[0].titulo}</p>
  {/each}
</div>
