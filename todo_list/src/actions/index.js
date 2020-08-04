export const addTodo = text => ({
    type: 'ADD_TODO',
    text
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
});

export const markDone = (id) => ({
    type: 'MARK_DONE',
    id
});

export const markCancel = (id) => ({
    type: 'MARK_CANCEL',
    id
});