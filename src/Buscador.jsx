// el padre tiene que mandar los props para que el formulario reciva  y en vie los parametros desde App.jsx
export const Buscador = ({onSubmit, valorInput, onChange}) =>{
    return(
        <div>
            <form className="formulario" onSubmit={onSubmit}>
                <input className="buscador" type="text" value={valorInput} onChange={onChange}/>
            </form>
        </div>
    )
}