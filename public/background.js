/* global chrome */

var isMonitorInitialized = false;
var initializedTabs = {

};

function isAlreadyInitialized(tabId) {

    if (!initializedTabs) return false

    return !!initializedTabs[tabId]
}

chrome.extension.onConnect.addListener(function(port) {
    // assign the listener function to a variable so we can remove it later
    var devToolsListener = async function(message, sender, sendResponse) {
        if (message.action === 'INIT') {
            console.log(`init.js injected ${message.origin}` )
            chrome.tabs.executeScript(message.tabId, {file: "init.js"});
            initializedTabs[message.tabId] = true;
        }

        if (message.action === 'INIT_MONITOR') {
            chrome.tabs.executeScript(null, {file: "monitor.js"});
            initStore(message.origin)
        }

        sendResponse({ ack: true, message });
    }

    chrome.extension.onMessage.addListener(devToolsListener);

    port.onDisconnect.addListener(function(port) {

        chrome.extension.onMessage.removeListener(devToolsListener);
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    return true;
});


chrome.tabs.onUpdated.addListener(async function(tabId, changeInfo, tab) {
    if (changeInfo.status === "complete" && isAlreadyInitialized(tabId)) {

        try {

            const response = await sendMessage({
                action: "IS_DEVTOOL_OPEN",
                payload: {
                    tabId,
                }
            })

            if (response) {
                console.log(`init.js injected on reload ${tab.url}` )
                chrome.tabs.executeScript(tabId, {file: "init.js"});
            }
        } catch (e) {}
    }
});

/*
chrome.tabs.onActivated.addListener(function(activeInfo) {
    // how to fetch tab url using activeInfo.tabid
    chrome.tabs.get(activeInfo.tabId, function(tab){
        console.log(tab.url);
    });
});
*/
