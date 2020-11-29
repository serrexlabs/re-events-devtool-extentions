/* global chrome */

import React, {useContext, useEffect} from "react";
import {EventRow} from "./event/event-row";
import {AppContext} from "../contexts/app-context";

export const EventPanel = () => {

    const { events, onEventSelected } = useContext(AppContext)


    useEffect(() => {
        // Set up event listeners from Content script
 /*       window.addEventListener("message", function(event) {
            if (event.source !== window) return;
            console.log(event )
        });*/
    }, []);

    return <div className='col-span-1  border-gray-600 border-r-2 row-span-3 dark:text-white'>
{/*        <input
            className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
            type="text" aria-label="Filter projects" placeholder="Filter projects"/>*/}

        <div className="grid grid-rows-1">

            {
                events.map(currentEvent => (<EventRow name={currentEvent.event} onClick={() => onEventSelected(currentEvent) } />))
            }

            {/* eslint-disable-next-line no-undef */}
            <button onClick={() => window.postMessage({
                action: "SIGNAL_ACK",
                source: "re-events_devtool_bridge"
            }, "*")}>
                Button
            </button>

        </div>


    </div>
}
