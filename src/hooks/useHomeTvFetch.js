import { useState, useEffect} from "react";
import API from "../API";

const initialState = {
    page: 0, 
    results: [],
    total_pages: 0, 
    total_results:0
};

export const useHomeTvFetch = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchTvShows = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const tvShow = await API.fetchTvShows(searchTerm, page);

      setState((prev) => ({
        ...tvShow,
        results:
          page > 1 ? [...prev.results, ...tvShow.results] : [...tvShow.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //initial and search
  useEffect(() => {
    setState(initialState);
    fetchTvShows(1, searchTerm);
  }, [searchTerm]);

  //Load more
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchTvShows(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page])

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore};
};
