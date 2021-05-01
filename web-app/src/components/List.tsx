import React from 'react';
import apiService from '../services/ApiService';

class ListComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            dataList: []
        };
    }
    componentDidMount() {
        apiService.getData("/api/movies", "GET", {})
            .then((result) => {
                this.setState({
                    dataList: result.data
                });
            }, (error) => {
                this.setState({
                    error
                });
            }
            )
    }
    render() {
        const { dataList } = this.state;
        return (
            <div className="w-full py-4">
                <div className="bg-gray-100 rounded w-full shadow-xl">
                    {dataList.map((data: { name: string; year: string; description: string; }) => (
                        <div className="block group p-4 border-b">
                            <p className="font-bold text-lg mb-1 text-black">{data.name} <span>{data.year}</span> </p>
                            <p className="text-grey-darker mb-2 ">{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default ListComponent;