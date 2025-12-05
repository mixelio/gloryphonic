export type Artist = {
  id: number;
  name: string;
  slug: string;
  country: string;
  description: string;
  slogan: string;
  genres: {name: string}[];
  cover_image: string
  images: {
    id: number;
    image: string;
  }[];
  videos: {
    id: number;
    playlist: string;
  }[];
  socials: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    spotify?: string;
    youtube_music?: string;
  };
  albums: {
    id: number;
    title: string;
    release_date: string;
    cover_image: string;
  }[];
  followers: {
    id: number;
    name: string;
    email: string;
  }[];
};
