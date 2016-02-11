import React, { Component } from 'react'
import { create } from 'react-free-style'
const Style = create()

class StyleRoot extends Component {
  render() {
    return (
      <div className="app-container">
        {this.props.children}
        <Style.Element />
      </div>
    )
  }
}

export default Style.component(StyleRoot)
