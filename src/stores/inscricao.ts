import PocketBase from 'pocketbase';

const url = 'https://ecyd-bsb.pockethost.io/'
export const pb = new PocketBase(url)

import { currentUser } from './auth.ts';


export async function inscricao(idEvento: string){
  // Buscar o record do usuário, e mandar um novo array de eventos com o evento inscrito
  // TODO: Verificação de inscrição (O evento e único ou o usuário já se inscreveu?)
  console.log(currentUser)
}
