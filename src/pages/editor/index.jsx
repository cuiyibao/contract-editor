import React, { Component } from "react"
import "./index.less"

export default class Editor extends Component {
  handleBold() {
    console.log("bold")
    console.log(document.execCommand)
    document.execCommand("Bold", "false", null)
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="btn-wrapper">
          <div
            className="btn-item"
            onClick={this.handleBold}
          >
            加粗
          </div>
          <div className="btn-item">斜体</div>
          <div className="btn-item">下划线</div>
        </div>
        <div className="editor-wrapper" contentEditable>
          <p>标题1</p>
        </div>
      </div>
    )
  }
}
