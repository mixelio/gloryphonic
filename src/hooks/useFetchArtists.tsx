import { useEffect, useState } from 'react';
import type { Artist } from '../types/Artist.ts';
import { getArtists } from '../api/users.ts';

export const useFetchArtists = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const data = await getArtists();
        console.log(data);
        setArtists(data);
      } catch (err) {
        setError('Failed to fetch artists');
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return { artists, loading, error };
};
