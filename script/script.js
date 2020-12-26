// using the chrome webRequest API, using the method onBeforeRequest
// for "all url's" and the type is "BLOCKING"
// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//         return {cancel: true}
//     }, { urls: ["<all_urls>"]}, ["blocking"]
// )


chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const urlsToBlock = ["https://twitter.com", "https://www.facebook.com"];
        console.log(details);
        if(urlsToBlock.includes(details.initiator)){
            return {cancel: true};
        }else{
            return {cancel: false};
        }
    }, { urls: ["<all_urls>"]}, ["blocking"]
)