console.log('Background script')

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message, sender)
    sendResponse('From the background script!')
})
