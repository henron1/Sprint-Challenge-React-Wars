import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList.js'
import Character from './components/CharacterList'

const dataList = [
  {
    name:'something',
    homeworld:''
  },
  {
    name:'luke',
    homeworld:''
  },
  {
    name:'han',
    homeworld:''
  },
  {
    name:'whatever',
    homeworld:''
  },
]
  
  


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      
    };
  }

// handleChanges = event => {
//   this.setState({ [event.target.name]: event.target.value })
// };

// addNewCharacter = event => {
//   event.preventDefault();
//   this.setState({
//     starwarsChars: [
//       ...this.state.starwarsChars,
//       { name:this.state.starwarsChars.name,  homeworld: this.state.starwarsChars.homeworld } 
//     ], 
//     name: ''
//   });
// };





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
         <CharacterList 
        starwarsChars={this.state.starwarsChars}
        /> 
        {/* <Character 
        
        /> */}
      </div>
    );
  }
}

export default App;
