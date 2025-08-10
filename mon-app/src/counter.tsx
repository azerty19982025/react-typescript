import React, { Component } from 'react';
// ✅ Interface vide pour les props (aucune utilisée ici)
interface CounterProps {}

// ✅ Interface du state : count est un nombre
interface CounterState {
  count: number;
}

// ✅ La classe Counter hérite de Component avec les types définis pour props et s
class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0
  };
  // ✅ Méthode pour incrémenter le compteur
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
