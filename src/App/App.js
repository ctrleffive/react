import React, { Component } from 'react'
import Table from '../components/Table/Table'

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor'
      },
      {
        name: 'Mac',
        job: 'Bouncer'
      },
      {
        name: 'Dee',
        job: 'Aspring actress'
      },
      {
        name: 'Dennis',
        job: 'Bartender'
      }
    ]
  }

  removePerson = index => {
    let characters = this.state.characters.slice()
    characters = characters.filter((item, i) => i !== index)
    this.setState({ characters })
  }

  render() {
    const { characters } = this.state
    return (
      <div>
        <h1>Welcome</h1>
        <Table data={characters} removePerson={this.removePerson} />
      </div>
    )
  }
}

export default App
