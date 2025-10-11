export const getArtists = async (signal?: AbortSignal) => {
  try {
    return fetch('/gloryphonic_test_api/artists.json', { signal }).then((res) => {
      if (!res.ok) {
        throw new Error('Error getting artists.json');
      }
      return res.json();
    });
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch artists');
  }
};
