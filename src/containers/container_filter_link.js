import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilterFunc, clearCompletedTodo } from '../actions';

const countTodos = (todos) => {
  return todos.filter(todo=> !todo.completed ).length;
}

const Link = ({
  active, children, onClick, clear, clearCompleted, count, todos
}) => {
  const funct = clear ? clearCompleted : onClick;
  if (active) {
    return <span>{children}</span>
  }
  if (count) {
    return <span> {countTodos(todos)} items active</span>
  }
  return (
    <a href="#"
      onClick={e=>{
        e.preventDefault();
        funct();
      }}
      >
      {children}
      </a>
  )
}

  //it is common to pass props as a second argument to map state to props, or else how will
  //FilterLink get access to the props that are passed down to it on it's instantiation in Footer?
  //as a convention, we can rename it something else, like ownProps, to make it clear we are taling about the container components ownProps
  //so, there is nothing special about ownProps, its just a convention. How does map state to props know to grab the props though?  Is that
  //built in to the function?  It must be

const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active: ownProps.filter === state.setVisibilityFilter,
    todos: state.todos
  }
}
const mapDispatchToLinkProps = ( 
  dispatch,
  ownProps
) => {
  return {
    onClick: ()=> {
      dispatch(setVisibilityFilterFunc(ownProps.filter));
    },
    clearCompleted: ()=> {
      dispatch(clearCompletedTodo())
    }
  };
}
const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

export default FilterLink;
//Now, I can remove the old FilterLink implementation
/*
class FilterLink extends Component {
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
    //why do I have to bind props in a class component?
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <Link 
        active={
          props.filter ===
          state.setVisibilityFilter
        }
        onClick={()=>
          store.
        }
      >
      {props.children}
      </Link>
    )
  }
}

FilterLink.contextTypes = {
  store: React.PropTypes.object
}
*/