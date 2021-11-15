import { useState, useEffect } from "react";

import API from '../API';

export const useTvShowFetch = (tvId) => {

        const [state, setState] = useState({});
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(false);


        useEffect (() => {

            const fetchTvShow = async () => {

                try{
                    setLoading(true);
                    setError(false);

                    const tvShow = await API.fetchTvShow(tvId);
                    const credits = await API.fetchTvCredits(tvId);
                    const tvDirectors = credits.crew.filter(
                        member => member.job === 'Director'
                    );

                    setState({
                        ...tvShow,
                        actors: credits.cast,
                        tvDirectors
                    });
                    setLoading(false);
                    console.log(tvShow)
                }catch( error ){
                    setError(true);
                }
                
            };
            fetchTvShow();
            
        },[tvId]);

        return {state, loading, error}

}