import React from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

import HeroImage from "./HeroImage";
import Grid from './Grid';
import ThumbTv from "./ThumbTv";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";


import { useHomeTvFetch } from '../hooks/useHomeTvFetch';


import NoImage from '../images/no_image.jpg';


const HomeTv = () => {
    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeTvFetch()
  
   
    if (error) return <div>Something went wrong!</div>
    return (
        <>
        { state.results[0] ? (
        <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_name}
        text={state.results[0].overview}
        />): null}
            
            <SearchBar setSearchTerm={ setSearchTerm }/>
        <Grid header={ searchTerm ? 'Search Result' : 'Popular Tv-shows'}>
            {state.results.map(tvShow =>(
                <ThumbTv
                key={tvShow.id}
                clickable
                image={
                    tvShow.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE +tvShow.poster_path
                    : NoImage
                }
                tvId = {tvShow.id}
                />
            ))}    
            
        </Grid>
        {loading && <Spinner /> }
       { state.page < state.total_pages && !loading && (
         <Button text='Load More' callback={ () => setIsLoadingMore(true) } />
       )}
        </>
    )

}

export default HomeTv
