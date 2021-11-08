import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button'
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import { ICalendarEvents, IRootCalendar } from '../interfaces/calendar';
import { uiCloseModal, uiOpenModal } from '../redux/actions/ui';
import IRootState from '../interfaces/rootState';
import { CalendarEvents } from '../components/calendar/CalendarEvents';
import { NavBar } from '../components/shared/NavBar'
import { eventSetActive } from '../redux/actions/events';


//BigCalendar
const localizer = momentLocalizer(moment);

export const CalendarPage = () => {

    const { events, activeEvent } = useSelector<IRootState, IRootCalendar>(state => state.calendar);

    const dispatch = useDispatch()

    const [lastView, setLastView]: any = useState(localStorage.getItem('lastView') || 'month')

    const onDoubleClick = (event: any) => {
        dispatch(uiOpenModal("edit"));
    }

    const onSelectEvent = (event: ICalendarEvents): void => {
        dispatch(eventSetActive(event));
    }

    const onViewChange = (event: any) => {
        localStorage.setItem('lastView', event);
        setLastView(event)
    }
    const handleClickAdd = () => {
        dispatch(uiOpenModal("new"));
    }

    const onSelectSlot = () => {
        dispatch(uiCloseModal());
    }
 
    const eventStyleGetter = (event: any, isSelected: any) => {
        // style : {
        //     borderRadius: '0px',
        //     opacity: 0.8,
        //     color: 'black',
        //     border: '0px',
        //     display: 'block'
        // }
        return {}
    }

    return (
        <>
            <NavBar />
            <div className="content_main_calendar bg-white">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 600 }}
                    eventPropGetter={eventStyleGetter}
                    onDoubleClickEvent={onDoubleClick}
                    onSelectEvent={onSelectEvent}
                    components={{ event: CalendarEvents }}
                    onSelectSlot={onSelectSlot}
                    selectable={true}
                    onView={onViewChange}
                    view={lastView}
                />
            </div>

            <Button onClick={handleClickAdd} variant="contained" size="large" color="primary" style={{ position: 'fixed', bottom: 25, right: 25 }}>
                <ControlPointIcon fontSize="large" />
            </Button>
        </>
    )
}
