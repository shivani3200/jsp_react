import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(){
        super();

        this.state={
            hasError:false 
        }
    }
    //returns updated state in the form of obj
    //captures error -> display error message on ui

    static getDerivedStateFromError(){
        return {
            hasError:true
        }
    }
  render() {
    return (
      {
 if(this.state.hasError === true){
            return <h1>limit exceeded!! kindly check.</h1>
        }else{
            return this.props.children
        }
  }
}

export default ErrorBoundary