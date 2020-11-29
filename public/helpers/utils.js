/* global chrome */

const sendMessage = async (payload) => {
    return  new Promise((resolve, reject) => {
        try {
            chrome.runtime.sendMessage(payload, function (message) {
                if(chrome.runtime.lastError) {
                    resolve(null)
                    return
                }

                if (message) {
                    resolve(message)
                    return
                }

                resolve(null)
            });
        } catch (e) {
            reject(e)
        }
    })
}
