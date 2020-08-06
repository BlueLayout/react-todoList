export const todoList = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {id: action.todo.id, content: action.todo.content, status: false}];
        case "MARK_DONE":
            state[action.id - 1].status = true;
            return [...state];
        case "DELETE_TODO":
            return [...state.filter(todo => todo.id !== action.id)];
        case "MARK_CANCEL":
            state[action.id - 1].status = false;
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