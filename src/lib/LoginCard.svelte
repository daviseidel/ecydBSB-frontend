<script lang="ts">
  import { login, loginSenha } from "../stores/auth"
  let email = "";
  let password = "";
  let rememberMe = false;
  let flashMessages = []; 

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    loginSenha(email, password)
  };

</script>

<div class="max-w-sm flex flex-col justify-center align-middle h-full max-h-sm border-8">
  <form on:submit={handleSubmit} class="card mb-4 px-8 pt-6 pb-8 rounded shadow-md justify-center">
    <h1 class="font-hairline mb-6 text-center">Entrar</h1>
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
      <input
        id="email"
        type="email"
        bind:value={email}
        autofocus
        autocomplete="email"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div class="mb-4">
      <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Senha</label>
      <input
        id="password"
        type="password"
        bind:value={password}
        autocomplete="current-password"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div class="mb-4">
      <input
        id="remember_me"
        type="checkbox"
        bind:checked={rememberMe}
        class="mr-2 leading-tight"
      />
      <label for="remember_me" class="align-baseline inline-block text-gray-700 text-sm">Lembrar de mim</label>
    </div>

    <div class="mb-4">
      <button type="submit" class="btn variant-filled-surface font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
        Entrar
      </button>
    </div>

    <hr />
    <button class="anchor px-2" on:click={() => login()}>Entar com Google</button>
    
  </form>

</div>

