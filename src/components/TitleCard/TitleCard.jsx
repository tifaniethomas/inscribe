import { useNavigate } from "react-router-dom";
import './TitleCard.css';

export default function TitleCard({ title, setNavTitle }) {
    const navigate = useNavigate()
    
    function handleClick(title) {
        setNavTitle(title)
        navigate('/textBlocks')
    }
    return (
        <div onClick={() => handleClick(title)}>{ title }</div>
    )
}