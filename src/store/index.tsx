import { configureStore } from '@reduxjs/toolkit'

import produtosReducer from './reducers/Produtos'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    produtos: produtosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
