import { fetchYoutubeVideos } from '../api/yuotubeApi.ts';

export const getArtistVideos = async (playlistId: string) => {
  if (!playlistId) {
    return [];
  }

  const videos = await fetchYoutubeVideos({ playlistId });
  return videos ? videos : [];
}