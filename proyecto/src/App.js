// import logo from './logo.svg';
import './App.css';
import Componente from './Componente';
function App() {
  const numeros =[1, 2, 3 ];
  return ( 
    <div> <Componente numeros={numeros}/> </div>
  );
}
export default App;

  /*Spread operator: me permite concatenar objetos
  const obj1 = {nombre: "juan"};
  const obj2 = {apellido: "gonzalez"};

  const comboObj = {...obj1, ...obj2};
  // console.log(comboObj);

  const agregarNuevaPropiedad = {...comboObj, edad:33};
  console.log(agregarNuevaPropiedad);

  /*Ejemplo 3
  const animales =["perro", "gato", "vaca" ];
  const copiaArray = [...animales];
  // console.log(copiaArray);

  return <div className= "App"> </div>*/



