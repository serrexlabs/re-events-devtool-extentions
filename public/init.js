/* global chrome */



(function init() {

    if (window.IS_REEVENT_DEVTOOL_INITIATED)  return

    window.IS_REEVENT_DEVTOOL_INITIATED = true

    window.postMessage({
        action: 'SIGNAL',
        source: 're-events_devtool'
    })


    window.addEventListener("message", (event) => {
        // The signal came from the devtool bridge

        if (event.data.action && event.data.action === "SIGNAL_ACK" && event.data.source === "re-events_devtool_bridge") {
            chrome.extension.sendMessage({
                action: "INIT_MONITOR",
                origin: window.location.origin
            }, function(message){});
        }

    }, false);



}());
