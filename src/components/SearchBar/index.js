import React, { useState, useEffect, useRef }from 'react';
import { useResolvedPath } from 'react-router-dom';
//image
import searchIcon from '../../images/search-icon.svg';
//styles
import { Wrapper, Content } from '../SearchBar/SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('');
    const initial = useRef(true)


     useEffect(() => {

        if (initial.current) {
            initial.current = false;
            return;
        }
         const timer = setTimeout(() => {
             setSearchTerm(state);
         },500)

         return () => clearTimeout(timer);
     }, [setSearchTerm ,state])   
   
     return (

        <Wrapper>
            <Content>
                <img src = { searchIcon } alt='search-icon' />
                <input 
                    type='text' 
                    placeholder="Search"
                    onChange={ e => setState(e.currentTarget.value)}
                    value= {state}
                    />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;

