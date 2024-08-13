import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { Error404Container } from "./components/Error404Container"
import { NavBar } from "./components/NavBar"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element = {<Error404Container/>} />
          <Route path="/" element= {<ItemListContainer/>} />
          <Route path="/category/:id" element= {<ItemListContainer/>} />
          <Route path="/item/:id" element= {<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
