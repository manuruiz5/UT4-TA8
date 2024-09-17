import { useState } from 'react';

const Counter = () => {
  // Definimos el estado del contador con un valor inicial de 0
  const [count, setCount] = useState(0);

  // Funciones para aumentar y disminuir el contador
  const aumentar = () => {
    setCount(count + 1);
  };

  const disminuir = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};

export default Counter;
