import {Link, link} from 'react-router-dom'
import {Button, button} from "semantic-ui-react"

export default () => {
  return(
    <>
    <h1>Home</h1>
    <Link to='/planets'><Button>Planets</Button></Link>
    <Link to= '/droids'><Button>Droids</Button></Link>
    <Link to='/about'><Button>About</Button></Link>
    </>
  )
}

export default Home
