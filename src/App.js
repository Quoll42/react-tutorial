// From https://www.taniarascia.com/getting-started-with-react/
import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

  removeCharacter = index => {
    const { characters } = this.state; //This is ES6 shorthand

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { characters } = this.state; //This is ES6 shorthand

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}

export default App;
