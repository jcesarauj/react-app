const INITIAL_STATE = { summary: { totalClientes : 100 , totalPedidos : 200, totalAgendamentos: 20 }}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DASHBOARD_FETCHED':
            return {...state, dashboard: action.payload.data.data }
        default:
            return state
    }
}