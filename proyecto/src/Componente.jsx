const Componente = (props) => {
    const {numeros} = props;
  return (<>
    <h1> Hola Mundo</h1>;
    <p>
        {numeros.find((item)=>item ===2)}
    </p>
    <button onClick={()=>alert('hola desde mi botón')}>HOLAA</button>
  </>)
};
export default Componente;