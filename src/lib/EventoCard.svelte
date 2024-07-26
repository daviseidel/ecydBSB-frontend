<script>
  export let nome;
  export let descricao;
  export let data;
  export let local;
  export let id;

  import { pb, currentUser, login, logout } from '../stores/auth.ts';
  let user;
  $: user = pb.authStore.model;

  async function inscricao(idEvento){
    console.log(user)
    const inscrito = await pb.collection('membros').update(user.id, {
      
      'eventos+': idEvento
    })    
  }
</script>

<html lang="br">
  <div class="lg:px-20 md:px-20 sm:px-10 my-1">
    <div class="card flex-row space-y-3">
      <header class="card-header py-2">{nome}</header>
      <div class="my-5 py-1 font-light blockquote">{@html descricao}</div>
      <div><strong>Data: </strong>{new Date(data).toLocaleString('pt-BR')}</div>
      <div><strong>Local: </strong>{local}</div>
      <button class="block card-hover p-4 btn variant-filled" on:click={inscricao(id)}>Inscreva-se</button>
    </div>
  </div>
</html>
