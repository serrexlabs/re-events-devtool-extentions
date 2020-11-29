export const Header = () => {
    return <header className="flex items-center justify-between  border-gray-600  border-b-2">
        <svg className="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="12" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
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
}
