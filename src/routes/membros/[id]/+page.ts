import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

export const load: PageLoad = async ({ params }) => {
  const url = 'https://ecyd-bsb.pockethost.io/'
  const pb = new PocketBase(url)
  const records = await pb.collection('membros').getOne(params.id,{
   expand: 'eventos',
  });
  console.log(records)

  return {
		records
	};
};
