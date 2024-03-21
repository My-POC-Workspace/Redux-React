import Task from './Task'

const Tasks = ({tasks, onDelete, doOnToggle}) => {
    return (
    <>
        {tasks.map((task) => {
            return <Task key={task.id} task={task} onDelete = {onDelete} doOnToggle = {doOnToggle} />
        })}
    </>)
}

export default Tasks 