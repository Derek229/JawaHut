import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

const NewPlanetForm = () => {
	const [name,setName] = useState ('')
	const history = useHistory ()

	const handleSubmit = async () => {
		try{
			axios.post(`/planets`, {name})
			history.goBack()
		} catch(error){
			alert('planets is not posting')
		}
	}

	return(
		<div>
			<h1>Add a New Planet</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Field>
					<label>Planet Name</label>
					<input
					value={name}
					onChange={(e)=> setName(e.target.value)}
					defaultValue={name} 
					placeholder='Name'/>
				</Form.Field>
				<Button type='submit'>Add this Planet</Button>
			</Form>
		</div>
	)
}

export default NewPlanetForm