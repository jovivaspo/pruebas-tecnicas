import "./App.css"
import { useEffect, useMemo, useRef, useState } from "react"

const API = "https://randomuser.me/api?results=100"

function App() {

	const [users, setUsers] = useState([])
	const [colorRows, setColorRows] = useState(false)
	const [sortedBy, setSortBy] = useState(null)
	const [search, setSearch] = useState("")
	const usersRef = useRef(users)


	useEffect(()=>{
		fetch(API).then(res=>res.json())
			.then(json=>{
				usersRef.current = json.results
				setUsers(json.results)})
			.catch(err=>console.log(err))
	},[])

	const handlerColor = () => {
		setColorRows(!colorRows)
	}


	const handlerDelete = (user) => {
		const newUsers = users.filter(el=>el.login.uuid !== user.login.uuid )
		setUsers(newUsers)
	}

	const handlerReset = () => {
		setUsers(usersRef.current)
	}

	const usersFilteredByCountry = useMemo(()=>{

		return search? 

			[...users].filter((el)=>el.location.country.toLowerCase().includes(search.toLocaleLowerCase()))

			:

			users

	},[search, users])

	const usersSortedByCountry = useMemo(()=>{

		if(!sortedBy) return usersFilteredByCountry
	
		const compareProperties = (user) => ({
			country:user.location.country,
			first: user.name.first,
			last: user.name.last
		})

		return [...usersFilteredByCountry].sort((a, b)=>compareProperties(a)[sortedBy].localeCompare(compareProperties(b)[sortedBy]))
		
	},[sortedBy, usersFilteredByCountry])
  

	return (
		<>
			<header><h1>Aplicación de usuarios</h1></header>
			<div>
				<button onClick={handlerColor}>Cambiar color</button>
				<button onClick={()=>setSortBy("country")}>Ordenar por país</button>
				<button onClick={handlerReset}>Reset</button>
				<input type="text" placeholder="Ordenar por país" onChange={(e)=>setSearch(e.target.value)}  />
			</div>
			<main>
				{users.length > 0 && <table width="100%">
					<thead>
						<tr>
							<th>
            Foto
							</th>
							<th>
								<button onClick={()=>setSortBy("first")}>Nombre</button>
							</th>
							<th>
								<button onClick={()=>setSortBy("last")}>Apellidos</button>
							</th>
							<th>
								<button onClick={()=>setSortBy("country")}>País</button>
							</th>
							<th>
            Acciones
							</th>
						</tr>
					
					</thead>
					<tbody>
						{ usersSortedByCountry.map((user,key)=>{
							return(
								<tr key={user.login.uuid} style={{backgroundColor: colorRows? (key % 2 ===0? "grey" : "white") : "transparent"}}>
									<td>
										<img src={user.picture.thumbnail} alt={user.name.first} />
									</td>
									<td>
										<p>
											{user.name.first}
										</p>
									</td>
									<td>
										<p>
											{user.name.last}
										</p>
									</td>
									<td>
										<p>
											{user.location.country}
										</p>
									</td>
									<td>
										<p>
											<button onClick={()=>handlerDelete(user)}>Borrar</button>
										</p>
									</td>
								</tr>
							)
						})}

					</tbody>
				</table>}
				
			</main>
		</>
	)
}

export default App
