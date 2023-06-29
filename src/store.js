import {createStore} from 'redux';

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Jesse Rodriguez",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 2,
            nombre: "Jehu Alanis",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 3,
            nombre: "Arturo Alexis",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 4,
            nombre: "Juan Alberto",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 5,
            nombre: "Jesus Ochoa",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 6,
            nombre: "Alexys Quesada",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 7,
            nombre: "Adrian Rodriguez",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 8,
            nombre: "Manuel Rodriguez",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 9,
            nombre: "Jesus Rodríguez",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 10,
            nombre: "Julio Arteaga",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 11,
            nombre: "Leonel Messi",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 12,
            nombre: "Cesar Augusta",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 13,
            nombre: "Cristiano Ronaldo",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {

    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "AGREGAR_SUPLENTE" ) {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if ( action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)