import './TextBlockIndexPage.css';
import TextBlockForm from "../../components/TextBlockForm/TextBlockForm"
import TextCard from "../../components/TextCard/TextCard";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
import { useEffect, useState } from "react"

export default function TextBlockIndexPage({ navTitle }) {
    const [textBlocks, setTextBlocks] = useState([])
    const [isEditing, setIsEditing] = useState(false)

    useEffect(function () {
        async function getBlocks() {
            const allTextBlocks = await textBlocksAPI.getAll(navTitle)
            setTextBlocks(allTextBlocks)
        }
        getBlocks()
    }, [])



    const textBlocksIndex = textBlocks.map((textBlock, idx) => <TextCard 
    textBlock={ textBlock } textBlocks={ textBlocks } setTextBlocks={ setTextBlocks } key={ idx } idx={ idx } 
    isEditing={ isEditing } setIsEditing={ setIsEditing } />)
    
    return(
        <div className='TextBlockIndex'>
            {/* <TextBlockForm /> */}
            {textBlocks.length ? textBlocksIndex : "Nothing Written Yet!"}
        </div>
    );
}