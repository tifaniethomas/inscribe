import './TextBlockIndexPage.css';
import TextBlockForm from "../../components/TextBlockForm/TextBlockForm"
import TextCard from "../../components/TextCard/TextCard";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
import { useEffect, useState } from "react"

export default function TextBlockIndexPage({ navTitle, textBlocks, setTextBlocks, setNavNum }) {

    const [isEditing, setIsEditing] = useState(false)

    useEffect(function () {
        async function getBlocks() {
            const allTextBlocks = await textBlocksAPI.getAll()
            setTextBlocks(allTextBlocks)
        }
        getBlocks()
    }, [])
    
    const titleBlocks = textBlocks.filter(t => t.title === navTitle)
    // setNavNum(textBlocks.length)

    const textBlocksIndex = textBlocks.map((textBlock, idx) => <TextCard 
    textBlock={ textBlock } textBlocks={ textBlocks } setTextBlocks={ setTextBlocks } key={ idx } idx={ idx } 
    isEditing={ isEditing } setIsEditing={ setIsEditing } navTitle={ navTitle } title={ textBlock.title } />)
    
    return(
        <div className='TextBlockIndex'>
            {/* <TextBlockForm /> */}
            {textBlocks.length ? textBlocksIndex : "Nothing Written Yet!"}
        </div>
    );
}