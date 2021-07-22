import * as S from './styles'
import React from 'react'

const Item = ({ item, handleAddToCart }) => (
  <S.Container>
    <S.Img src={item.image} alt={item.title} />
    <S.Article>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>R${item.price}</h3>
    </S.Article>
    <S.CustomButton
      color="primary"
      variant="contained"
      onClick={() => handleAddToCart(item)}
    >
      Adicionar no carrinho
    </S.CustomButton>
  </S.Container>
)

export default Item
