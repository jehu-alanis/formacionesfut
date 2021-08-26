import React,{ useState} from 'react';
import { connect } from 'react-redux';
import cancha from '../cancha.svg'


const Titulares = ({titulares, quitarTitular}) => {
    const [value, setValue] = useState({

        values:"titular4231"
    });
    console.log(value.values,("valir actual"));
   const onChange = (event) =>{
    setValue({values: event.target.value});
      };
      return ( 
      <section>
        <h2>Titulares</h2>

        
        <div className="cancha">
        
            {
                titulares.map(j => (
                    <article className={value.values} key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre}/>
                            <button onClick={() => quitarTitular(j)}>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
            
            <img src={cancha} alt="Cancha de futbol" />
            <label >
      Pick your favorite line up:
      <select value={value.values} onChange={onChange} >     
     <option value="titular4231">4-2-3-1</option>
     <option value="titular433">4-3-3</option>
    <option selected value="titular">4-4-2</option>
     <option value="titular532">5-3-2</option>
     </select>
     </label>
        </div>

    </section>
    )
}

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)