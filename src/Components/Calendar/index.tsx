import moment from "moment"
import { useState, useEffect } from "react"
import Actions from "./Components/Actions"
import NavBar from "./Components/NavBar"
import TimeLine from "./Components/TimeLine"
import styles from './lib/styles.module.css'
import { days_T, event_T } from "../../Shared/types"


let months = [
    {id: 0, value: 'Январь'},
    {id: 1, value: 'Февраль'},
    {id: 2, value: 'Март'},
    {id: 3, value: 'Апрель'},
    {id: 4, value: 'Май'},
    {id: 5, value: 'Июнь'},
    {id: 6, value: 'Июль'},
    {id: 7, value: 'Август'},
    {id: 8, value: 'Сентябрь'},
    {id: 9, value: 'Октябрь'},
    {id: 10, value: 'Ноябрь'},
    {id: 11, value: 'Декабрь'},
]

const Calendar = () => {
    // Добавление и изменение событий
    let [events, setEvents] = useState<Array<event_T>>([])
    let addEvent = (event: event_T) => {
        let newEvents = events.filter(el => {
            return el.id !== event.id
        })
        newEvents.push(event)
        setEvents(newEvents)
    }
    let deleteEvent = (id: string) => {
        let newEvents = events.filter(el => {
            return el.id !== id
        })
        setEvents(newEvents)
    }

    let [weekOffset, setWeekOffset] = useState(0)
    let toNextWeek = () => {
        setWeekOffset(weekOffset + 1)
    }
    let toPrevWeek = () => {
        setWeekOffset(weekOffset - 1)
    }
    let [days, setDays] = useState<days_T>([])
    let [month, setMonth] = useState('')
    let [day, setDay] = useState(moment())
    useEffect(() => {
        setDay(moment().add(weekOffset, 'week'))
    }, [weekOffset])
    let firstWeekDay = day.clone().startOf('week')
    let lastWeekDay = day.clone().endOf('week')
    let getDays = () => { 
        let number = 0
        let newDays = [] as days_T
        while(!firstWeekDay.clone().add(number, 'day').isAfter(lastWeekDay)) {
            let addedDay = ({
                // Номер дня в месяце. Например 21
                symbol: firstWeekDay.clone().add(number, 'day').date(),
                // День в особом формате. Например Sun May 21 2023 00:00:00 GMT+0300
                value: firstWeekDay.clone().add(number, 'day')
            })
            newDays.push(addedDay as any)
            number = number + 1
        }
        setDays(newDays)
    }
    let getMonth = () => {
        let chosenMonth = months.find(el => {
            return el.id === day.month()
        })
        setMonth(chosenMonth?.value || 'Не вабрано')
    }
    useEffect(() => {
        getDays()
        getMonth()
    }, [weekOffset, day])
    let weekDays = [
        {symbol: 'M', value: 'Monday'},
        {symbol: 'T', value: 'Tuesday'},
        {symbol: 'W', value: 'Wednesday'},
        {symbol: 'T', value: 'Thursday'},
        {symbol: 'F', value: 'Friday'},
        {symbol: 'S', value: 'Saturday'},
        {symbol: 'S', value: 'Sunday'},
    ]
    return <>
        <div className={styles.mainBox}>
            <NavBar weekDays={weekDays} days={days} month={month} toNextWeek={toNextWeek} toPrevWeek={toPrevWeek}/>
        </div>
        <TimeLine events={events} deleteEvent={deleteEvent} addEvent={addEvent} days={days}/>
        <Actions />
    </>
}

export default Calendar