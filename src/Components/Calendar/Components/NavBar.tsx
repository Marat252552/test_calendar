import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import moment from "moment"
import { days_T } from "../../../Shared/types"

let NumbersStyle = { fontSize: '15px', fontWeight: '450', fontFamily: 'system-ui', display: 'flex', justifyContent: 'center' }
let LettersStyle = { fontSize: '10px', fontWeight: '450', fontFamily: 'system-ui', display: 'flex', justifyContent: 'center' }

// Листинг букв дней недели либо номеров дней недели
const List = ({ array, elStyle }: { array: Array<{symbol: string | number, value: string | moment.Moment}>, elStyle: any }) => {
    return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
        <div></div>
        {array.map(el => {
            return <span key={el.value.toString()} style={elStyle}>{el.symbol}</span>
        })}
    </div>
}

const SliderTool = ({month, toNextWeek, toPrevWeek}: {month: string, toNextWeek: () => void, toPrevWeek: () => void}) => {
    return <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
        <LeftOutlined onClick={toPrevWeek} style={{fontSize: '10px'}}/>
        <span style={NumbersStyle}>
            {month}
        </span>
        <RightOutlined onClick={toNextWeek} style={{fontSize: '10px'}}/>
    </div>
}

moment.updateLocale('en', {week: {dow: 1}})


const NavBar = ({weekDays, days, toNextWeek, toPrevWeek, month}: {weekDays: any, days: days_T, toNextWeek: any, toPrevWeek: any, month: any}) => {
    
    return <div style={{display: 'grid', gap: '5px'}}>
            {/* Названия дней недели */}
            <List elStyle={LettersStyle} array={weekDays} />
            {/* Номера дней в месяце */}
            <List elStyle={NumbersStyle} array={days} />
            <SliderTool month={month} toNextWeek={toNextWeek} toPrevWeek={toPrevWeek}/>
    </div>
}

export default NavBar