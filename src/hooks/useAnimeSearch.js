import { useState, useEffect } from 'react';
import axios from 'axios';

export function useAnimeSearch(searchTerm) {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function searchAnime() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.consumet.org/meta/anilist/${searchTerm}`,
        );
        setAnimeList(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    if (searchTerm) {
      searchAnime();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return { animeList, loading };
}
