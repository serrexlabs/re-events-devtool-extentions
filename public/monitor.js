/* global chrome */


(function init() {


    if (window.IS_REEVENT_DEVTOOL_MONITOR_INITIATED)  return

    window.IS_REEVENT_DEVTOOL_MONITOR_INITIATED = true


    window.postMessage({
        action: 'MONITORED_INITIALIZED',
        source: 're-events_devtool'
    })

    window.addEventListener("message", (event) => {
        // The signal came from the devtool bridge
        console.log(event.data)
        if (event.data.source && event.data.action === "EVENTS" && event.data.source === "re-events_devtool_bridge") {
            chrome.extension.sendMessage({
                action: "MONITORED",
                payload: event.data.payload
            }, function(message){});
        }

    }, false);

}());
