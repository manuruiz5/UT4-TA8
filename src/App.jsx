import Card from './components/Card/index.jsx';  

const App = () => {
  return (
  
<div className="cards-wrapper">
      <Card>
        <h2>Proyecto A</h2>
        <p>Parte 1</p>
        <p><strong>Asignado a:</strong> Nombre Apellido</p>
        <p><strong>Fecha de inicio:</strong> 01/09/2024</p>
        <p><strong>Fecha de fin:</strong> 15/09/2024</p>
      </Card>
      <Card>
        <h2>Proyecto B</h2>
        <p>Parte 2</p>
        <p><strong>Asignado a:</strong> Nombre Apellido</p>
        <p><strong>Fecha de inicio:</strong> 05/09/2024</p>
        <p><strong>Fecha de fin:</strong> 20/09/2024</p>
      </Card>
      <Card>
        <h2>Proyecto C</h2>
        <p>Parte 3</p>
        <p><strong>Asignado a:</strong> Nombre Apellido</p>
        <p><strong>Fecha de inicio:</strong> 10/09/2024</p>
        <p><strong>Fecha de fin:</strong> 25/09/2024</p>
      </Card>
    </div>
  );
};
export default App;
