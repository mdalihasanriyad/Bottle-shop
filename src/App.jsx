import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlePromise= fetch('bottles.json').then(res=>res.json())

function App() {
  return (
    <>
      <h1 className='text-5xl text-center my-10 font-semibold'>Buy Awesome Water Bottle</h1>
      <Suspense fallback={<div className='text-center text-2xl'>Loading...</div>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  )
}
export default App
