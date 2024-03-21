import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, doOnToggle }) => {
    return (
        <div>
            <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => doOnToggle(task.id)}>
                <h3>{task.text} {' '}<FaTimes style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)} /></h3>
                <p>{task.day}</p>
            </div>
        </div>
    )
}

export default Task