import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { Error404Container } from "./components/Error404Container"
import { NavBar } from "./components/NavBar"
import { Provider } from "./context/CartContext";
import { Cart } from './components/Cart'
import { FormOrder } from './components/FormOrder'

function App() {
  return (
    <>
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element = { <Error404Container/> } />
          <Route path="/" element= { <ItemListContainer/> } />
          <Route path="/category/:id" element= { <ItemListContainer/> } />
          <Route path="/item/:id" element= { <ItemDetailContainer/> } />
          <Route path="/cart" element= { <Cart/> } />
          <Route path="/formOrder" element={ <FormOrder /> }/>
        </Routes>
      </BrowserRouter> 
    </Provider>
    </>
  )
}

export default App
