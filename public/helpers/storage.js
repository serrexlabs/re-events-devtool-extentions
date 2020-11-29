/* global chrome */

async function initStore(storeName) {
    await remove(storeName);
    await create(storeName);
}

async function getStore(storeName) {
    return get(storeName);
}

async function insert(storeName, tuple) {
    return get(storeName);
}


/// STORAGE helpers

function resolveKey(key) {
    // return `re-events/storage_${key}`
    return key
}

async function get(key) {
    const keyName = resolveKey(key)
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(keyName, function (items) {
            if(chrome.runtime.lastError) {
                reject(chrome.runtime.lastError)
                return
            }
            resolve(items)
        })
    })
}

async function create(key) {
    const keyName = resolveKey(key)
    return new Promise((resolve, reject) => {
        chrome.storage.local.set({ [keyName]: {} }, function () {
            if(chrome.runtime.lastError) {
                reject(chrome.runtime.lastError)
                return
            }
            resolve(true)
        })
    })
}

async function remove(key) {
    const keyName = resolveKey(key)
    return new Promise((resolve, reject) => {
        chrome.storage.local.remove(keyName, function () {
            if(chrome.runtime.lastError) {
                reject(chrome.runtime.lastError)
                return
            }
            resolve(true)
        })
    })
}
