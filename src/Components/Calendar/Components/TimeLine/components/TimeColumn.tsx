
// Временная колонна с 00:00 по 23:00. Просто обозначает время напротив строки
const TimeColumn = () => {
    let times = []
    for (let i = 0; i < 24; i++) {
        times.push(`${i}:00`)
    }
    return <div style={{ display: 'flex', flexDirection: 'column' }}>
        {times.map(el =>
            <div style={{overflow: 'auto', border: 'solid 1px black', width: '100%',  height: '5vh'}}>
                <div style={{ width: '100%', height: '100%' }}>{el}</div>
            </div>
        )}
    </div>
}

export default TimeColumn