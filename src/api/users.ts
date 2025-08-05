import { client } from '../utils/fetchClient.ts';
import type { RegData } from '../types/RegData.ts';
import type { Artist } from '../types/Artist.ts';

export const sentRequestForJoin = async (data: FormData) => {
  await client.post('users/applications/', data);
};

export const completeRegistration = async ({
  data,
}: {
  data: { password: string; token: string };
}) => {
  return await client.post<RegData>('users/complete-registration/', data);
};

export const getLogin = async (data: { email: string; password: string }) => {
  return await client.post<{ access: string; refresh: string }>('token/', data);
};

export const getProfileInfo = async (token: string) => {
  return await client.get<Artist>('users/me/', token);
};

export const getArtists = async (token: string) => {
  return await client.get<Artist[]>('users/artists/', token);
};
