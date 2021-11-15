import React from 'react';
// Helpers
import { calcTime } from '../../helpers';
// Styles
import { Wrapper, Content } from '../MovieInfoBar/MovieInfoBar.styles';

const TvInfoBar = ( { time, releaseDate, episodes, status }) => {
    
    return(
        <Wrapper>
            <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>First air date: {releaseDate}</p>
            </div>
            <div className="column">
                <p>Episodes: {episodes}</p>
            </div>
            <div className="column">
                <p>Status: {status}</p>
            </div>
            
            
            </Content>
        </Wrapper>

    )
}

export default TvInfoBar;