import PropTypes from "prop-types"

export const Movie = ({movie}) => {
	return (
		<article>
			<img src={movie.Poster} alt={movie.Title} />
			<h4>{movie.Title}</h4>
			<p>{movie.Year}</p>
		</article>
	)
}

Movie.propTypes = {
	movie: PropTypes.object.isRequired
}
