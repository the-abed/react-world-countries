import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const fetchPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {
  const countriesPromise = fetchPromise;
  return (
    <>
      
      <Suspense fallback={<p>Countries loading...</p>}>
        <Countries countriesPromise ={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
