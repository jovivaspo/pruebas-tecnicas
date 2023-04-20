import { useMemo, useRef, useState, useCallback  } from "react"
import { getMovies } from "../services/getMovies"
import debound from "just-debounce-it"

export const useFormMovies = () => {
	const [search, setSearch] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const [movies, setMovies] = useState([])
	const [sort, setSort] = useState(false)

	const searchRef = useRef(search)

	const debounceGetMovies = useCallback(
		debound((search)=>{
			console.log(search)
			getMoviesCallback(search)
		},700)
		,[])

	const handlerCheck = () =>{
		setSort(!sort)
	}

	const handlerChange = (e) => {
		setSearch(e.target.value)
		debounceGetMovies(e.target.value)
	}

	const handlerSubmit = (e) => {
		e.preventDefault()
		getMoviesCallback(search)
	   }

	   const getMoviesCallback = useCallback((search)=>{
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
	   }, [])

	   const sortMovies = useMemo(()=>{
		const sortedMovies = !sort? movies : movies.sort((a,b)=>a.Title.localeCompare(b.Title))
		return sortedMovies
	   },[movies, sort])
	   

	return {handlerChange, handlerSubmit, handlerCheck, sort, search, error, loading, movies: sortMovies}
}