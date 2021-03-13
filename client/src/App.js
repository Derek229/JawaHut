import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './Home';
import Planets from './Planets';
import Droids from './Droids';
import NavBar from './Components/NavBar'
import {Container} from "semantic-ui-react"
function App() {
  return (
   
  <>
  <NavBar/>
  <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/planets' component={Planets} />
        <Route exact path='/planets/:id' component={Droids}/>
      </Switch>
      </Container>
  </>
  
);


}

export default App;
