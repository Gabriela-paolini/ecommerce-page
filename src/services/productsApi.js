import { api } from './api'

export const getProducts = async () => {
  try {
    const { data, status } = await api.get('products')
    return { data, status}
  } catch (error) {
    return error
  }
}
