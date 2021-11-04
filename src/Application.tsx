import React from 'react'

import { MainRouter } from './routers/MainRouter'
import { CalendarModal } from './components/calendar/CalendarModal'
import { store } from './redux/store/store'
import { Provider } from 'react-redux'

export const Application = () => {
    return (
        <Provider store={store}>
            <div className="full_content">
                <MainRouter />
                <CalendarModal />
            </div>
        </Provider>
    )
}
