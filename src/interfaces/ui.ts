export interface ICalendarMProps {
    action?: "new" | "edit" | "delete" | ""
}

export default interface IUI{
    modalOpen:boolean,
    action:ICalendarMProps  
} 