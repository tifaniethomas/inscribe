import './TextBlockIndexPage.css';
import TextCard from "../../components/TextCard/TextCard";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
import { useEffect, useState } from "react"

export default function TextBlockIndexPage({ textBlocks, setTextBlocks }) {

    const [isEditing, setIsEditing] = useState(false)

    useEffect(function () {
        async function getBlocks() {
            const allTextBlocks = await textBlocksAPI.getAll()
            setTextBlocks(allTextBlocks)
        }
        getBlocks()
    }, [])
    

    const textBlocksIndex = textBlocks.map((textBlock, idx) => <TextCard 
    textBlock={ textBlock } textBlocks={ textBlocks } setTextBlocks={ setTextBlocks } key={ idx } idx={ idx } />)
    
    return(
        <div className='TextBlockIndex'>
            {textBlocks.length ? textBlocksIndex : "Nothing Written Yet!"}
        </div>
    );
}