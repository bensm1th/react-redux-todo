function todo(state={}, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                text: action.text,
                id: action.id,
                completed: false,
                editable: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            })
        case 'DELETE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return;
        case 'MAKE_EDITABLE':
            if (state.id !== action.id) {
                return Object.assign({}, state, {
                    editable: false
                });
            }
            return Object.assign({}, state, {
                editable: !state.editable
            })
        case 'SUBMIT_EDIT':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                editable: false
            })
        case 'MAKE_EDIT_CHANGE':
            if (state.id !== action.change.id) {
                return state;
            }
            return Object.assign({}, state, {
                text: action.change.text
            })
        case 'TOGGLE_ALL':
            if(action.allCompleted) {
                return Object.assign({}, state, {
                    completed: false
                })
            } else {
                if (!state.completed) {
                    return Object.assign({}, state, {
                        completed: true
                    })
                }
                return state;
            }
        default:
            return state;
    }
}

function todos(state=[], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, todo(undefined, action)]
        case 'DELETE_TODO':
            return state.filter(t=>todo(t, action))
        case 'CLEAR_COMPLETED':
            return state.filter(t=> !t.completed)
        case 'TOGGLE_ALL':
            const allCompleted = state.filter(t=> t.completed).length === state.length;
            action.allCompleted = allCompleted; 
        case 'MAKE_EDIT_CHANGE':
        case 'TOGGLE_TODO':
        case 'MAKE_EDITABLE':
        case 'SUBMIT_EDIT':
            return state.map(t=>todo(t, action))
        default:
            return state
    }
}

export default todos