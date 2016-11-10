import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, makeEditable, submitEdit, makeEditChange } from '../actions';
import Todo from '../components/todo';

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t=> t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t=> !t.completed);
  }
}

const TodoList = ({
  todos,
  onTodoClick,
  onDeleteClick,
  onMakeEditable,
  onSubmitEdit,
  onChangeHandler,
  onEditLeave
}) => (
    <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3 hero">
                <ul className="list-group">
                    {todos.map(todo=>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => onTodoClick(todo.id)}
                        onDelete={() => onDeleteClick(todo.id)}
                        onMakeEditable={() => onMakeEditable(todo.id)} 
                        onChangeHandler={onChangeHandler}
                        onSubmitEdit={onSubmitEdit}
                        onEditLeave={onEditLeave}
                    />
                    )} 
                </ul>
            </div>
        </div>
    </div>
);
const mapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos, 
      state.setVisibilityFilter
      )
    };
};
const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
        dispatch(toggleTodo(id))
    },
    onDeleteClick: (id) => {
        dispatch(deleteTodo(id))
    },
    onMakeEditable: (id) => {
        dispatch(makeEditable(id))
    },
    onSubmitEdit: (id) => {
        dispatch(submitEdit(id))
    },
    onChangeHandler: (change) => {
        dispatch(makeEditChange(change));
    },
    onEditLeave: (id) =>
        dispatch(submitEdit(id))
  };
};
const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;

/*
the connect function will generate the component below that I don't have to handwrite it.  
class VisibleTodoList extends Component {

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => 
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <TodoList
        
        
      />
    );
  }
}

VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}
*/