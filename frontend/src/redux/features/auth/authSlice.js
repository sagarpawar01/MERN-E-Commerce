import { createSlice } from "@reduxjs/toolkit"
import store from "../../store"

const initialState = {
    userInfo : localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setCredentials : (state,action) => {
            store.userInfo = action.payload
            localStorage.setItem("userInfo", JSON.stringify(action.payload))
            const expirationTime = new Date().getTime + 30 * 24 * 60 * 60 * 1000
            localStorage.setItem("expirationTime", expirationTime)
        },
        logout : (state) => {
            store.userInfo = null
            localStorage.clear()
        }
    }
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer