import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch} from 'react-router-dom'; 

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Navigation from './Components/Navigation';

class App extends React.Component {

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
        </div>
      </BrowserRouter>
    )
  }
}

export default App;