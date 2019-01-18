import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { 
      itemArray: [
        {
          'name': 'fringe',
          'zIndex': 10,
        },
        {
          'name': 'topa',
          'zIndex': 5,
        },
        {
          'name': 'topb',
          'zIndex': 6,
        },
        {
          'name': 'bottom',
          'zIndex': 4,
        },
        {
          'name': 'back',
          'zIndex': -10,
        },
        {
          'name': 'eyes',
          'zIndex': 2,
        },
        {
          'name': 'eyebrows',
          'zIndex': 11,
        },
        {
          'name': 'mouth',
          'zIndex': 11,
        },
        {
          'name': 'dress',
          'zIndex': 5,
        },
        {
          'name': 'shoes',
          'zIndex': 1,
        },
        {
          'name': 'hat',
          'zIndex': 11,
        },
        {
          'name': 'acc',
          'zIndex': 9,
        },
        {
          'name': 'ltph',
          'zIndex': 11,
        },
        {
          'name': 'beard',
          'zIndex': 7,
        },
        {
          'name': 'eyewear',
          'zIndex': 9,
        },
        {
          'name': 'emotion',
          'zIndex': 1,
        },
        {
          'name': 'other',
          'zIndex': 12,
        },
        {
          'name': 'cape',
          'zIndex': -1,
        },
        {
          'name': 'scarf',
          'zIndex': 8,
        },
        {
          'name': 'base',
          'zIndex': 0,
        },
      ],

    };
  }

  componentDidMount() {
  }

  doll() {
    return (
      <div>
        {this.state.itemArray.map((doll) =>
          <img 
            key={doll.name} 
            id={doll.name} 
            alt={doll.name} 
            className="doll" 
            style={{ zIndex: doll.zIndex }}
          />          
        )}
      </div>
    );

  }

  render() {
    return (
      <div className="App">
        {this.doll()}
      </div>
    );
  }
}

export default App;
