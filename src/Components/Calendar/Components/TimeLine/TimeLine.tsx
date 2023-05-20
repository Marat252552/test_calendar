import styles from './lib/styles.module.css'
import { useState, useEffect } from 'react'
import { Input, Modal, Button } from 'antd';
import { days_T } from '../../../../Shared/types';


let Column = ({ verticalAxis }: { verticalAxis: Array<moment.Moment> }) => {
    return <div>
        <div >
            {verticalAxis.map(day => {
                return <>
                    <div style={{ fontSize: '10px', display: 'flex', alignItems: 'end', justifyContent: 'end' }}></div>
                    <OneCell key={day.toString()} day={day} />
                </>
            })}
        </div>
    </div>
}

let OneCell = ({ day }: { day: moment.Moment }) => {
    let [value, setValue] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    let footer = [
        <Button
            danger
            onClick={() => {
                setValue('')
                setIsModalOpen(false)
            }}>Удалить</Button>,
        <Button onClick={handleCancel}>Закрыть</Button>
    ]
    return <>
        <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer={footer}>
            Введите название события
            {day.toString()}
            <Input value={value} onChange={(e) => { setValue(e.target.value) }} />
        </Modal>
        <div onClick={showModal} className={styles.cell}>
            {(value !== '') ?
                <div style={{ background: 'red', width: '100%', height: '100%' }}></div>
                :
                <div></div>
            }
        </div>
    </>

}

const TimeLine = ({ days }: { days: days_T }) => {
    let times = []
    for (let i = 0; i < 24; i++) {
        times.push(`${i}:00`)
    }
    if (days[0]) {
        return <div style={{ height: '80vh', border: 'solid 1px red', overflow: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {times.map(el =>
                    <div className={styles.cell}>
                        <div style={{ width: '100%', height: '100%' }}>{el}</div>
                    </div>
                )}
            </div>
            {days.map(el => {
                let verticalAxis = []
                for (let i = 0; i < 24; i++) {
                    let time;
                    time = el.value.clone().add(i, 'hours')
                    verticalAxis.push(time)
                }
                return <Column verticalAxis={verticalAxis} key={el.value.toString()} />
            })}
        </div>
    }
}

export default TimeLine