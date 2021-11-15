import React from 'react';

// Components
import Thumb from '../Thumb';

//Config
import { IMAGE_BASE_URL , POSTER_SIZE} from '../../config';

// Image
import NoImage from '../../images/no_image.jpg';

// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

const MovieInfo = ({ movie }) => {

    return (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb 
                    image={
                        movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                    }
                    clickable={false}
                    />
            <Text>
                <h1>{movie.title}</h1>
                <h4>{movie.tagline}</h4>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>
                
                <div className="rating-directors-genres">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : '' }</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                    <div className="genres">
                        <h3>GENRE{movie.genres.length > 1 ? 'S' : ''}</h3>
                        {movie.genres.map(genre => (
                            <p key={genre.id}>{genre.name}</p>
                        ))}
                    </div>
                    <div className="info">
                        <h3>MORE INFO</h3>
                        <a href={movie.homepage}target='blank' rel='norefferer noopener'>Home page</a>
                    </div>
                </div>

            </Text>
        </Content>
    </Wrapper>
    );
};

export default MovieInfo;