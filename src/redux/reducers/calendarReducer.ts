import moment from "moment";
import IAction from "../../interfaces/action";
import { IRootCalendar } from "../../interfaces/calendar";
import { types } from "../../types/types";

const initialstate: IRootCalendar = {
    events: [
        {
            id: new Date().getTime().toString(),
            title: 'Hoy es el cumpleaños del jefe',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            user: {
                uid: '124345',
                name: 'Juan'
            }
        }
    ],
}
export const calendarReducer = (state = initialstate, action: IAction) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state, activeEvent: { ...action.payload }
            }
        case types.eventActiveClean:
            return {
                ...state, activeEvent: undefined
            }
        case types.eventAddNew:
            return {
                ...state, events: [...state.events, action.payload]
            }
        case types.eventEdit:
            return {
                ...state,
                events:state.events.map((event:any) => (event.id === action.payload.id) ?  action.payload : event)
            }
        case types.eventDelete:
            return {
                ...state,
                events:state.events.filter((event:any) => (event.id !== action.payload))
            }
        default:
            return state;
    }

}