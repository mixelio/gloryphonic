export type Artist = {
  id: number;
  name: string;
  email: string;
  genre: string;
  description: string;
  image: string;
  albums: {
    id: number;
    title: string;
    release_date: string;
    cover_image: string;
  }[];
  socials: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    spotify?: string;
    youtube_music?: string;
  };
  followers: {
    id: number;
    name: string;
    email: string;
  }[];
};
