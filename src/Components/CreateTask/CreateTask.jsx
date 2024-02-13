import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchAsyncCreateTasks } from '../../Redux/Slice/TaskSlice';
function CreateTask() {
    const dispatch=useDispatch()
    const {
        register,
        handleSubmit,
      } = useForm();
      
      const onSubmit = (data) => {
       dispatch(fetchAsyncCreateTasks(data))
      };
    return (
        <div className='create-task'>
            <div className='text-editor'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5>Task Manager</h5>
                <div className="row">
                    <h4>add Title</h4>
                    <textarea rows="10" cols="50"  name='title' {...register("title")}></textarea>
                </div>
                <div className="row">
                    <h5>Add Tasks</h5>
                    <input type="text"  name='task'{...register("task")}/>
                </div>
            <div className="buttons">
                <button>Add Tasks</button>
                <button type="submit">save</button>
            </div>
                </form>
            </div>

        </div>
    )
}

export default CreateTask