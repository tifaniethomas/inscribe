import { useNavigate } from "react-router-dom";
import './TitleCard.css';

export default function TitleCard({ titleText, setNavTitle, titleObj, titles }) {
    const navigate = useNavigate()

    
    function handleClick(titleClick) {
        console.log(titleClick)
        const titleClickObj = titles.find(t => t.title === titleClick)
        console.log("titleClick: ", titleClickObj)
        setNavTitle(titleClickObj)
        navigate('/textBlocks')
    }
    return (
        <div className="TitleCard" onClick={() => handleClick(titleText)}>{ titleText }</div>
    )
}