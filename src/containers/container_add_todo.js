import React from 'react';
import { addTodo, toggleAll } from '../actions';
import { connect } from 'react-redux';

let AddTodo = ({ dispatch }) => {
  let input;
  return (
      <div id="todoInput">
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4> 
                        <img src="https://platform-user-uploads.s3.amazonaws.com/blog/category/logo/291/react.png" /> 
                        <span id="react">React</span> <span className="header"> with </span>
                        
                        <img id="reduxImg" src='http://kodify.io/wp-content/uploads/2016/06/ReduxLogo.png' />
                        
                        <span id='redux'>Redux </span> <span className="header"> Todo List </span>
                    </h4>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form
                        onSubmit={e=> {
                            e.preventDefault();
                            dispatch(addTodo(input.value))
                            input.value = '';
                        }}
                    >
                        <div className="form-group">
                            <div className="input-group">
                            <span className="input-group-addon">
                                <i 
                                    className="fa fa-chevron-down fa-lg" 
                                    aria-hidden="true"
                                    onClick={()=> {
                                        dispatch(toggleAll())
                                    }}
                                ></i>
                            </span>
                            <input ref={domNode => {
                                input = domNode;
                            }} 
                                className="form-control"
                            />
                          
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
//why am I only connecting the dispatch method here?
//basically, it passes the dispatch function so the component can read it from the props
//without worrying about context, or specifying context types. So, I am not subscribing to the stores,
//because I don't need to read anything from the store, or from 'getState', but I do need the dispatch method.
//I can add the dispatch method, which I guess isn't part of the store, by adding dispatch => {return { dispatch }},
// or, by simply providing no args to the connect function.  The default behavior is to inject dispatch into the container.  
AddTodo = connect()(AddTodo);

export default AddTodo;