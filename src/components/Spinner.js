import React, { Component } from 'react'
import SpinnerImage from './g0R9.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={SpinnerImage} alt="Loading" />
      </div>
    )
  }
}
