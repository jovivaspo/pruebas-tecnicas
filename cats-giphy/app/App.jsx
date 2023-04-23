import React, { useEffect, useState } from 'react'
import './App.css'

const API_KEY_GIPHY = '36JNJOj088JRnsPw3mlago2mDzHOqGS3'
const URL_CATS = 'https://catfact.ninja/fact'
const URL_GIPHY = 'https://api.giphy.com/v1/gifs/search?api_key='

export const App = () => {
  const [fact, setFact] = useState(null)
  const [gif, setGif] = useState(null)
  useEffect(() => {
    fetch(URL_CATS)
      .then(res => res.json())
      .then(json => setFact(json.fact))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (!fact) return
    const search = fact.split(' ').slice(0, 3).join(' ')
    fetch(URL_GIPHY + `${API_KEY_GIPHY}&q=${search}`)
      .then(res => res.json())
      .then(json => setGif(json.data[0]))
      .catch(error => console.log(error))
  }, [fact])

  return (
    <>
    <header><h1>Prueba técnica</h1></header>
    <main>
        <div className='row'>
            <div className='col col-title'>
                {fact && gif && (
                    <p>Fact: {fact}</p>
                )}
            </div>

                <div className='col col-img'>
                    {gif ? <img src={gif.images.original.webp} alt={gif.title} /> : <p>Loading...</p>}
                    </div>

        </div>

    </main>
    </>
  )
}
