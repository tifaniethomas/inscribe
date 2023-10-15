import sendRequest from "./send-request";

const BASE_URL = "/api/textBlocks"

export function getAll() {
    return sendRequest(BASE_URL)
}

export function createTextBlock(textBlock) {
    return sendRequest(BASE_URL, "POST", textBlock)
}

export function deleteTextBlock(textBlockId) {
    return sendRequest(`${BASE_URL}/${textBlockId}`, "DELETE")
}

export function updateTextBlock(textBlock) {
    console.log(textBlock)
    return sendRequest(`${BASE_URL}/${textBlock._id}`, "POST", textBlock)
}