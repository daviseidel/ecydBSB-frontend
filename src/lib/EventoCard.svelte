<script lang="ts">
  // Todos os Props
  export let nome;
  export let descricao;
  export let data;
  export let local;
  export let id;
 
  import { pb, currentUser, login, logout } from '../stores/auth.ts';
  let user = pb.authStore.model

  export async function inscricao(idEvento: string){
    // Buscar o record do usuário, e mandar um novo array de eventos com o evento inscrito
    // TODO: Verificação de inscrição (O evento e único ou o usuário já se inscreveu?)
    let eventosInscritos = user.eventos
    eventosInscritos.push(idEvento)
    console.log(eventosInscritos)
    
    let data = {
      eventos: eventosInscritos
    }

    const membroInscrito = await pb.collection('membros').update(user.id, data);
    console.log(membroInscrito)
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
