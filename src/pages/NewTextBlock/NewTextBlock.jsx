// import { useState } from "react";
import './NewTextBlock.css';
import TextBlockForm from "../../components/TextBlockForm/TextBlockForm";
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';
import { useState } from 'react';

export default function NewTextBlock({ textBlocks, setTextBlocks }) {
    const [sprint, setSprint] = useState(false)
    const [minutes, setMinutes] = useState(0)

    function handleClick(evt) {
        evt.preventDefault()
        setSprint(true)
        console.log(evt.target.value)
        setMinutes(evt.target.value)
    }

    function handleSprintButton(evt) {
        evt.preventDefault()
        setSprint(false)
    }
    
    return (
    <> 
        <div className='NewTextBlock'>
        {!sprint ? 
        <button type="submit" value="1800" onClick={handleClick}>30 Minutes</button> : 
            <>
                <CountdownTimer minutes={minutes} />
                <button type="submit" onClick={handleSprintButton}>Sprint Again?</button>
            </>
        }
        </div>
        <TextBlockForm />
    </>
    )
}