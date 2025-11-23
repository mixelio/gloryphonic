import axios from 'axios';

export interface YouTubeVideo {
  title: string;
  videoId: string;
}

export const fetchYoutubeVideos = async ({playlistId}:{playlistId: string}):Promise<YouTubeVideo[]> => {
  const videos = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);

  return videos.data.items.map((video: any) => ({
    title: video.snippet.title,
    videoId: video.snippet.resourceId.videoId,
  }))
}