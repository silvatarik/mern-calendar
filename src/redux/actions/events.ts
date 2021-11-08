import { ICalendarEvents } from "../../interfaces/calendar";
import { types } from "../../types/types";

export const eventSetActive = (currentEvent: ICalendarEvents) => ({
    'type': types.eventSetActive,
    'payload': currentEvent
})

export const cleanEvent = () => ({
    'type': types.eventActiveClean
})

export const addEvent = (event: ICalendarEvents) => ({
    'type': types.eventAddNew,
    'payload': event
})

export const editEvent = (event: ICalendarEvents) => ({
    'type': types.eventEdit,
    'payload': event
})


export const deleteEvent = (id:string) => ({
    'type': types.eventDelete,
    'payload': id
})