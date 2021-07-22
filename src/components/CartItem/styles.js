import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary.main};
  padding: 15px 0;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`
export const Values = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Amount = styled.p`
  margin: 0 1rem;
`
export const Img = styled.img`
  max-width: 80px;
  object-fit: cover;
  margin-left: 40px;
`
