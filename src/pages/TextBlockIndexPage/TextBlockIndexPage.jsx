import TextCard from "../../components/TextCard/TextCard";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
import { useEffect } from "react"

export default function TextBlockIndexPage({ textBlocks, setTextBlocks }) {
    
    useEffect(function (setTextBlocks) {
        (async function() {
            const allTextBlocks = await textBlocksAPI.getTextBlocks()
            setTextBlocks([...allTextBlocks])
        })()
    }, [])

    const textBlocksIndex = [...textBlocks]
    
    return(
        <>
        {textBlocks.length ? textBlocksIndex : "Nothing Written Yet!"}
        </>
    );
}