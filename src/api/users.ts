import { client } from '../utils/axiosClient.ts';
import type { RegData } from '../types/RegData.ts';
import type { Artist } from '../types/Artist.ts';
import type { Comment } from '../types/Comment.ts';

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

export const getArtists = async () => {
  return await client.get<Artist[]>('bands');
};

export const getArtist = async (id: string) => {
  return await client.get<Artist>(`bands${id}`);
}

export const postComment = async ({userId, user, text}:{userId: string, user: string, text: string}) => {

  return await client.post<Comment>(`bands/${userId}/comments/`, {text, user});
};

export const getComments = async ({userId}: {userId: string}) => {
  return await client.get<Comment[]>(`bands/${userId}/comments/`);
}
