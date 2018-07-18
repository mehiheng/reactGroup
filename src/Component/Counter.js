import React, { Component } from 'react';
export default class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state={
           count :0
        }
    }

    add=()=>{
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
        this.props.addTotalCount(1)
    }

    sub=()=>{
        this.setState((prevState)=>({
            count:prevState.count-1
        }))
        this.props.addTotalCount(-1)
    }


    render(){
        return(
             <div>
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <span>{this.state.count}</span>
            </div>
        )
    }
}