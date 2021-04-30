import React from 'react'

function TitleBar() {
    return (
        <div className="inline-flex">
            <div className="m-auto w-3/4">
                <div className="text-center font-bold text-2xl">
                    Movies
                </div>
            </div>
            <div className="w-1/4">
                <div className="relative">
                    <input type="text"
                        className="h-14 w-50 pr-8 pl-5 rounded"
                        placeholder="Search anything..." />
                    <div className="absolute top-4 right-3">
                        <i className="fa fa-search text-gray-400"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TitleBar;