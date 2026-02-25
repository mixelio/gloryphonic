export type Artist = {
  id: number;
  slug: string;
  name: string;
  email: string;
  avatar: string;
  cover_image: string;
  country: string;
  genre: string[];
  description: string;
  slogan: string;
  role: 'artist' | 'admin' | 'manager';
  socials: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    spotify?: string;
    youtube_music?: string;
  };
  members: {
    first_name: string;
    last_name: string;
    pseudonym: string;
    role: string;
    photo: string;
  }[];
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
  images: {
    id: number;
    user: number;
    image: string;
  }[];
};
