let todoId = 0;
export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        id: todoId++,
        text
    }
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export function deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export function setVisibilityFilterFunc(filter) {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export function makeEditable(id) {
    return {
        type: 'MAKE_EDITABLE',
        id
    }
}

export function submitEdit(id) {
    return {
        type: 'SUBMIT_EDIT',
        id
    }
}

export function makeEditChange(change) {
    return {
        type: 'MAKE_EDIT_CHANGE',
        change
    }
}

export function toggleAll() {
    return {
        type: 'TOGGLE_ALL'
    }
}

export function clearCompletedTodo() {
    return {
        type: 'CLEAR_COMPLETED'
    }
}
