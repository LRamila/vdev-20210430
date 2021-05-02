import React from 'react'
import './App.css'
import ListComponent from "./components/List";
import useCountStore from './services/Store';
class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      searchValue: "",
      numberOfMovies: 0
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.getMoviesCount = this.getMoviesCount.bind(this);
  }
  onInputChange(e: any) {
    this.setState({ searchValue: e.target.value });
  }
  getMoviesCount(){
    return useCountStore.getState().count
  }
  render() {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 w-3/4 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-10">
            <div>
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
                      placeholder="Search anything..."
                      onChange={(e) => { this.onInputChange(e) }} />
                    <div className="absolute top-4 right-3">
                      <i className="fa fa-search text-gray-400"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ListComponent searchValue={this.state.searchValue} />
            </div>
            <p className="text-right font-bold text-m">Number of movies: {this.getMoviesCount()}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default App;

