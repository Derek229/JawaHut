import axios from 'axios'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Planets = () => {
	const [planets,setPlanets] = useState ([])


	useEffect(()=>{
		console.log('Show UseEffect is working')
		getPlanets()
	},[])

	const getPlanets = async () =>{
		try{
			let res = await axios.get('/planets')
			setPlanets(res.data)
		} catch(err){
			alert('error occured look at console')
		}
	}
 

 const renderPlanets =()=>{
	return planets.map( planet => {
		return(
			<Link to={`/planets/${planet.id}`}>
				<div>
					{planet.name}
				</div>
			</Link>
		)
	})
	}


  return (
    <div>
      <h1>Hello</h1>
			{renderPlanets()}
    </div>
  )
}

export default Planets
