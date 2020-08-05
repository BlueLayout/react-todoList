export const addTodo = todo => ({
    type: 'ADD_TODO',
    todo
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