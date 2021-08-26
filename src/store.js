import {createStore} from 'redux';

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Juan Carlitos",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 2,
            nombre: "Beto Quiroga",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 3,
            nombre: "Alejo Garcia",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 4,
            nombre: "Juan Disain",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 5,
            nombre: "Alvaro Felipe",
            foto: "data:image/jpeg;base64,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"
        },
        {
            id: 6,
            nombre: "Alexys Lozada",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 7,
            nombre: "Harold Pajuelo",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 8,
            nombre: "Manu Rodriguez",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 9,
            nombre: "AlejoRodríguez",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 10,
            nombre: "Andrés Muquinche",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 11,
            nombre: "Ricardo Otero",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 12,
            nombre: "Deivis Rivera",
            foto: "https://thumbs.dreamstime.com/b/jugador-de-f%C3%BAtbol-del-hombre-del-avatar-gr%C3%A1fico-73243586.jpg"
        },
        {
            id: 13,
            nombre: "Percy Tuncar",
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