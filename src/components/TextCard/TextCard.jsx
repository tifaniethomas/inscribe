// import { useState } from "react";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
import './TextCard.css';

export default function TextCard({ textBlock, textBlocks, setTextBlocks, idx }) {
    // const [editTextBlock, setEditTextBlock] = useState([])
    const date = new Date(textBlock.createdAt).toLocaleString()

    async function handleDelete(textBlockId) {
        console.log(textBlockId)
        await textBlocksAPI.deleteTextBlock(textBlockId);
        setTextBlocks(textBlocks.filter(textBlock => textBlock._id !== textBlockId));
      }

    // async function handleEdit(textBlockId, textBlockIdx) {
    //     await textBlocksAPI.editTextBlock(textBlockId)
    //     setEditTextCard()
    // } 

    const swapIdxUp = (textBlocks) => {
        console.log(textBlocks)
        let idxUp = (parseInt(idx) - 1)
        const temp = textBlock[idx]
        textBlocks[idx] = textBlocks[idxUp]
        textBlocks[idxUp = temp] 
    }

    const swapIdxDown = (textBlocks, idx) => {
        let idxUp = (parseInt(idx) + 1)
        const temp = textBlock[idx]
        textBlocks[idx] = textBlocks[idxUp]
        textBlocks[idxUp = temp] 
    }

    return (
        <div className="TextCardFlex">
            <div className="TextCard">{ date }:&nbsp;&nbsp;&nbsp;{ textBlock.text }
            </div>
            <button type="submit" onClick={() => swapIdxUp(`${ textBlock.idx }`)}>▲</button>
            <button type="submit" onClick={() => swapIdxDown(`${ textBlock.idx }`)}>▼</button>
            <button type="submit" onClick={() => handleDelete(`${ textBlock._id }`)}>X</button>
        </div>
    )
}
{/* <button type="submit" onClick={() => handleEdit(`${ textBlock._id, textBlock.idx }`)}></button> */}