import React from 'react'
import { CalendarModal } from './components/calendar/CalendarModal'
import { MainRouter } from './routers/MainRouter'

export const Application = () => {
    return (
        <div className="full_content">
            <MainRouter />
            <CalendarModal/>
        </div>
    )
}
