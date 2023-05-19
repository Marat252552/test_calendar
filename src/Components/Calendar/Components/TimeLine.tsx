let Row = ({ time }: { time: any }) => {
    let horizontalAxis = [1, 2, 3, 4, 5, 6, 7]
    return <div>
        {time}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
            {horizontalAxis.map(el => {
                return <div key={el} style={{ border: 'solid 1px black', width: '100%', height: '20px' }}>
                </div>
            })}
        </div>
    </div>
}

const TimeLine = () => {
    let verticalAxis = []
    for (let i = 1; i < 25; i++) {
        verticalAxis.push(i)
    }
    return <div>
        {verticalAxis.map(el => {
            return <Row time={el} key={el} />
        })}
    </div>
}

export default TimeLine