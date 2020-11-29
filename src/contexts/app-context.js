import React, { useEffect, useState } from 'react';

const mockEvents = [
    {
        event: "@@marketing/OPEN_ADD_PROPERTY_MODAL",
        params: {
            listener: [],
            listenerCount: 2,
            payload: {
                key: "next"
            }
        }
    },
    {
        event: "@@marketing/CLOSE_ADD_PROPERTY_MODAL",
        params: {
            listener: [],
            listenerCount: 2,
            payload: {
                key: "test"
            }
        }
    },
    {
        event: "@@marketing/IMAGE_HAS_ADDED",
        params: {
            listener: [],
            listenerCount: 1,
            payload: {
                key: "yoo yooo"
            }
        }
    },

]

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
    const [events, setEvents] = useState(mockEvents);
    const [selectedEvent, setSelectedEvent] = useState(null);


    const onEventSelected = (event) => {
        setSelectedEvent(event)
        console.log(event)
    }


    useEffect(() => {
        // Set up event listeners from Content script
      /*  window.addEventListener("message", function(event) {
            if (event.source !== window) return;
            if (event.data.action && event.data.source === 're-events_devtool' && (event.data.type === "NEW_DATA_RECEIVED")) {
                setEvents(event.data.payload);
            }
        });*/
    }, []);

    return (
        <AppContext.Provider
            value={{
                events,
                onEventSelected,
                selectedEvent
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
