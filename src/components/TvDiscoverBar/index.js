import  React from 'react';

import {Wrapper, Content} from '../BreadCrumb/BreadCrumb.styles'
const TvDiscoverBar = ( {discover} ) => {
    return (  
        <Wrapper>
            <Content>
                <span>{ discover }</span>
            </Content>
        </Wrapper>
    );
}
 
export default TvDiscoverBar;