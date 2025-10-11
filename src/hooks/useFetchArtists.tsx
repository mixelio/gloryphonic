import { useEffect, useState } from 'react';
import type { Artist } from '../types/Artist.ts';
import { getArtists } from '../services/artistsGeter.ts';

export const useFetchArtists = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    (async () => {
      try {
        const data = await getArtists(signal);
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
