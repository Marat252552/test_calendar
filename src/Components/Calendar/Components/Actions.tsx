import { Button } from "antd"

const Actions = () => {
    return <div style={{position: 'fixed', border: 'solid 1px red', height: '10vh', width: '100vw', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <Button>Добавить</Button>
        <Button>Сегодня</Button>
    </div>
}

export default Actions