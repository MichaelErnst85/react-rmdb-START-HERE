import React from 'react';
// Helpers
import { calcTime, convertMoney } from '../../helpers';
// Styles
import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ( { time, releaseDate, budget, revenue }) => {
    
    return(
        <Wrapper>
            <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Released: {releaseDate}</p>
            </div>
            <div className="column">
                <p>Budget {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue {convertMoney(revenue)}</p>
            </div>
            
            </Content>
        </Wrapper>

    )
}

export default MovieInfoBar;