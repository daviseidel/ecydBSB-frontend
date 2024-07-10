import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

export const load: PageLoad = async () => {
  const url = 'https://ecyd-bsb.pockethost.io/'
  const pb = new PocketBase(url)

  const records = await pb.collection('eventos').getList(1, 50,{
    sort: '-created',
  });

  return {
		records
	};
};
