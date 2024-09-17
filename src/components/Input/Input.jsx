import  { useState } from 'react';

const Input = () => {
  // Estado para almacenar el valor ingresado por el usuario
  const [inputValue, setInputValue] = useState('');

  // Función para manejar el cambio en el input
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Actualiza el estado con el valor ingresado
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Escribe algo..." 
      />
      <p>Lo que escribiste: {inputValue}</p> {/* Muestra el valor ingresado */}
    </div>
  );
};

export default Input;
