import React from 'react'
import Card from './Card'


const cities = ['Madrid', 'Valencia', 'Bilbao', 'Gijón', 'Málaga']
const citiesList = cities.map((city, index) => {
    // Todos los componentes que sean resultado de una iteración requieren un key único para cada item
    return <li key={index}>{city}</li>
})



const movies = [
    { title: "Jurassic Park", director: "Steven Spielberg" },
    { title: "Sharknado", director: "Anthony C. Ferrante" },
    { title: "Titanic", director: "James Cameron" }
]

const MoviesList = () => {
    return (
        <ul>
            {
                // Todos los componentes que sean resultado de una iteración requieren un key único para cada item
                movies.map((oneMovie, index) => <Card key={index} {...oneMovie} />)
            }
        </ul>
    )
}

// exportamos dato en minúscula, componente en mayúscula
// la exportación nominal (named) no tiene 'default', se representa entre llaves y debe respetarse el nombre en la importación
export { citiesList, MoviesList }