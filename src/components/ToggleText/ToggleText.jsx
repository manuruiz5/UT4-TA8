import { useState } from 'react';
import styles from './ToggleText.module.css';

const ToggleText = () => {
  // Definir un estado para controlar la visibilidad del texto
  const [isVisible, setIsVisible] = useState(false);

  // Función para alternar el estado de visibilidad
  const toggleTextVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleTextVisibility}>
        {isVisible ? 'Ocultar texto' : 'Mostrar texto'}
      </button>
      {isVisible && <p> Este es el texto </p>}
    </div>
  );
};

export default ToggleText;
