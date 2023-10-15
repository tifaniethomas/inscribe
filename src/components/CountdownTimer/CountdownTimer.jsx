import './CountdownTimer.css'
import { useState, useEffect } from 'react'

export default function CountdownTimer({ minutes }) {
    const [time, setTime] = useState(minutes)

    useEffect(() => {
        const timer = time > 0 && 
        setInterval(() => {
            setTime((prevTime) => prevTime -1)
        }, 1000)
        return ()=> clearInterval(timer)
    }, [time])

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return (`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)
    }

    return(
        <div className='CountdownTimer'>{formatTime(time)}</div>
    )
}