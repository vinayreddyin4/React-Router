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
          <UserForm UserSubmit= {this.UserSubmit} />
          {
            this.state.repos ?  <p>this is the Events Url of John: {this.state.repos} </p> : <p> Please enter John name</p> 
          }

          <UserInput />
          {/* <App1 /> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;