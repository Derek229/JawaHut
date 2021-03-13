import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'


const NewJobForm = () => {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [yearly_rate, setYearly_rate] = useState('')
  const history = useHistory()

  const handleSubmit = () => {
    try{
      axios.post(`/jobs`, {name, company, yearly_rate})
      history.push(`/jobs`)
    }catch(err){
      alert('error check console')
    }
  }


  return (
    <div>
      <Form>
      </Form>

      <h1>New job Form Here</h1>
      <Form onSubmit={handleSubmit}>
          <label>Name</label>
            <input 
              value = {name}
              onChange={(e)=>setName(e.target.value)}
              placeholder='Name'
            />
            <br />
            <input 
              value = {company}
              onChange={(e)=>setCompany(e.target.value)}
              placeholder='Company'
            />
            <br />
            <input
            value = {yearly_rate}
            onChange={(e)=>setYearly_rate(e.target.value)}
            placeholder='yearly_rate'
            />
        <Button type="submit">Add</Button>
      </Form>
    </div>
  )
}
export default NewJobForm