import { useState } from "react"

const AddTask = ( { onAdd } ) => {

    const[text, setText] = useState('')
    const[dayTime, setDayTime] = useState('')
    const[checkbox, setCheckBox] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!text){
            alert("please add a task...")
            return
        }

        onAdd({text, dayTime, checkbox})

        // Once onAdd called then it will clear the form
        setText('')
        setDayTime('')
        setCheckBox(false)

    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
                <div>
                    <h2 className="center">Add Task...</h2>
                </div>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange= {(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day and Time' value={dayTime} onChange= {(e) => setDayTime(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={checkbox} value={checkbox} onChange = {(e) => setCheckBox(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask