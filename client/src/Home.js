import {Link} from 'react-router-dom'
import {Button} from "semantic-ui-react"

export default () => {
  return(
    <>
    <h1>Home</h1>
    <Link to='/planets'><Button>Planets</Button></Link>
    <Link to= '/droids'><Button>Droids</Button></Link>
    <Link to= '/jobs'><Button>Jobs</Button></Link>
    <Link to='/about'><Button>About</Button></Link>
    </>
  )
}


