import TextCard from "../../components/TextCard/TextCard";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
import { useEffect, useState } from "react"

export default function TextBlockIndexPage() {

    const [textBlocks, setTextBlocks] = useState([])

    useEffect(function () {
        (async function() {
            const allTextBlocks = await textBlocksAPI.getTextBlocks()
            setTextBlocks(allTextBlocks)
        })()
    }, [])

    const textBlocksIndex = textBlocks.map((textBlock, idx) => <TextCard textBlock={ textBlock } textBlocks={ textBlocks } setTextBlocks={ setTextBlocks } key={ idx } idx={ idx } />)
    
    return(
        <>
        {textBlocks.length ? textBlocksIndex : "Nothing Written Yet!"}
        </>
    );
}