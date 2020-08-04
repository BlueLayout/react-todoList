export const todoList = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {text: action.text, isDone: 'DOING'}];
        case "MARK_DONE":
            state[action.id].isDone = 'DONE';
            return [...state];
        default:
            return state;
    }
};