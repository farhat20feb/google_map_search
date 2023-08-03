import { createSlice } from '@reduxjs/toolkit'

export const latlngSlice = createSlice({
    name: "Getlatlng",
    initialState: {
        value: "47.000034,56.9993474",
      },
    reducers: {
        updatelatlng: (state,action) => { 
            state.value = action.payload
        }
    }
})

export const { updatelatlng } = latlngSlice.actions
export default latlngSlice.reducer