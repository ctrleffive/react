import React, { Component } from 'react'
import Table from '../components/Table/Table'
import Form from '../components/Form/Form'

class App extends Component {
  state = {
    characters: []
  }

  removePerson = index => {
    let characters = this.state.characters.slice()
    characters = characters.filter((item, i) => i !== index)
    this.setState({ characters })
  }

  submitForm = character => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }

  render() {
    const { characters } = this.state
    return (
      <div>
        <h1>Welcome</h1>
        <Form dataSubmit={this.submitForm} />
        <Table data={characters} removePerson={this.removePerson} />
      </div>
    )
  }
}

export default App
