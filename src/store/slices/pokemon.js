import { createSlice } from '@reduxjs/toolkit';
import { copyObject } from '@/utilities/utils';

const initialState = { list: [], selected: '' };

const pokemon = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        _setList(state, action) {
            state.list = action?.payload
                ? copyObject(action.payload)
                : initialState.list;
        },
        _setSelected(state, action) {
            state.selected = action?.payload
                ? action.payload
                : initialState.selected;
        },
    },
});

export default pokemon.reducer;
export const { _setList, _setSelected } = pokemon.actions;
