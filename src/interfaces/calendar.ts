
export interface ICalendarEvents {
    id?:string,
    title: string,
    start: any,
    end: any,
    user: {
        uid: string,
        name: string
    }
}

export interface IRootCalendar {
    events: ICalendarEvents[],
    activeEvent?: ICalendarEvents
}