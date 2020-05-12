import React from "react";
import "./App.css";
import Search from "./components/Search";
import ImageList from "./components/ImageList";

require("dotenv").config({ path: "./config.env" });

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `https://api.unsplash.com/search/photos?client_id=${APP_KEY}&query=${term}`
    );
    const data = await response.json();
    console.log("Results: ", data.results);

    this.setState({ images: data.results });
  };

  render() {
    return (
      <div className="App">
        <div className="ui container" style={{ marginTop: "10px" }}>
          <Search onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
          Found: {this.state.images.length} images
        </div>
      </div>
    );
  }
}

export default App;
