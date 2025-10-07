import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Food[], void>({
      query: () => 'restaurantes'
    }),
    getFood: builder.query<Food, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetFoodQuery } = api
export default api
