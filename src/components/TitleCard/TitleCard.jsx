import { useNavigate } from "react-router-dom";
import './TitleCard.css';

export default function TitleCard({ title, setNavTitle, titleObj }) {
    const navigate = useNavigate()
    
    function handleClick(titleObj) {
        setNavTitle(titleObj)
        navigate('/textBlocks')
    }
    return (
        <div onClick={() => handleClick(titleObj)}>{ titleObj.title }</div>
    )
}