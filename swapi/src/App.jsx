import { useEffect, useState } from 'react'
import './App.css'
import { getCharacters } from './services/getCharacters'

const URL_API = 'https://swapi.dev/api/people/?page='

function App () {
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    getCharacters(URL_API + page)
      .then(res => setCharacters(res))
      .catch(error => setError(error.message))
  }, [page])

  return (
    <>
     <header>
      <>
       <h1>Aplicación Swapi</h1>
       <p>{error}</p>
      </>

     </header>
     <main>
      {characters.length > 0 &&
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))', gap: '1rem' }}>
        {
          characters.map((el, index) => {
            return (
              <article key={el.name} style={{ border: '1px solid white' }}>
                {
                  <>
                  <p>Name: {el.name}</p>
                  <p>Height: {el.height}</p>
                  </>

                }
              </article>
            )
          })
        }
          <button onClick={() => setPage(prev => prev + 1)}>Next</button>
      <button onClick={() => setPage(prev => prev - 1)} disabled={page === 1}>Previous</button>
      </div>

      }
     </main>
    </>
  )
}

export default App
