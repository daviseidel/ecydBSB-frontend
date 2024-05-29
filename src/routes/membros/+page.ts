import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

export const load: PageLoad = async () => {
  const url = 'https://ecyd-bsb.pockethost.io/'
  const pb = new PocketBase(url)
  // RECORDS: Não possui paginação, por isso não é necessário passar o limit e offset
  const records = await pb.collection('membros').getList(1, 50,{
    sort: '-created',
  });
  console.log(records)

  return {
		records
	};
};
