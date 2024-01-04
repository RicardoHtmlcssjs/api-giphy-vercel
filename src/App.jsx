
import { useState } from "react"
import { Buscador } from "./Buscador";
import {GridGifs} from "./GridGifs";
// los hooks son funciones ya definidas por react como por ejemplo el useState, per ohay muchos hooks
//cap 12 -  Custon Hokks es hook creado por uno mismo inicia con la palabra reservada use
// los customHokks no se ingresaron
// cap 13 - utilizando framemotion libreria para hacer animaciones - nom instal frame-motion se tiene que importar en el componente que se valla a utilizar en este caso es en GridGifs


function App() {
  // ESTADO
  const [valorInput, setValorInput] = useState('');
  const onChange = (e)=>{
    const valor = e.target.value;
    setValorInput(valor);
  }

  const [gifs, setGifs] = useState([]);
  const getGifs = async(query)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Lqf6prc7923E1iw1eiRRvR934DXzZTmA&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  }
  const onSubmit = async (e)=>{
    e.preventDefault();
    const gifs = await getGifs(valorInput)
    setGifs(gifs)
  }

  return(
    <div className='App'>
      {/* componente buscador rederiza del formulario que buscara los gif y  pasarles los valores de los props y importarlo */}
      <Buscador
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {
        // componente GridGifs en este se esta iterando los gifs que estta ciosumiendo la
        <GridGifs
        gifs={gifs}
        />
      }
    </div>
  )
}

export default App
