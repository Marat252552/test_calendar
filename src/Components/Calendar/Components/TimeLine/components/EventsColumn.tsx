import { days_T, event_T } from "../../../../../Shared/types";
import Column from "./Column";

type props_T = { days: days_T, events: Array<event_T>, addEvent: (event: event_T) => void, deleteEvent: (id: string) => void }

// Колонна с клетками определенного дня (всего их 7). Каждая имеет по 24 строки
const EventsColumn = (props: props_T) => {
    return <>
        {props.days.map(el => {
            let verticalAxis = []
            for (let i = 0; i < 24; i++) {
                let time;
                time = el.value.clone().add(i, 'hours')
                verticalAxis.push(time)
            }
            return <Column
                events={props.events}
                deleteEvent={props.deleteEvent}
                addEvent={props.addEvent}
                verticalAxis={verticalAxis}
                key={`${el.value.toString()}${el.value.toString()}`}
            />
        })}
    </>
}

export default EventsColumn