import { useState } from 'react';
import styles from './TaskList.module.css';

const TaskList = () => {
  // Definir un estado para la lkista de tareas
  const [tasks, setTasks] = useState([]);

  // Estado para la tarea que se esta ingresando
  const [task, setTask] = useState('');

  // Estado para manejar el índice de la tarea que se está editando
  const [editingIndex, setEditingIndex] = useState(null);

  // Función para enviar la tarea que se ingresa en el input 
  const addOrEditTask = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (task.trim() === '') return; // No hace nada si el input está vacío
    if (editingIndex !== null) { // Si estamos editando, actualizar la tarea existente
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = task;
      setTasks(updatedTasks);
      setEditingIndex(null); // Reiniciar el índice de edición
    } else { // Si no estamos editando, agregar una nueva tarea
      setTasks([...tasks, task]);
    }
    setTask(''); // Limpiar el input
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

  // Función para seleccionar una tarea y editarla
  const editTask = (index) => {
    setTask(tasks[index]); // Coloca la tarea seleccionada en el input
    setEditingIndex(index); // Establece el índice de edición
  };

  return (
    <div className={styles.container}>
      <h2>Lista de Tareas</h2>
      <form onSubmit={addOrEditTask}>
        <input
          type="text"
          value={task}
          onChange={inputChange}
          placeholder="Ingresa una tarea"
        />
        <button type="submit">
          {editingIndex !== null ? 'Guardar Cambios' : 'Agregar Tarea'}
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>
              Editar tarea
            </button>
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
