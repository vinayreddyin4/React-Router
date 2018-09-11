import React from 'react';
import axios from 'axios';


class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name : '',
            age : '',
            loading : false,
            message : '',
            error : '',
            data : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    postData = (e) => {
        e.preventDefault();

        const {name, age } = this.state;

        this.setState({
            loading: true
        })

        const data = {
            name,
            age
        }

        axios.post('http://jsonplaceholder.typicode.com/posts', data)
        .then((res) => {
            console.log(res);
            this.setState({
               loading: false,
               message: res.data.id
            })
        })
        .catch(error => {
          console.log(error);
        });
        

        // axios.get('http://jsonplaceholder.typicode.com/posts')
        // .then( (res) => {
        //     console.log(res);
        //     //const message = res.data;
        //     this.setState({
        //         loading: false,
        //         data : res.data
        //     })
           
        // })
    }

    handleShowMessage =  () => {
        if(this.state.loading) {
            return <p>Loading....</p>
        } else {
            return <p> {this.state.message}</p>
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

export default Post;