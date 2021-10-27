import React from 'react'

export const CalendarEvents = ({event}:any) => {
    const {title,user} = event;
    return (
        <div>
            <strong>{user.name}</strong> - <span>{title}</span>
        </div>
    )
}
