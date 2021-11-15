import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from '../Thumb/Thumb.styles'

const ThumbTv = ({ image, tvId, clickable }) => {
    
    return(
        <div>
            { clickable ? (
                <Link to={`/tv/${tvId}`}>
                    <Image src={image} alt='tv-show-thumb' />
                </Link>
            ) : (
            <Image src={image} alt='tv-show-thumb' />
            )}
        </div>
    )
}

export default ThumbTv;