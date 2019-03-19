import React, { Component } from 'react';
import './App.css';

import Header from './components/stateless/Header'
import Title from './components/stateless/Title'

import { citiesList, MoviesList } from './components/stateless/Lists'   // Importamos valores en minúscula, componentes (funcionales o de clase) en mayúsucula
import DynamicMoviesList from './components/stateful/DynamicMoviesList'

class App extends Component {

  render() {

    return (

      <main className="App">

        <Header />

        <section>

          <Title text="Listado de ciudades" />
          <ul>{citiesList}</ul>


          <Title text="Listado de películas estático" />
          <MoviesList />


        </section>


        <section>


          <Title text="Listado de películas dinámico" />
          <DynamicMoviesList />


        </section>


      </main>
    )
  }
}

export default App;
