<script>
 import { completarCadastro } from "../../../stores/auth.ts"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    completarCadastro(email, password)
  };
</script>
<form on:submit={handleSubmit} class="card p-4 w-1/2 mx-auto my-12 text-token space-y-4">

  <h1 class="h1">Complete seu cadastro</h1> 
  <h3 class="h5">Anote esses dados uma vez, e se inscreva em todos os eventos!</h3>

  <label class="label">
    <span>Nome</span>
    <input class="input" type="text" placeholder="Seu Nome" />
  </label>

  <label class="label">
    <span>Data de Nascimento</span>
    <input class="input" type="date" />
  </label>

  <label class="label">
    <span>Etapa</span>
    <select class="select">
      <option value="1">1° Etapa</option>
      <option value="2">2° Etapa</option>
      <option value="3">3° Etapa</option>
      <option value="4">4° Etapa</option>
    </select>
  </label>

  <label class="label">
    <span>Foto de perfil (Utilize uma com seu rosto)</span>
    <input class="input" type="file" placeholder="Seu rosto" />
  </label>
  
  <label class="label">
    <span>Número de telefone (caso não tenha, insira o de um responsável)</span>
    <input class="input" type="tel" placeholder="(61) 91234-5678" />
  </label>

  <label class="label">
    <span>CPF (ou RG)</span>
    <input class="input" type="text" placeholder="123.456.789-10" />
  </label>
  
  <label class="label">
    <span>Ano em que entrou no ECyD</span>
    <input class="input" type="number" placeholder="2024" />
  </label>

  <label class="label">
    <span>Local do Clube ECyD</span>
    <input class="input" type="text" placeholder="" />
  </label>

  <label class="label">
    <span>Restrição Alimentar/Alergias?</span>
    <!-- cspell:disable-next-line -->
    <textarea class="textarea" rows="4" placeholder="Intolerante a lactose, alérgico a castanha, alérgico a tylenol, etc."></textarea>
  </label>

  <button class="btn variant-filled">Enviar</button>
</form>
