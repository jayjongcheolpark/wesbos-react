import React, { Component } from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends Component {

  render() {
    return (
      <div>
        <h2>AddFishForm</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Add Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory