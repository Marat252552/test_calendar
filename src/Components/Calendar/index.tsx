import NavBar from "./Components/NavBar"
import TimeLine from "./Components/TimeLine"
import styles from './lib/styles.module.css'

const Calendar = () => {
    return <div className={styles.mainBox}>
        <NavBar />
        <TimeLine />
    </div>
}

export default Calendar