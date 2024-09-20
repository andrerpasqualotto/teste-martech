import { Header } from './components/header'
import './App.css'
import ProductsList from './components/products-list'
import ShoppingCartDrawer from './components/shopping-cart-drawer'
import {useShoppingCart} from './context/shopping-cart'
function App() {

  return (
     <> <ShoppingCartDrawer/>
    <div className='bg-primary-foreground'>
    <Header></Header>

    <ProductsList/>
    </div></>
  )
}

export default App
