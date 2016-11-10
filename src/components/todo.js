import React from 'react';

const Todo = ({
  onClick,
  completed,
  text,
  onDelete,
  onMakeEditable,
  editable,
  onChangeHandler,
  id,
  onSubmitEdit,
  onEditLeave
}) => {
    let display;
    const circleIcon = completed ? "fa fa-check-circle-o fa-2x" : "fa fa-circle-o fa-2x";
    if (!editable) {
        display = 
        (<li className="list-group-item"
            onDoubleClick={onMakeEditable}
            id="todo"
        >
            <i 
                className={circleIcon} 
                aria-hidden="true"
                onClick={onClick}
                id="circle"
            ></i>
            <span style={{textDecoration: completed ? 'line-through' : 'none'}}>
                {text}
            </span>
            <i 
                className="fa fa-times pull-right  fa-2x" 
                aria-hidden="true"
                onClick={onDelete}
                id="delete"
            ></i>
        </li>)
    } else {
        display = (
            <form onSubmit={e=> {
                e.preventDefault();
                console.log('submitted');
                onSubmitEdit(id)
            }}>
                <div className="input-group input-group-lg">
                    <input 
                        className="form-control" 
                        type='text' value={text} 
                        onChange={(e)=> onChangeHandler({id: id, text: e.target.value})}
                        onBlur={()=> onEditLeave(id)}
                    />
                </div>
            </form>
        )
    }
    return (
        <div>
            {display}
        </div>
    )
}

export default Todo;