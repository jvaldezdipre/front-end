import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addNewTodo } from '../store/actions/todosAction';

const AddTodoForm = ({ setToggleAddForm, addNewTodo }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      important: false,
      completed: false,
    },
  });

  const onSubmit = data => {
    console.log(data);

    //the data that is being passed in might changed due to being new to react-hook-form
    addNewTodo(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add a new todo</h1>
      <input
        type='text'
        name='date_time'
        ref={register}
        defaultValue={'Today'} // { currentTodo.time }
      />
      <input type='text' name='title' ref={register} placeholder='Title' />
      <input type='checkbox' name='important' ref={register} value={false} />
      <input type='checkbox' name='completed' ref={register} value={false} />
      <label htmlFor='important'>Important</label>
      <textarea name='description' ref={register} defaultValue='description' />
      <button>Add</button> {/* NEEDS FUNCTIONALITY */}
      <button type='button' onClick={() => setToggleAddForm(false)}>
        Cancel
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addNewTodo })(AddTodoForm);
