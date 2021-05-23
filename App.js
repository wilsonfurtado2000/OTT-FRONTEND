import React  from 'react';
import './App.css';
import Row from './Row';
import requests from "./requests";
import Banner from './Banner';
import Nav from './Nav';



function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
    <Row title="TRENDING NOW" fetchURL={requests.fetchTrending} isLargeRow />
    <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
    <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
    <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
    <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
    <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies} />

  
    </div>
  );
}

export default App;
