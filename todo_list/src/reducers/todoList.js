export const todoList = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {id: action.todo.id, content: action.todo.content, status: false}];
        case "MARK_DONE":
            state.find(todo => todo.id === action.id).status = true;
            return [...state];
        case "DELETE_TODO":
            return [...state.filter(todo => todo.id !== action.id)];
        case "MARK_CANCEL":
            state.find(todo => todo.id === action.id).status = false;
            return [...state];
        case "INIT_TODO":
            return action.todos.map(todo => {
                return {
                    id: todo.id,
                    content: todo.content,
                    status: todo.status
                }
            });
        default:
            return state;
    }
};