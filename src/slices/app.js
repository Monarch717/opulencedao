import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: "app",
    initialState: {
        wallet: {
            address: null,
            amount: 0
        }
    },
    reducers: {
        setWallet: (state, action) => {
            state.wallet = {
                address: action.payload.address || null,
                amount: action.payload.amount || 0
            }
        }
    }
})

export const reducer = appSlice.reducer
export const actions = appSlice.actions

export const {
    setWallet
} = appSlice.actions

export default appSlice
