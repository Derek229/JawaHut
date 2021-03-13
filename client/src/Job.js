import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useHistory, Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

const Job = () => {

  const {id} = useParams()


  const [job, setJob] = useState({})
  let history = useHistory()


  const getJob = async () => {
    try {
      let res = await axios.get(`/jobs/${id}`)
      console.log(res)
      setJob(res.data)
    }
    catch (err) {
      alert('error check console')
    }
  }

  const deleteJob = async () => {
      let res = await axios.delete(`/jobs/${id}`)
      history.push('/jobs')
    }

  useEffect(() => {
    getJob()
  },  [])

  return (
    <>
    <div>
      <p>ID: {job.id}</p>
      <h1>{job.name}</h1>
      <h3>Company: {job.company}</h3>
      <h3>Hourly_rate: {job.Hourly_rate}</h3>

    </div>
    <br />
    <Link to={`/jobs/${id}/edit`}>
      <Button>Edit Job</Button>
    </Link>

    <Button onClick={deleteJob} color='red'>Delete Job</Button>
  
    
    </>
  )
}

export default Job