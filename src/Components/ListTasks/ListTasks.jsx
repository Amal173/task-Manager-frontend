import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncTasks } from '../../Redux/Slice/TaskSlice';
import './ListTasks.css'

function ListTasks() {
    const dispatch = useDispatch()
    const { tasks } = useSelector((state) => state.task)
    console.log(tasks.Task);

    useEffect(() => {
        dispatch(fetchAsyncTasks())
    }, [dispatch])

    return (
        <div className='list-task'>
            <h2>Task Manager</h2>
            {tasks.Task?.map((task) => (<div className="tasks" key={tasks.Task._id}>

                <div className="title">
                    {task.list.map((list) => (
                        <p>{list.title}</p>
                    ))}
                </div>
                <div className="task-description">
                    {task.list.map((list) => (
                        <p>{list.task}</p>
                    ))}
                </div>
                <div className="created">
                    <p>{task.createdAt}</p>
                </div>
            </div>))}
        </div>
    )
}

export default ListTasks