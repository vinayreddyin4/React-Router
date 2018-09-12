import React from 'react';
import axios from 'axios';


class Get extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name : '',
            age : '',
            loading : false,
            message : '',
            error : '',
            data: []
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    postData = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then( (res) => {
            console.log(res);
            this.setState({
                loading: false,
                data : res.data
            })
        })
    }
    handleShowMessage =  () => {
        if(this.state.loading) {
            return <p>Loading....</p>
        } else {
            return (
                <div>
                    {this.state.data
                        .map((item, idx )=> 
                        <div key={idx}>
                            <h3>{item.body}</h3>
                        </div>
                        )}
                </div>
            )
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.postData}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                {this.handleShowMessage()}
            </div>
        )
    }
}

export default Get;