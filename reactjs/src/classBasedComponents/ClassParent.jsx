import React from 'react';
import { Component } from 'react';
import ClassChild from './ClassChild';

class ClassParent extends React.Component {
    render(){
        return(
            <div>
                <h1>Class Parent   </h1>
                <ClassChild name = "shivani" age = {23}/>
            </div>
        )
    }
}
export default ClassParent;