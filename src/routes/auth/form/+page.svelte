<script lang="js">
  import { pb , signupSenha, signup } from "../../../stores/auth"; 
  let user = pb.authStore.model

  let foto;

  let data = {
    "email": "",
    //"emailVisibility": true,
    "password": "",
    "passwordConfirm": "",
    "nome": "",
    "etapa": "",
    "celular": "",
    "rg": "",
    "anoDeAdesao": "",
    "local": "",
    "restricao": "",
    "dataDeNascimento": ""
  }
  let formData = new FormData;

  const handleSubmit = (e) => {
    e.preventDefault();
    data.passwordConfirm = data.password
    //data.dataDeNascimento = data.dataDeNascimento + " 01:00:00.123"
    //data.anoDeAdesao = "" + data.anoDeAdesao + ""
    console.log(data)
    for (var [key,value] of Object.entries(data)){
      formData.append(key, value)
    }
    console.log(formData)
    // console.log(data)
    signupSenha(formData)
  };

</script>




<form on:submit={handleSubmit} class="card p-4 w-1/2 mx-auto my-12 text-token space-y-4">

  <h1 class="h1">Complete seu cadastro</h1> 
  <h3 class="h5">Anote esses dados uma vez, e se inscreva em todos os eventos!</h3>

  <label class="label">
    <span>Nome</span>
    <input class="input" type="text" placeholder="Seu Nome" bind:value={data.nome} />
  </label>

  <label class="label">
    <span>Data de Nascimento</span>
    <input class="input" type="date" bind:value={data.dataDeNascimento} />
  </label>

  <label class="label">
    <span>Etapa</span>
    <select class="select" bind:value={data.etapa}>
      <option value="1">1° Etapa</option>
      <option value="2">2° Etapa</option>
      <option value="3">3° Etapa</option>
      <option value="4">4° Etapa</option>
    </select>
  </label>

  <label class="label">
    <span>Foto de perfil (Utilize uma com seu rosto)</span>
    <input class="input" type="file" placeholder="Seu rosto" bind:value={foto}/>
  </label>
  
  <label class="label">
    <span>Número de telefone (caso não tenha, insira o de um responsável)</span>
    <input class="input" type="tel" placeholder="(61) 91234-5678" bind:value={data.celular}/>
  </label>

  <label class="label">
    <span>CPF (ou RG)</span>
    <input class="input" type="text" placeholder="123.456.789-10" bind:value={data.rg} />
  </label>
  
  <label class="label">
    <span>Ano em que entrou no ECyD</span>
    <input class="input" type="number" placeholder="2024" bind:value={data.anoDeAdesao}/>
  </label>

  <label class="label">
    <span>Local do Clube ECyD</span>
    <input class="input" type="text" placeholder="" bind:value={data.local}/>
  </label>

  <label class="label">
    <span>Restrição Alimentar/Alergias?</span>
    <!-- cspell:disable-next-line -->
    <textarea class="textarea" rows="4" placeholder="Intolerante a lactose, alérgico a castanha, alérgico a algum remédio, etc." bind:value={data.restricao}></textarea>
  </label>

  <hr />

  <label class="label">
    <span>Email</span>
    <input class="input" type="email" placeholder="seuemail@gmail.com" bind:value={data.email}/>
  </label>

  <label class="label">
    <span>Senha</span>
    <input class="input" type="password" placeholder="suasenha123" bind:value={data.password}/>
  </label>

  <h1 class="h4"> OU </h1>

  <button class="btn variant-soft" on:click={() => signup(formData)}> Entrar com Google </button>

  <hr />
  <button class="btn variant-filled" >Enviar</button>
</form>
