import React from 'react';
import axios from 'axios';

import PropTypes from 'prop-types '

class Get1 extends React.Component {
    constructor () {
        super();
        this.state = {
            data : [],
            hasError : false
        }
    }

    getData = (e) => {
        e.preventDefault();

        axios.get("http://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            console.log(res);
            this.setState({
                data: res.data
            })
        })
        .then((error) => {
            console.log(error);
            this.setState({
                hasError : true

            })
        })
    }

    render() {
        return(
            <div>
                <h1>Making Api call to get Data</h1>
                <button onClick ={this.getData}>Click me to get the response </button>
                {
                    this.state.data.map((item, idx) => 
                <div key={idx}>
                    <span>{item.id}.</span> 
                    <span>{item.title}</span>
                    <span> {item.body}</span>
                    <hr />
                </div>)
                }
            </div>
        )
    }
}

export default Get1;

Greetings.propTypes = {
    name : PropTypes.string
}