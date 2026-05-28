import React from 'react';
import { Component } from 'react';

class ClassChild extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name : props.name,
            age : props.age,
            count:0,
        }
    }

    handleClick = () => {
        this.setState({
            name : "shivani singh",
            age : 29
        })
    }
    handleIncrement = () => {
        this.setState({
            count:this.state.count +1
        })
    }
    handleDecrement = () => {
        this.setState({
            count:this.state.count -1
        })
    }
    handleReset =()=>{
        this.setState({
            count:0
        })
    }
    render(){
        return(
            <div>
                <h2>Name : {this.state.name}</h2>
                <h2>Age : {this.state.age}</h2>
                <button onClick={this.handleClick} className='btn btn-primary'>click</button>


                <br/>
                <br/>
                <h1 className='text-5xl'>Count :{this.state.count}</h1>
                <button onClick={this.handleIncrement} className='btn btn-success'>Increment</button>
                <button onClick={this.handleDecrement} className='btn btn-warning'>Decrement</button>
                <button onClick={this.handleReset} className='btn btn-danger'>Reset</button>
            </div>
        )
    }
}
export default ClassChild;