import React from 'react';

class Parent extends React.Component {

    handleStatus = (event) => {
        alert("hello my friend");
    }

    render() {
        return (
            <div>
                <h3> Hello</h3>
                <Child  handleStatus={this.handleStatus}/>
            </div>
        )
    }
}
export default Parent;

class Child extends React.Component {

    render(){
        return(
            <div>
                <button onClick={this.props.handleStatus}> Hit me</button>
            </div>
        )
    }
}
