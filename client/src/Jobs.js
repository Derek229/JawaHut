import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button, Card} from 'semantic-ui-react'


const Jobs = () => {

  const [jobs, setJobs] = useState([])

  const getJobs = async () => {
    try{
      let res = await axios.get('/jobs')
      console.log(res)
      setJobs(res.data)
    }catch(err){
      alert('check console')
    }
  }

  useEffect(()=> {
    getJobs()
  },  [])

  const renderJobs = () =>{
    return jobs.map ( job => {
      return (
        
        <Card>
        <Card.Content>
          <Card.Header>
            <Link to={`/jobs/${job.id}`}>
              <div key={job.id}>
                <h5>{job.name}</h5>

              </div>
            </Link>
          </Card.Header>
          <Card.Description>
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
           <div >
             <Link to={`/jobs/${job.id}/`}>
                <Button >Open</Button>
             </Link>
             <Link to={`/jobs/${job.id}/edit`}>
                <Button >Edit</Button>
             </Link>
           </div>
        </Card.Content>
      </Card>
      )
    })
  }

  return (
    <>

    <h1>Jobs</h1>
      <h1 style={{display:'flex', justifyContent:'space-between'}}>
      <Link to='/Jobs/new'>
        <Button>New Job</Button>
      </Link>
      </h1>
      <Card.Group>
        {renderJobs()}
      </Card.Group>

    </>
  )
}
export default Jobs
