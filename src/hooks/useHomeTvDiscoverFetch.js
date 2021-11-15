import { useState, useEffect} from "react";
import API from "../API";

const initialState = {
    page: 0, 
    results: [],
    total_pages: 0, 
    total_results:0
};

export const useHomeTvDiscoverFetch = () => {

    const [state, setState] = useState(initialState);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchDiscover = async (page) => {

        setError(false);
        setLoading(true);
        try{
            const tvShow= await API.fetchTvDiscover;

            setState((prev) => ({
                ...tvShow,
                results:
                  page > 1 ? [...prev.results, ...tvShow.results] : [...tvShow.results],
              }));
        }
        catch{
            setError(true);
        }
       setLoading(false);
    }

    useEffect(() => {
        setState(initialState);
        fetchDiscover(1);
      }, []);

      useEffect(() => {
        if (!isLoadingMore) return;

        fetchDiscover(state.page + 1);
        setIsLoadingMore(false);
      }, [isLoadingMore, state.page])

      return { state, loading, error, setIsLoadingMore};

};