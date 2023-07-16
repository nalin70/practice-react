import React, { Component } from 'react';

class PlayerList extends Component {
  render() {
    const { players, onSelect } = this.props;

    return (
      <div>
        <ul>
          {players.map((player) => (
            <li key={player.id} onClick={() => onSelect(player)}>
              {player.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class Detail extends Component {
  render() {
    const { player } = this.props;

    return (
      <div>
        {player ? (
          <div>
            <p>ID: {player.id}</p>
            <p>Name: {player.name}</p>
            <p>Age: {player.age}</p>
          </div>
        ) : (
          <p>No player selected</p>
        )}
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const { searchId, onSearch } = this.props;

    return (
      <div>
        <h2>Search Player</h2>
        <label htmlFor="searchInput">Search by ID:</label>
        <input
          type="text"
          id="searchInput"
          value={searchId}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  }
}

class App extends Component {
  state = {
    players: [],
    selectedPlayer: null,
    searchId: '',
  };

  componentDidMount() {
    // Simulating fetching JSON data
    // Replace this with your actual JSON data endpoint
    const playersData = [
      { id: 1, name: 'Player 1', age: 20 },
      { id: 2, name: 'Player 2', age: 22 },
      { id: 3, name: 'Player 3', age: 24 },
      { id: 4, name: 'Player 4', age: 26 },
    ];

    this.setState({ players: playersData });
  }

  handlePlayerSelect = (player) => {
    this.setState({ selectedPlayer: player, searchId: player.id });
  };

  handleSearch = (id) => {
    const { players } = this.state;
    const player = players.find((p) => p.id === Number(id));
    this.setState({ selectedPlayer: player, searchId: id });
  };

  render() {
    const { players, selectedPlayer, searchId } = this.state;

    return (
      <div>
        <h1>Player App</h1>
        <PlayerList players={players} onSelect={this.handlePlayerSelect} />
        <Detail player={selectedPlayer} />
        <Search searchId={searchId} onSearch={this.handleSearch} />
      </div>
    );
  }
}

export default App;
