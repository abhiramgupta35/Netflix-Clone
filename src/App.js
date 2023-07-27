import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { Originals, Action, Trending, ComedyMovies } from './Url';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      <RowPost url={Originals} title='Netflix Originals' />
      <RowPost url={Action} title='Action' isSmall />
      <RowPost url={Trending} title='Trending' isSmall />
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall />
      

    </div>
  );
}
export default App;
