import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import { Header, Footer } from './Layouts'
import Exercises from '../Exercises'
import { muscles, exercises } from '../store'

export default class extends Component {
  states = {
    exercises
  }

  render() {
    return (
      <Fragment>
        <Header />

        <Exercises exercises={exercises} />

        <Footer muscles={muscles} />
      </Fragment>
    )
  }
}
