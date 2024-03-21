import logo from './logo.svg';
import './App.css';
import './components/Header'
import Button from './components/Button'
import Header from './components/Header';
import Tasks from './components/Tasks';
import State from './components/State';
import { useState } from "react";
import AddTask from './components/AddTask'
import ComponentA from './components/contextapi/ComponentA';
import changeTheState from './components/react-redux/reducers/IncrementDecrement';
import { useDispatch,  useSelector} from 'react-redux';
import { incrementNumber, decrementNumber } from './components/react-redux/action/Action';


const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  var [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment I',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Carpenter Work',
      day: 'Feb 6th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'DMart...',
      day: 'Feb 7th at 2:30pm',
      reminder: true,
    },

  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log("id:: " + id)
    const newTask = {id, ...task}
    console.log("newTask:: "+ newTask)
    setTasks=([...tasks, newTask])  
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) =>
      task.id !== id
    ))
  }

  // Toggling reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    )
  }

  const name = 'Mike'
  const x = 1
  const boolean = false

  return (
    <div className='container'>
      <Header name={name} age={30 * x} onAdd = {() => setShowAddTask(!showAddTask)}/>
      <hr></hr>
      <hr></hr>
      {showAddTask && <AddTask onAdd = {addTask} />}
      <hr></hr>
      <hr></hr>

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} doOnToggle={toggleReminder} /> : <div><p style={{ color: 'dark-green' }}> No Task Added...</p></div>}
      <State />
    </div>
  );
}


// Context API...
// return(
//   <div>
//     <ComponentA />
//   </div>
// )
// }

// const App = () => {
//   const state = useSelector((state) => state.changeTheState);
//   const dispatch = useDispatch();
//   return (
//     <div className='container'>
//       <h3>Count : {state}</h3>
//       <Button onClick={() => dispatch(incrementNumber())} text='Add'></Button>
//       <Button onClick={() => dispatch(decrementNumber())} text='Sub'></Button>
//     </div>
//   )
// }

export default App;