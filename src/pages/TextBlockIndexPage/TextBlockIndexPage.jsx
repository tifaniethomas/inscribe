import TextCard from "../../components/TextCard/TextCard";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
import { useEffect } from "react"

export default function TextBlockIndexPage({ textBlocks, setTextBlocks }) {
    
    useEffect(function () {
        (async function() {
            const allTextBlocks = await textBlocksAPIsAPI.getAll()
            setTextBlocks([...allTextBlocks])
        })()
    }, [])

    const textBlocksIndex = textBlocks.map((textBlock) => <TextCard textBlock={textBlock} />)
    
    return(
        <>
        {textBlocks.length ? textBlocksIndex : "Nothing Written Yet!"}
        </>
    );
}