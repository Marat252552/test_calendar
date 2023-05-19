import { useState } from "react"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

let NumbersStyle = { fontSize: '15px', fontWeight: '450', fontFamily: 'system-ui', display: 'flex', justifyContent: 'center' }
let LettersStyle = { fontSize: '10px', fontWeight: '450', fontFamily: 'system-ui', display: 'flex', justifyContent: 'center' }

const List = ({ array, elStyle }: { array: Array<number | string>, elStyle: any }) => {
    return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
        {array.map(el => {
            return <span style={elStyle}>{el}</span>
        })}
    </div>
}

const SliderTool = () => {
    return <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
        <LeftOutlined style={{fontSize: '10px'}}/>
        <span style={NumbersStyle}>
            Ноябрь 2023
        </span>
        <RightOutlined style={{fontSize: '10px'}}/>
    </div>
}

const NavBar = () => {
    let days = [
        'M', 'T', 'W', 'T', 'F', 'S', 'S'
    ]
    let [numberDays, setDays] = useState([19, 20, 21, 22, 23, 24, 25])
    return <div style={{display: 'grid', gap: '5px'}}>
            {/* Названия дней недели */}
            <List elStyle={LettersStyle} array={days} />
            {/* Номера дней в месяце */}
            <List elStyle={NumbersStyle} array={numberDays} />
            <SliderTool />
    </div>
}

export default NavBar