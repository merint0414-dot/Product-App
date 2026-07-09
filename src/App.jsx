import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddProduct from './component/AddProduct'
import SearchPdroduct from './component/SearchPdroduct'
import DeleteProduct from './component/DeleteProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewProduct from './component/ViewProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddProduct/>}/>
        <Route path='/search' element={<SearchPdroduct/>}/>
        <Route path='/delete' element={<DeleteProduct/>}/>
        <Route path='/view' element={<ViewProduct/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
