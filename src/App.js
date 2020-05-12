import React from 'react';
import './App.css';
import Search from "./components/Search"

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term)
  }

  render() {
    return (
      <div className="App">
        <div className="ui container" style={{ marginTop: '10px' }}>
          <Search onSubmit={this.onSearchSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
