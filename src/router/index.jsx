"use strict"
import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"

import Editor from "../pages/editor"

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Editor />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
