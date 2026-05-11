import React, { Component } from 'react'

export default class LifecycleChild extends Component {
 
    componentWillUnmount(){
        console.log("--- child unmouted ---")
    }
 
    render() {
    return (
      <div>i am child comp</div>
    )
  }
}
