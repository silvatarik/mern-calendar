import { IRootCalendar } from "./calendar";
import IUI from "./ui";

export default interface IRootState {
    ui: IUI,
    calendar: IRootCalendar
}