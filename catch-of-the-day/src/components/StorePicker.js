import React, { Component } from 'react'
import { getFunName } from '../helpers'


class StorePicker extends Component {
  goToStore(event) {
    event.preventDefault()
    const storeId = this.storeInput.value
    console.log(`Going to ${storeId}`)
    this.props.history.push(`/store/${storeId}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={(input) => { this.storeInput = input }}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker