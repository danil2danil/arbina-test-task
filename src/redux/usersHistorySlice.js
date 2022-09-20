import { createSlice } from '@reduxjs/toolkit'
import { cloneElement } from 'react'

const initialState = {
    history: [],
    cloneHistory: [],
}

const historySlise = createSlice({
    name: 'usersActionHistory',
    initialState,
    reducers: {
        setHistory: (state, action) => {
            const temp = action.payload
            temp.forEach(element => {
                element.action_createad_at = new Date(element.action_createad_at).toString()
            });
            state.history = temp
            state.cloneHistory = temp
        },
        filterHistory: (state, action) => {
            const filteredhistory = state.history.filter(elemet => {
                return elemet[action.payload.filter].includes(action.payload.value)
            })
            state.history = filteredhistory
        },
        removeFilters: (state) => {
            state.history = state.cloneHistory
        }
    }
})

export const { setHistory, filterHistory, removeFilters } = historySlise.actions
export default historySlise.reducer