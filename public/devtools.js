/* global chrome */

(function init() {
    var backgroundPageConnection;

    try {
        var connectToExtension = function () {
            backgroundPageConnection = chrome.extension.connect({
                name: "re-events-devtools"
            });

            backgroundPageConnection.onMessage.addListener(function (message) {
                // Handle responses from the background page, if any
            });

            backgroundPageConnection.onDisconnect.addListener(reconnectToExtension);
        }


        var reconnectToExtension = function () {
            // Reset port
            backgroundPageConnection = null;
            // Attempt to reconnect after 1 second
            setTimeout(connectToExtension, 1000 * 1);
        };

        connectToExtension();

        chrome.extension.sendMessage({
            action:'INIT',
            tabId: chrome.devtools.inspectedWindow.tabId,
        });

    } catch (e) {

    }

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.action === "IS_DEVTOOL_OPEN") {
                //  To do something
                console.log(request.payload.tabId)
                if (chrome.devtools.inspectedWindow.tabId === request.payload.tabId ) {
                    sendResponse({ ack: 'yes' })
                }
            }
        }
    );

    chrome.devtools.panels.create("re-events (React Events)", null, "index.html", function(panel) {});
}());

