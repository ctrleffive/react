import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.data.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removePerson(index)}>Remove</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { data, removePerson } = this.props

    return (
      <table border="1">
        <TableHeader />
        <TableBody data={data} removePerson={removePerson} />
      </table>
    )
  }
}

export default Table
