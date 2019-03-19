import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Title from './components/Title'
import User from './components/User'

class App extends Component {

  state = {
    userA: {
      firstName: "Harper",
      lastName: "Perez",
      avatarUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/dogdog-profile_image-5550ade194780dfc-300x300.jpeg"
    },
    userB: {
      firstName: "Ana",
      lastName: "Hello",
      avatarUrl:
        "http://rockykanaka.com/wp-content/uploads/2018/06/Blossom-smiling-300x300.jpg"
    },
    clickCount: 0,
    backColor: 'green'
  }


  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }


  // manejadores de eventos
  clickHandler = () => {

    if (newCount < 5) {
      this.setState({
        clickCount: this.state.clickCount + 1
      })
    } else {
      this.setState({
        clickCount: 5,
        backColor: this.colorMapper(),
        userA: {
          firstName: "Nuevo nombre",
          lastName: "Nuevo Apellido",
          avatarUrl:
            "https://static-cdn.jtvnw.net/jtv_user_pictures/dogdog-profile_image-5550ade194780dfc-300x300.jpeg"
        }
      })
    }
  }




  render() {

    return (

      <main className="App">



        <Header />



        <section>
          <Title text="Sistema de cambio de estado" />
          <p>Botón presionado {this.state.clickCount} veces</p>
          <button onClick={this.clickHandler}>Hazme click para cambiar el estado</button>
        </section>




        <section className="usuarios">
          <Title text="Lista de usuarios:" />

          <div>
            <User
              firstName={this.state.userA.firstName}
              lastName={this.state.userA.lastName}
              image={this.state.userA.avatarUrl}
              color={this.state.backColor}
            />
            <User
              firstName={this.state.userB.firstName}
              lastName={this.state.userB.lastName}
              image={this.state.userB.avatarUrl}
              color={this.state.backColor}
            />
          </div>

        </section>
      </main>
    )
  }
}

export default App;
