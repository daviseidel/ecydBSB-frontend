import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

export const load: PageLoad = async ({ params }) => {
  const url = 'https://ecyd-bsb.pockethost.io/'
  const pb = new PocketBase(url)
  // RECORDS: Não possui paginação, por isso não é necessário passar o limit e offset
  const records = await pb.collection('membros').getOne(params.id,{
   // expand: 'relField1,relField2.subRelField',
  });
  console.log(records)

  return {
		records
	};
};
