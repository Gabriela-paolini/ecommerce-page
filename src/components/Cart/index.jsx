import CartItem from '../CartItem'
import * as S from './styles'

const Cart = ({ addToCart, cartItems, removeFromCart }) => {
  const calculateTotal = (items) => {
    return items.reduce((ac, item) => ac + item.amount * item.price, 0)
  }
  return (
    <S.Container>
      <h2>Seu carrinho de compra</h2>
      {cartItems.length === 0 ? <p>Não contem item no carrinho</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      {cartItems.length >= 1 && (
        <h2>Total: R${calculateTotal(cartItems).toFixed(2)}</h2>
      )}
    </S.Container>
  )
}

export default Cart
