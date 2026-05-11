import React, { Component } from 'react'
import LifecycleChild from './LifecycleChild';

export default class LifecycleParent extends Component {

    constructor(){
        super();

        this.state={
            student:"shivani"
        }

        console.log("cnstr call")
    }

    static getDerivedStateFromProps(){
        console.log("static getderived is executing")
        return null;
    }

    componentDidMount(){
        console.log("cdm is executing")
    }

    shouldComponentUpdate(){
      console.log("should comp update")
      return true;
    }
    getSnapshotBeforeUpdate(){
      console.log("snapshot")
      return null;
    }
    componentDidUpdate(){
      console.log("comp did update")
    }

    handleClick = () =>{
      this.setState({student:"kumari"})
    }

  render() {
    console.log("render")
    return (
      <>
      <h1>{this.state.student}</h1>
      {this.state.student=="shivani"?<LifecycleChild/>:<></>}
      <button onClick={this.handleClick}>click</button>
      </>
    )
  }
}
