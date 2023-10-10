// import { useState } from "react";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
// import './TextCard.css';

export default function TextCard({ textBlock, textBlocks, setTextBlocks, key, idx }) {
    // const [editTextBlock, setEditTextBlock] = useState([])
    const date = new Date(textBlock.createdAt).toLocaleString()

    async function handleDelete(textBlockId) {
        await textBlocksAPI.deleteTextBlock(textBlockId);
        setTextBlocks(textBlocks.filter(textBlock => textBlock._id !== textBlockId));
      }

    // async function handleEdit(textBlockId, textBlockIdx) {
    //     await textBlocksAPI.editTextBlock(textBlockId)
    //     setEditTextCard()
    // } 

    return (
        <>
        <div className="TextCard">{ date }:&nbsp;&nbsp;&nbsp;{ textBlock.text }
        {/* <button type="submit" onClick={() => handleEdit(`${ textBlock._id, textBlock.idx }`)}></button> */}
        <button type="submit" onClick={() => handleDelete(`${ textBlock._id }`)}>X</button></div>
        </>
    )
}