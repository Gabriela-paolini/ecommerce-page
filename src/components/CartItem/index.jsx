import { Button } from '@material-ui/core'
import * as S from './styles'

const CartItem = ({ addToCart, removeFromCart, item }) => (
  <S.Container>
    <S.Content>
      <h3>{item.title}</h3>
      <S.Values>
        <p>Price: R${item.price}</p>
        <p>Total: R${(item.amount * item.price).toFixed(2)}</p>
      </S.Values>
      <S.Information>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <S.Amount>{item.amount}</S.Amount>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </S.Information>
    </S.Content>
    <S.Img src={item.image} alt={item.title} />
  </S.Container>
)

export default CartItem
