import React from 'react';
//Router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import HomeTv from './components/HomeTv' 
import NotFound from './components/NotFound';
import TvShow from './components/TvShow';

//Style
import { GlobalStyle } from './GlobalStyle';


const App = () => {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/:movieId' element={ <Movie/> } />
        <Route path='/tv' element={ <HomeTv/>} />
        <Route path='/tv/:tvId' element={ <TvShow/> } />
        <Route path='*' element={ <NotFound/> }/>
      </Routes>
      </Router>
      <GlobalStyle />
      </div>
    
  );
}

export default App;
