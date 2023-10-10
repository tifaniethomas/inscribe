import sendRequest from "./send-request";

const BASE_URL = "/api/textBlocks"

export function getTextBlocks() {
    return sendRequest(BASE_URL)
}

export function createTextBlock(textBlock) {
    return sendRequest(`${BASE_URL}/create`, "POST", textBlock)
}

export function deleteTextBlock(textBlockId) {
    return sendRequest(`${BASE_URL}/${textBlockId}`, "DELETE")
}