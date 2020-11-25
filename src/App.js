import './assets/main.css'


function App() {
  return (
      <section className="pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
          <header className="flex items-center justify-between border-b-2">
              <h2 className="text-lg leading-6 font-medium text-black">Projects</h2>
              <button
                  className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
                  <svg className="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="12" height="20"
                       fill="currentColor">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"/>
                  </svg>
                  New
              </button>
          </header>
      </section>
  );
}

export default App;
