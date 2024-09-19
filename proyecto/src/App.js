import logo from './logo.svg';
import './App.css';

function App() {

  /*Spread operator: me permite concatenar objetos*/
  const obj1 = {nombre: "juan"};
  const obj2 = {apellido: "gonzalez"};

  const comboObj = {...obj1, ...obj2};
  // console.log(comboObj);

  /*Ejemplo 2*/
  const objeto = {a: 1, b: 2, c: 3};
  // console.log(objeto);

  /*Ejemplo 3*/
  const animales =["perro", "gato", "vaca" ];
  const copiaArray = [...animales];
  // console.log(copiaArray);

  /*Ejemplo 4*/
  const nuevoArray = [...animales, "zorro"];
  // console.log(nuevoArray);

    /*Ejemplo 5*/
    const agregarNuevaPropiedad = {...comboObj, edad:33};
    console.log(agregarNuevaPropiedad);


  return <div className= "App"> </div>
    
}

export default App;
