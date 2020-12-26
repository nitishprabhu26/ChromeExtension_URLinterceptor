// using webRequest, using the method onBeforeRequest
// for "all url's" and the type is "BLOCKING"
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true}
    }, { urls: ["<all_urls>"]}, ["blocking"]
)

