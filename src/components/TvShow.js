import React from 'react';
import { useParams } from 'react-router-dom';
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Grid from './Grid';
import TvInfo from './TvInfo';
import Spinner from './Spinner';
import BreadCrumbTv from './BreadCrumbTv';
import TvInfoBar from './TvInfoBar';
import Actor from './Actor';
// import VideoPlayer from './VideoPlayer';

// Hook
import {useTvShowFetch} from '../hooks/useTvShowFetch'
// Image

import NoImage from '../images/no_image.jpg';


const TvShow = () => {

    const { tvId } = useParams();

    const { state: tvShow, loading, error } = useTvShowFetch(tvId)
 
   if (loading) return <Spinner/>;
   if(error) return <div>Something went wrong</div>;
    return(
        <>
            <BreadCrumbTv movieTitle= {tvShow.original_name} />
            <TvInfo tvShow = {tvShow} />
            {/* <VideoPlayer video={}/> */}
            <TvInfoBar time = {tvShow.episode_run_time[0]} releaseDate= {tvShow.first_air_date} episodes= {tvShow.number_of_episodes} status={tvShow.status}/>
            <Grid header='Actors'>
                {tvShow.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl ={
                            actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        }
                        />
                ))}
            </Grid>
        </>
    )
};

export default TvShow;