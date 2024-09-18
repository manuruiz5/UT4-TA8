import { useState } from 'react';
import styles from './TaskList.module.css';

const TaskList = () => {
  // Definir un estado para la lkista de tareas
  const [tasks, setTasks] = useState([]);

  // Estado para la tarea que se esta ingresando
  const [task, setTask] = useState('');

  // Función para enviar la tarea que se ingresa en el input 
  const addTask = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (task.trim() !== '') { //Agrega la tarea si no esta vacía
      setTasks([...tasks, task]); // Añade la nueva tarea a la lista
      setTask(''); // Limpia el input
    }
  };

  // Función para manejar el cambio en el input
  const inputChange = (e) => {
    setTask(e.target.value); // Actualiza el estado task con el valor del input
  }

  // Función para eliminar una tarea
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Filtra las tareas, removiendo la tarea seleccionada
    setTasks(updatedTasks); // Actualiza la lista de tareas
  };

  return (
    <div className={styles.container}>
      <h2>Lista de Tareas</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={inputChange}
          placeholder="Ingresa una tarea"
        />
        <button type="submit">Agregar Tarea</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>
              Eliminar tarea
            </button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
