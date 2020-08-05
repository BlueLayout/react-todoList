let count = 0;
export const todoList = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {id: count++, text: action.todo.text, hitStatus: 'DOING'}];
        case "MARK_DONE":
            state[action.id].hitStatus = 'DONE';
            return [...state];
        case "DELETE_TODO":
            return [...state.filter(todo => todo.id !== action.id)];
        case "MARK_CANCEL":
            state[action.id].hitStatus = 'DOING';
            return [...state];
        default:
            return state;
    }
};