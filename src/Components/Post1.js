import React from 'react';
import axios from 'axios';

class Post1 extends React.Component {
    constructor() {
        super();
        this.state = {
            name : "",
            age: "",
            message :"",
            loading : false,
            hasError : false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    
    postData = (e) => {
        e.preventDefault();
        const {name, age} = this.state;

        this.setState({
            loading: true
        })

        const data = {
            name,age
        }

        axios.post('http://jsonplaceholder.typicode.com/posts', data)
        .then((res) => {
            console.log(res);
            this.setState({
                loading : false,
                message : res.data.id
            })
        })
        .catch((error) => {
            console.log(error);
            this.setState({
                hasError : true
            })
        })
    }

    handleShowMessage = () =>{
        if(this.state.loading) {
            return <p>Loading....</p>
        } else {
            return <p>{this.state.message}</p>
        }
    }



    render() {
        return(
            <div>
                <h1>Post method Final</h1>
                <form onSubmit={this.postData}>
                    <input type= "text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                {this.handleShowMessage()}
            </div>
        )
    }
}

export default Post1;