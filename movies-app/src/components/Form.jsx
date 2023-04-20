import PropTypes from "prop-types"

export const Form = ({handlerSubmit, search, handlerChange}) => {
   
	return (
		<form onSubmit={handlerSubmit}>
			<input type="text" placeholder="Matrix, Piratas del Caribe..." value={search} onChange={handlerChange} />
			<button type="submit">Enviar</button>
		</form>
	)
}

Form.propTypes = {
	handlerSubmit: PropTypes.func.isRequired,
	search: PropTypes.string.isRequired,
	handlerChange:PropTypes.func.isRequired
}
