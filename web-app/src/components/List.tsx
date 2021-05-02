import React from 'react';
import apiService from '../services/ApiService';
import useCountStore from '../services/Store';

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
                this.setState({ dataList: result.data });
            }, (error) => {
                this.setState({ error });
            })
    }
    filterData = (value: string) => {
        const filteredData = this.state.dataList.filter((data: any) => {
            return Object.keys(data).some(key =>
                data[key].toString().toLowerCase().includes(value)
            );
        });
        return filteredData;
    }
    render() {
        let dataList = this.state.dataList
        if (this.props.searchValue) {
            dataList = this.filterData(this.props.searchValue.toLowerCase())
        }
        useCountStore.getState().setCount(dataList.length)
        return (
            <div className="w-full py-4">
                <div className="bg-gray-100 rounded w-full shadow-xl" >
                    {dataList.map((data: any, key: any) => (
                        <div className="block group p-4 border-b" key={key}>
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
