import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./Home"
import Login from "./Login"

import "semantic-ui-css/semantic.min.css"

export default class extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/home" component={ Home }/>
          <Route exact path="/login" component={ Login }/>
        </Switch>
      </div>
    )
  }
}