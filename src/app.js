import React from "react";
import {Header} from "./components/header";
import {EventPanel} from "./components/event-panel";
import {Explore} from "./components/explore";
import AppProvider from "./contexts/app-context";


function App() {

  return (
      <AppProvider>
          <div className="bg-gray-700 pb-4 sm:pb-6 lg:pb-4 h-screen dark:bg-gray-800">
              <Header />
              <div className="grid grid-rows-3 grid-cols-3 h-full  border-1">

                  <EventPanel/>

                  <Explore/>

              </div>
          </div>
      </AppProvider>
  );
}

export default App;
