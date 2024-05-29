<script>
  import { Avatar } from '@skeletonlabs/skeleton';

  // PROPS
  export let nome;
  export let etapa;
  export let id;
  export let image;

  // Função para descobrir iniciais
  // Separa as palavras e pega a primeira
  var getInitials = function (name) {
    var parts = name.split(' ')
    var initials = ''
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== '') {
        initials += parts[i][0]
      }
    }
    return initials
  }

  // Variables
  let iniciais = getInitials(nome);
</script>

<a class="card flex variant-ghost card-hover overflow-hidden" href="/membros/{id}">
  <Avatar class="m-2" initials={iniciais} src="https://ecyd-bsb.pockethost.io/api/files/membros/{id}/{image}"/>
  <header>
    <h2 class="text-lg font-bold text-gray-900">{nome}</h2>
    <p class="text-sm text-gray-600">{etapa}° Etapa</p>
  </header>
</a>

