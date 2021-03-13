import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './Home';
import Planets from './Planets';
import Droids from './Droids';
import Jobs from './Jobs'
import About from './About'
import NavBar from './Components/NavBar'
import {Container} from "semantic-ui-react"
import NewPlanetForm from './Components/NewPlanetForm'
function App() {
  return (
   
  <>
  <NavBar/>
  <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/planets' component={Planets} />
				<Route exact path='/planets/new' component={NewPlanetForm} />
        <Route exact path='/planets/:id' component={Droids}/>
        <Route exact path='/jobs' component={Jobs}/>
        <Route exact path='/about' component={About}/>
      </Switch>
      </Container>
  </>
  
);


}

export default App;
