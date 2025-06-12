import axios from 'axios'

const api = axios.create()

export async function login(user: string, password: string) {
  const response = await api.post('https://test-api-y04b.onrender.com/signIn', { user, password })
  return response.data
}

export async function getBrands() {
  const response = await api.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
  return response.data
}

export async function getModels(brandCode: string) {
  const response = await api.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos`)
  return response.data.modelos
}