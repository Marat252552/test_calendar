import OneCell from "./OneCell"
import { event_T } from "../../../../../Shared/types"

type Props_T = { verticalAxis: Array<moment.Moment>, events: Array<event_T>, addEvent: (event: event_T) => void, deleteEvent: (id: string) => void }

// Колонна клеток с событиями от 00:00 до 23:00 определенного дня
let Column = ({ verticalAxis, events, addEvent, deleteEvent }: Props_T) => {
    return <div>
        <div>
            {verticalAxis.map(day => {
                // Поиск в глобальном state события для указанной клетки. Оно передается в саму клетку
                let cellEvent = events.find(el => {
                    return el.id === day.toString()
                })
                return <>
                    {/* Одна клетка в колонне */}
                    <OneCell
                        deleteEvent={deleteEvent}
                        addEvent={addEvent}
                        cellEvent={cellEvent}
                        key={day.toString()}
                        day={day} 
                    />
                </>
            })}
        </div>
    </div>
}

export default Column