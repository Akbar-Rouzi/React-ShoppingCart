import { useState } from 'react'
import { PRODUCTS } from './products';
import Header from './components/Header';
import Shop from './components/Shop';

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: []
  })

  function handleAddItemToCart(id) {
    setShoppingCart(prevShopingCart => {
      const updatedItems = [...prevShopingCart.items]; // created a shallow copy of array 
      
      const existingCartItemIndex = updatedItems.findIndex(
        cartItem => cartItem.id === id
      )
      const existingCartItem = updatedItems[existingCartItemIndex]
     
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1
        }
        updatedItems[existingCartItemIndex] = updatedItem
      } else {
        const productItem = PRODUCTS.find(product => product.id === id);
        updatedItems.push({
          id: id,
          name: productItem.title,
          price: productItem.price,
          quantity: 1,
        })

      }

      return {
        items: updatedItems
      };
    });
  }


  return (
    <>
      <Header cart={shoppingCart} />
      <Shop onAddItemToCart={handleAddItemToCart} />
    </>
  )
}

export default App
