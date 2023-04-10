import axios from 'axios';
import { useEffect, useState } from 'react';

export function useAnimeWatch(id) {
  const [animeWatch, setAnimeWatch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [watchId, setWatchId] = useState([]);

  async function getAnimeWatch() {
    const provider = 'gogoanime';
    const response = await axios.get(
      `https://api.consumet.org/meta/anilist/info/${id}?provider=${provider}`,
    );
    setAnimeWatch(response.data);
    console.log(response.data.episodes);
    setLoading(false);

    if (response.data.episodes.length === 0) {
      console.log('No episodes found');
    } else {
      const getWatchId = response.data.episodes[0].id;
      console.log(getWatchId);
      const watchResponse = await axios.get(
        `https://api.consumet.org/meta/anilist/watch/${getWatchId}`,
      );

      setWatchId(watchResponse.data);
      console.log(watchResponse.data);
    }
    // try {
    //     const response = await axios.get(

    // } catch (error) {

    // }
  }

  useEffect(() => {
    getAnimeWatch();
  }, []);

  return { animeWatch, watchId, loading };
}

export function useEpisodeId(id) {
  const [episodeId, setEpisodeId] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getEpisodeId() {
    const response = await axios.get(
      `https://api.consumet.org/meta/anilist/watch/${id}`,
    );
    setEpisodeId(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getEpisodeId();
  }, []);

  return { episodeId, loading };
}
