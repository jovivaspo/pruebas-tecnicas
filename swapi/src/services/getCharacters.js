export const getCharacters = (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(json => (json.results))
    .catch(err => {
      console.log(err)
      throw new Error('Error en la búsqueda')
    })
}
