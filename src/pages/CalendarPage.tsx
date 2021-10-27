import React, { useState } from 'react'
import { NavBar } from '../components/shared/NavBar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { CalendarEvents } from '../components/calendar/CalendarEvents';
import { CalendarModal } from '../components/calendar/CalendarModal';

//BigClanedar
const localizer = momentLocalizer(moment);

const events = [{
    title: 'Hoy es el cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    user: {
        uid: 124345,
        name: 'Juan'
    }
}];

export const CalendarPage = () => {

    

    const [lastView, setLastView]: any = useState(localStorage.getItem('lastView') || 'month')

    const onDoubleClick = (event: any) => {
        // console.log(event);

    }

    const onSelectEvent = (event: any) => {
        console.log(event);
    }

    const onViewChange = (event: any) => {
        localStorage.setItem('lastView', event);
        setLastView(event)
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
                    style={{ height: 500 }}
                    eventPropGetter={eventStyleGetter}
                    onDoubleClickEvent={onDoubleClick}
                    onSelectEvent={onSelectEvent}
                    components={{ event: CalendarEvents }}
                    onView={onViewChange}
                    view={lastView}
                />
            </div>
        </>
    )
}
