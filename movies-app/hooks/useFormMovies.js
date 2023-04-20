import { useMemo, useRef, useState } from "react"
import { getMovies } from "../src/services/getMovies"

export const useFormMovies = () => {
	const [search, setSearch] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const [movies, setMovies] = useState([])
	const [sort, setSort] = useState(false)

	const searchRef = useRef(search)

	const handlerCheck = () =>{
		setSort(!sort)
	}

	const handlerChange = (e) => {
		setSearch(e.target.value)
	}

	const handlerSubmit = (e) => {
		e.preventDefault()

		if(!search){
			setError("Es necesario indicar una película")
			return
	   }

	   if(searchRef.current === search) return
	   searchRef.current = search
       
	   setLoading(true)
	   setError("")
	   setMovies([])

	   getMovies(search).then(res=>{
			if(res.Error){
				return setError("Error al buscar película")
			}
			
			setMovies(res.Search)
	   })
	   .catch(error=>
				setError(error.message))

	   setLoading(false)

	   }

	   const sortMovies = useMemo(()=>{
		console.log("ordenando")
		const sortedMovies = !sort? movies : movies.sort((a,b)=>a.Title.localeCompare(b.Title))
		return sortedMovies
	   },[movies, sort])
	   

	return {handlerChange, handlerSubmit, handlerCheck, sort, search, error, loading, movies: sortMovies}
}