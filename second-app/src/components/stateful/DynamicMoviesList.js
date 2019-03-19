import React, { Component } from 'react';
import ImprovedCard from '../stateless/ImprovedCard'

class DynamicMoviesList extends Component {

    constructor() {

        // sin presencia del método super(), this retornará undefined. Es obligatorio.
        super()

        this.state = {
            movies: [
                { title: "Campamento Flappy", director: "Almodóvar", hasOscars: false, IMDbRating: 10 },
                { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
                { title: "Star Wars", director: "Rian Johnson", hasOscars: true, IMDbRating: 8.7 },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
            ],
            showOscarAwarded: false
        }
    }




    // Handlers
    deleteMovieHandler = movieIndex => {
        const moviesCopy = [...this.state.movies]     // hacemos una copia del Array para no manipoular el estado original
        moviesCopy.splice(movieIndex, 1)
        this.setState({
            movies: moviesCopy  // asignamos la copia
        })
    }


    toggleMovies = () => {
        this.setState({
            showOscarAwarded: !this.state.showOscarAwarded  // negativizamos el valor que tuviese showOscarAwarded
        })
    }



    filteredMovies;

    render() {

        // randerizamos las películas filtradas por aquellas cuyo valor en hasOscar coincida con el valor de showOscarAwarded
        this.filteredMovies = this.state.movies.filter(theMovie => theMovie.hasOscars == this.state.showOscarAwarded);

        return (
            <div>
                {
                    this.filteredMovies.map((oneMovie, index) => {
                        return <ImprovedCard
                            // Todos los componentes que sean resultado de una iteración requieren un key único para cada item
                            key={index}
                            {...oneMovie}
                            clickToDelete={() => this.deleteMovieHandler(index)}    // Transferimos un método a un componente como un atributo
                        />
                    })
                }
                <button onClick={this.toggleMovies}>Mostrar películas con oscar</button>
            </div>
        )
    }
}

export default DynamicMoviesList;