import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      job: ''
    }

    this.state = this.initialState
  }

  dataChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  dataSubmit = event => {
    this.props.dataSubmit(this.state)
    this.setState(this.initialState)
    event.preventDefault()
  }

  render() {
    const { name, value } = this.state

    return (
      <form onSubmit={this.dataSubmit} action="#">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={this.dataChange} />
        <label htmlFor="job">Job</label>
        <input type="text" name="job" value={value} onChange={this.dataChange} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
