import React from 'react';


// Components
import ThumbTv from '../ThumbTv';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import NoImage from '../../images/no_image.jpg';

// Styles
import { Wrapper, Content, Text } from '../MovieInfo/MovieInfo.styles';

const TvInfo = ({ tvShow }) => {

    return(
        <Wrapper backdrop={tvShow.backdrop_path}>
            <Content>
                <ThumbTv 
                image={
                    tvShow.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${tvShow.poster_path}`
                    : NoImage
                }
                clickable={false}
                />
                <Text>
                <h1>{tvShow.name}</h1>
                <h4>{tvShow.tagline}</h4>
                <h3>PLOT</h3>
                <p>{tvShow.overview}</p>
                
                <div className="rating-directors-genres">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{tvShow.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>CREATOR{tvShow.created_by.length > 1 ? 'S' : '' }</h3>
                        {tvShow.created_by.map(creator => (
                            <p key={creator.credit_id}>{creator.name}</p>
                        ))}
                    </div>
                    <div className="genres">
                        <h3>GENRE{tvShow.genres.length > 1 ? 'S' : ''}</h3>
                        {tvShow.genres.map(genre => (
                            <p key={genre.id}>{genre.name}</p>
                        ))}
                    </div>
                    <div className="info">
                        <h3>MORE INFO</h3>
                        <a href={tvShow.homepage}
                        target='blank' rel='norefferer noopener'>Home page</a>
                    </div>
                </div>

            </Text>
            </Content>
        </Wrapper>
    );
};

export default TvInfo;