import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';

const url = 'https://ecyd-bsb.pockethost.io/'
export const pb = new PocketBase(url)


export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
  currentUser.set(pb.authStore.model);
});

export async function logout() {
  pb.authStore.clear();
}
