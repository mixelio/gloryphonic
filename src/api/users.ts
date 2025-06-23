import { client } from '../utils/fetchClient.ts';

export const sentRequestForJoin = async (data: FormData) => {
  await client.post('users/applications/', data);
};
