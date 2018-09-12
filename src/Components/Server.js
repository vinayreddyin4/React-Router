import React from 'react';
import axios from 'axios';

class Server extends React.Component {

constructor(props){
    super(props);
    this.state = {
        name : '',
        age : '',
        loading : false,
        meassage : ''
    }
}


postData = (e) => {
    e.preventDefault();

    const name = this.state.name;
    const age = this.state.age;

    this.setState({
        loading: true
    })



    const data = {
        name,
        age
    }

    
    axios.post('/t/mwybf-1536637265/post', data)
    .then( (response)  => {
        this.setState({
            loading : false,
            meassage : response.data
        })
        console.log(response);
    })
    .catch((error) => {
        console.log("error occoured during fetching", error);
        this.setState({
            loading : false
        })
    });
} 

handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}


loadOrShowMsg = () => {
    if(this.state.loading) {
        return <p> Loading....</p>
    } else { 
        return <p>{this.state.meassage} </p>
    }
}

    render() {
        return (
            <div>
                <form onSubmit = {this.postData}>
                    <input type ="text"  name="name" value={this.state.name} onChange={this.handleChange}/>
                    <input type ="text"  name="age" value={this.state.age} onChange={this.handleChange}/>
                </form>
                {this.loadOrShowMsg()}
            </div>
        )
    }
}

export default Server;