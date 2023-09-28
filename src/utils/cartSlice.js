import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },

        removeItem: (state, action) => {
            const remove = state.items.filter((item) => item.card.info.id !== action.payload.card.info.id);  
            
            state.items = remove;
        },

        clearCart: (state, action) => {
            //state.items.length = 0;
            return { 
                items: [],
            }
        },
    },
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;