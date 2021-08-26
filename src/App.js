import React from 'react';
import { Provider } from 'react-redux'; 
import store from './store';
import Jugadores from './components/Jugadores';
import EquipoSelec from './components/Equipo_select';
import  './styles/styles.scss';
const App = () =>(
 <Provider  store={store}>
   <main>
      <h1>JA Manager</h1>
<Jugadores/>
<EquipoSelec/>
    </main>
 </Provider>
 
 
 
)

export default App;
