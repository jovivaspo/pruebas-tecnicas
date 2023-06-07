import { Route } from 'wouter'
import { Header } from './components/Header'
import  Details  from './pages/Detail'
import {lazy, Suspense} from 'react'

const TopStoriesPage = lazy(()=>import('./pages/TopStories'))

function App() {

  return (
    <>
      <Header/>
      <main>
        <Suspense fallback='Loading...'>
          <Route path='/' component={TopStoriesPage} />
          <Route path='/article/:id' component={Details} />
        </Suspense>
      </main>
    
   
    </>
  )
}

export default App
