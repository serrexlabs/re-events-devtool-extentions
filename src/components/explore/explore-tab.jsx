import React, {useContext} from "react";
import ReactJson from 'react-json-view'
import {AppContext} from "../../contexts/app-context";

const sampleJson = {
    args: {
        key: "one"
    },
    listener: [
        "function(){ console.log('hello') }"
    ]
}

export const ExploreTabs = ({ name }) => {

    const { selectedEvent } = useContext(AppContext)

    return <>
        <div className="border-gray-600">
            <nav className="tabs flex flex-col sm:flex-row">
                <button data-target="panel-1"
                        className="tab active text-gray-200 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                    Payload
                </button>
                <button data-target="panel-2"
                        className="tab text-gray-300 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                    Subscribers
                </button>
            </nav>
        </div>

        <div className='p-5 m-3'>

            {
                selectedEvent &&
                <ReactJson
                    src={selectedEvent.params}
                    enableClipboard={false}
                    style={{ background: 'transparent' }}
                    theme="monokai"
                    name={null}
                    displayObjectSize={false}
                />
            }
        </div>

    </>;
}
