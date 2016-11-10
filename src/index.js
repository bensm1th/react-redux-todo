import todoApp from './reducers/index';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import AddTodo from './containers/container_add_todo';
import VisibleTodoList from './containers/container_todo_list';
import Footer from './components/footer';

const TodoApp = () => (
  <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
  </div>
);

import { createStore } from 'redux';
import { Provider } from 'react-redux';

/*
//the react-redux store provides this out of the box, so I don't need to write it.  
class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children
  }
}
Provider.childContextTypes = {
  store: React.PropTypes.object
}
*/
ReactDOM.render(
  <Provider store = {createStore(todoApp)}>
    <TodoApp  />
  </Provider>
  , document.getElementById('root')
);


