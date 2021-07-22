import { useEffect, useState } from 'react'
// Components
import {
  Drawer,
  LinearProgress,
  Grid,
  Badge,
  Container,
  Box
} from '@material-ui/core'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import Item from '../../components/Item'
import Cart from '../../components/Cart'

// Services
import { getProducts } from '../../services/productsApi'

// Styles
import * as S from './styles'

const Home = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [data, setData] = useState([])

  const getTotalItems = (items) => {
    handleSetLocalStorage(items)
    return items.reduce((ac, item) => ac + item.amount, 0)
  }

  const getLocalStorage = localStorage.getItem('cart')
  const handleSetLocalStorage = (items) => {
    if (items.length === 0 && !getLocalStorage) {
      localStorage.removeItem('cart')
    } else {
      localStorage.setItem('cart', JSON.stringify(items))
    }
  }

  const handleAddToCart = (clickedItem) => {
    setCartItems((prevValue) => {
      const isItemInCart = prevValue.find((item) => item.id === clickedItem.id)
      if (isItemInCart) {
        const itemInCart = prevValue.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
        return itemInCart
      }
      const itemCart = [...prevValue, { ...clickedItem, amount: 1 }]
      return itemCart
    })
  }
  const handleRemoveFromCart = (id) => {
    setCartItems((prevValue) =>
      prevValue.reduce((ac, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ac
          const itemInCart = [...ac, { ...item, amount: item.amount - 1 }]
          return itemInCart
        } else {
          const itemCart = [...ac, item]
          return itemCart
        }
      }, [])
    )
  }

  useEffect(() => {
    if (getLocalStorage) {
      setCartItems(JSON.parse(getLocalStorage))
    }
    // eslint-disable-next-line
  }, [])
  
  useEffect(() => {
    ( async () => {
      setIsLoading(true)
      const res = await getProducts()
      setIsLoading(false)
      if (res.status === 200) {
        setData(res.data)
      } else {
        setError(true)
      }
    })()
  }, [])

  if (isLoading) return <LinearProgress />
  if (error) return <div>Alguma deu errado, tente novamente...</div>

  // Components Home
  return (
    <Container maxWidth="lg">
      <Box mt="3rem">
        <Drawer // Guia do carrinho
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart 
            cartItems={cartItems}
            removeFromCart={handleRemoveFromCart}
            addToCart={handleAddToCart}
          />
        </Drawer>
        {/* Botão do carrinho */}
        <S.CartButton onClick={() => setCartOpen(true)}> 
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCart />
          </Badge>
        </S.CartButton>
        {/* Cards do carrinho */}
        <Grid container spacing={3}>
          {data &&
            data.map((item) => (
              <Grid item key={item.id} xs={12} sm={4}>
                <Item item={item} handleAddToCart={handleAddToCart}></Item>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Home
