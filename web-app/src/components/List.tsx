import React from 'react'

class ListComponent extends React.Component{
    render() {
        return (
            <div className="w-full py-4">
                <div className="bg-gray-100 rounded w-full shadow-xl">
                    <div className="block group p-4 border-b">
                        <p className="font-bold text-lg mb-1 text-black">Movie Title <span>(Year)</span> </p>
                        <p className="text-grey-darker mb-2 ">Movie Short Description</p>
                    </div>
                    <div className="block group p-4 border-b">
                        <p className="font-bold text-lg mb-1 text-black">Movie Title <span>(Year)</span> </p>
                        <p className="text-grey-darker mb-2 ">Movie Short Description</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ListComponent;