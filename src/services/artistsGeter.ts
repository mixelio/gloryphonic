export const getArtists = async () => {
  return fetch('/gloryphonic_test_api/artists.json').then((res) => {
    if (!res.ok) {
      throw new Error('Error getting artists.json');
    }
    return res.json();
  });
};
