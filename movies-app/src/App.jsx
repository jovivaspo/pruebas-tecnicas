import { Movie } from "./components/Movie"
import { useFormMovies } from "../hooks/useFormMovies"
import { Form } from "./components/Form"

function App() {

	const {movies, search, error, loading, sort, handlerChange, handlerSubmit, handlerCheck} = useFormMovies()

	console.log(movies)

	return (
		<div className="App">
			<header>
				<h1>Aplicación de películas</h1>
				<Form search={search} handlerChange={handlerChange} handlerSubmit={handlerSubmit} />
				<label htmlFor="sort">Ordenar</label>
				<input type="checkbox" id="sort" checked={sort} onChange={handlerCheck}/>
				{error && <p>{error}</p>}
				{loading && <p>Cargando...</p>}
			</header>
			<main>
				<div className="grid-movies">
					{movies.length > 0 && (
						<>
							{movies.map(movie=>{
								return(
									<Movie movie={movie} key={movie.imdbID}/>
								)
							})}
						</>
					)}
				</div>
			</main>
		</div>
	)
}

export default App
