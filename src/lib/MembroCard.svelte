<script>
  export let nome;
  export let descricao;
</script>

<html lang="br">
  <div class="lg:px-20 md:px-20 sm:px-10 my-1">
    <div class="card flex-row space-y-3">
      <header class="card-header py-2">{nome}</header>
      <span class="my-5 py-1 font-light blockquote">{descricao}</span>
      <a class="block card-hover p-4 btn variant-filled" href="/elements/cards">Se Inscreva</a>
    </div>
  </div>
</html>
