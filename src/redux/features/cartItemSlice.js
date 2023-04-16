import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    itemList: [],
}

export const cartItemSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const temp = state.itemList;
            temp.push(action.payload);
            state.itemList = temp;

            localStorage.setItem('goldenCart', JSON.stringify(temp));
        },
        removeItem: (state, action) => {
            const temp = state.itemList.filter(item => item.id !== action.payload)
            state.itemList = temp;

            localStorage.setItem('goldenCart', JSON.stringify(temp));
        },
        addItemCount: (state, action) => {
            // Look for the item and update count
            const temp = state.itemList.map(item => {
                if (item.id === action.payload.id){
                    item.count += action.payload.value
                }
                return item;
            })

            // Save the new value
            state.itemList = temp;

            localStorage.setItem('goldenCart', JSON.stringify(temp));
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, addItemCount } = cartItemSlice.actions

export default cartItemSlice.reducer