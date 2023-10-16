import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TodoSliceType {
    todos: string[];
}

const INITIAL_STATE: TodoSliceType = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: INITIAL_STATE,
    reducers: {
        addAction: (state, action: PayloadAction<string>) => {
            state.todos.push(action.payload)
        },
    },
});

export const { addAction } = todoSlice.actions;

export default todoSlice.reducer;


