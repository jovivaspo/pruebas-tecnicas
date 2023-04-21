const API_KEY = "6cde2cc4"
const API = `https://omdbapi.com/?&apikey=${API_KEY}&s=`

export const getMovies = async (search) => {
	try{
		const res = await fetch(API + search)

	const json = await res.json()
    
		return json

	}catch(error){
		console.log(error)
		throw new Error("Error al buscar película")
	}
   
}