import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';

const url = 'https://ecyd-bsb.pockethost.io/'
export const pb = new PocketBase(url)


export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
  console.log(auth)  
  currentUser.set(pb.authStore.model);
});

export async function login() {
  try {
    const authData = await pb.collection('membros').authWithOAuth2({provider: 'google'}); 
    location.assign('/');
  } catch (error) {
    console.error('Login failed', error);
  }
}

export async function signup(data: object) {
  try {
    console.log(data)
    const authData = await pb.collection('membros').authWithOAuth2({provider: 'google', createData: data}); 
    location.assign('/');
  } catch (error) {
    console.error('Login failed', error);
  }
}

export async function loginSenha(email: string, senha: string) {
  try {
    const authData = await pb.collection('membros').authWithPassword(
      email,
      senha,
    ); 
    location.assign('/');
  } catch (error) {
    console.error('Login failed', error);
  }
}

export async function signupSenha(data: object) {
  const record = await pb.collection('membros').create(data);
}

export async function completarCadastro(nome: string, etapa: number, celular: number, rg: number, ano: number, local: string, restricao: string, dataNasc: string, id: string) {
  const data = {
    "nome": nome,
    "etapa": etapa,
    "celular": celular,
    "rg": rg,
    "anoDeAdesao": ano,
    "local": local,
    "restricao": restricao,
    "dataDeNascimento": dataNasc, 
  };

  const record = await pb.collection('membros').update(id , data);
}

export async function logout() {
  pb.authStore.clear();
  location.reload();
}
