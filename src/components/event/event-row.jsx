import React from "react";

export const EventRow = ({ name, onClick }) => {
    return <div
        onClick={() => onClick()}
        className='row-span-1 p-2 border-gray-600 border-b-2 text-blue-400 hover:bg-gray-600 text-light-blue-600 text-sm font-medium cursor-pointer'>
        { name }
    </div>
}
