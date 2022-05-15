import axios from 'axios'

const api = axios.create({ baseURL: 'https://fakestoreapi.com' })

/**
 * @description POST /auth/login
 */
export const login = async (username, password) => {
  const { data } = await api.post('/auth/login', { username, password })

  localStorage.setItem('token', data.token)

  return data.token
}

/**
 *
 * @param {string} dataPath
 * @param {{id:string , sort:'asc' | 'desc' , limit : string}} params
 * @returns
 */

const queryData = async (dataPath, params = {}) => {
  const { id = null, sort, limit = 10 } = params
  try {
    let request = dataPath
    if (id) {
      request += `/${id}`
    }
    const res = await api.get(request, { params: { sort, limit } })
    console.log(res.data)
    return res.data
  } catch (error) {}
}

/**
 * @description GET /users
 * @param {{id:string , sort:'asc' | 'desc' , limit : string}} params
 */
export const queryUsers = async (params) => queryData('/users', params)

/**
 * @description GET /carts
 * @param {{id:string , sort:'asc' | 'desc' , limit : string}} params
 */
export const queryCarts = async (params) => queryData('/carts', params)

/**
 * @description GET /products
 * @param {{id:string , sort:'asc' | 'desc' , limit : string}} params
 */
export const queryProducts = async (params) => queryData('/products', params)

