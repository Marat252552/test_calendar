import { days_T, event_T } from '../../../../Shared/types';
import EventsColumn from './components/EventsColumn';
import TimeColumn from './components/TimeColumn';
import styles from './lib/styles.module.css'
import { TimeLineProps_T } from './lib/types';

// Рабочая область, где можно выбрать свободную ячейку и записать в нее событие
const TimeLine = (props: TimeLineProps_T) => {
    return <div className={styles.timeLine}>
        {/* Обозначение временных промежутков */}
        <TimeColumn />
        {/* Обозначение клеток events 7*24 */}
        <EventsColumn {...props}/>
    </div>
}

export default TimeLine