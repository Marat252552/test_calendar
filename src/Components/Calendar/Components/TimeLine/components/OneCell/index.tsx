import { useEffect, useState } from "react";
import {Button, Modal, Input} from 'antd'
import styles from './lib/styles.module.css'
import { event_T } from "../../../../../../Shared/types";

type Props_T = { day: moment.Moment, addEvent: (event: event_T) => void, cellEvent: event_T | undefined, deleteEvent: (id: string) => void }

let OneCell = ({ day, addEvent, cellEvent, deleteEvent }: Props_T) => {
    // Состояние клетки (проще говоря событие для этой клетки)
    let [value, setValue] = useState('')
    // Открыто ли модальное окно для работы с событием
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Временное состояние клетки, которое меняется при событии onChange Input в модальном окне
    let [middleValue, setMiddleValue] = useState('')
    // Если сверху передано событие для клетки, оно устанавливается в состояние клетки
    useEffect(() => {
        if (cellEvent === undefined) {
            setValue('')
        } else {
            setValue(cellEvent.value)
        }
    }, [cellEvent])
    // Открыть модальное окно
    const showModal = () => {
        setIsModalOpen(true);
    };
    // Действия, выполняемые при нажатии на кнопку отмены либо за границу модального окна
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    // Действия, выполняемые при нажатии кнопки сохранить в модальном окне
    const handleOk = () => {
        setIsModalOpen(false);
        // Добавляем сохраненное событие в глобальный state через callback
        addEvent({
            id: day.toString(),
            value: middleValue
        })
    }
    // Кнопки в модальном окне
    let footer = [
        <Button
            danger
            onClick={() => {
                deleteEvent(day.toString())
                setIsModalOpen(false)
                setValue('')
            }}>Удалить</Button>,
        <Button onClick={handleOk}>Сохранить</Button>
    ]
    return <>
        {/* Модальное окно, в котором пользователь может создать новое событие, изменить или удалить существующее */}
        {(isModalOpen) ?
            <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer={footer}>
                Введите название события
                {day.toString()}
                <Input defaultValue={value} onChange={(e) => {
                    setMiddleValue(e.target.value)
                }} />
            </Modal>
            :
            <div></div>
        }
        {/* Сама клетка - т.е. поле события */}
        <div onClick={showModal} className={styles.cell}>
            {/* Если у клетки есть какое то событие, то она залита */}
            {(value !== '') ?
                <div style={{ background: 'red', width: '100%', height: '100%' }}></div>
                :
                <div></div>
            }
        </div>
    </>
}

export default OneCell