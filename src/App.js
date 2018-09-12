import React from 'react';

import axios from 'axios';

import { BrowserRouter, Route, Switch} from 'react-router-dom'; 

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Navigation from './Components/Navigation';
import UserForm from './Components/UserForm';
import UserInput from './Components/UserInput';
//import App1 from './sample';
import MyRef from './Components/Reference';
import ReturnAry from './Components/ReturnAry';
import Functional from './Components/Functional';
import Parent from './Components/ChildToParent';
import Form from './Components/Form';
import Server from './Components/Server';
import Post from './Components/Post';
import Get from './Components/Get';
import Validation from './Components/Validation'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      repos : null
    }
  }

  UserSubmit = (e) => {
    e.preventDefault();
   // const user = e.target.elements.username.value;
  axios.get('https://api.github.com/users/john')
  .then((res) => {
    console.log(res);
    const repos = res.data.events_url;
    this.setState({ repos })
  })
  .catch((error) => {
    console.log(error);
  });
  }

componentDidMount(){
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

  render() {
    return( 
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path ="/" component= {Home} exact/>
            <Route path = "/about" component= {About} />
            <Route path = "/contact" component={Contact} />
            <Route component= {Error} />
          </Switch>
          <hr/>
          <UserForm UserSubmit= {this.UserSubmit} />
          {
            this.state.repos ?  <p>this is the Events Url of John: {this.state.repos} </p> : <p> Please enter John name</p> 
          }
          <hr/>
          <UserInput />
          {/* <App1 /> */}
          <hr/>
          <div>
            <MyRef />
          </div>
          <hr/>
          <div>
            <ReturnAry />
          </div>
          <hr/>
          <Functional />
          <div>
            <Parent />
          </div>
          <Form />
          <div>
            <Server />
          </div>
          <div>
            <Post />
          </div>
          <hr />
          <div>
            <Get />
          </div>
          <hr />
          <div>
            <Validation />
            </div>
          
        </div>
      </BrowserRouter>
    )
  }
}

export default App;