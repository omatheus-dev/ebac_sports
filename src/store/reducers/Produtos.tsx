import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ProdutoState = {
  carrinho: Produto[]
  favoritos: Produto[]
}

const initialState: ProdutoState = {
  carrinho: [],
  favoritos: []
}

const produtoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionaCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.carrinho.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.carrinho.push(produto)
      }
    },
    adicionaFavorito: (state, action: PayloadAction<Produto>) => {
      const favs = action.payload

      if (state.favoritos.find((fav) => fav.id === favs.id)) {
        state.favoritos = state.favoritos.filter((fav) => fav.id !== favs.id)
      } else {
        state.favoritos.push(favs)
      }
    }
  }
})

export const { adicionaCarrinho, adicionaFavorito } = produtoSlice.actions
export default produtoSlice.reducer
