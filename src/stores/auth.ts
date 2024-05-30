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
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.model)  
    currentUser.set(pb.authStore.model);
    // "logout" the last authenticated model
    // pb.authStore.clear();

  } catch (error) {
    console.error('Login failed', error);
  }
}


export async function logout() {
  pb.authStore.clear();
}
