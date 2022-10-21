import { useEffect } from 'react'
import api from './api'
import './App.css'
import { Menu } from './components/Menu'
import Navbar from './components/Navbar'

function App() {

  useEffect(() => {
    api.games.getCatalogOffer()
        .then((catalog) => console.log(catalog) )
  }, [])
  
  return (
    <div className='w-full'>
      <Navbar fixed={false}/>
      
      <div className='flex'>
         <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
         <img src="https://picsum.photos/200/300" alt="2" />
         <img src="https://picsum.photos/id/237/200/300" alt="3" />
         <img src="https://picsum.photos/200/300?grayscale" alt="4" />
      </div>
    </div>
  )
}

export default App
