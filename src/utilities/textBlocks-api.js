import sendRequest from "./send-request";

const BASE_URL = "/api/textBlocks"

export function getAll(navTitle) {
    return sendRequest(`${BASE_URL}/${navTitle}`)
}

export function createTextBlock(textBlock) {
    return sendRequest(BASE_URL, "POST", textBlock)
}

export function deleteTextBlock(textBlockId) {
    return sendRequest(`${BASE_URL}/${textBlockId}`, "DELETE")
}