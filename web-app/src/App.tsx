import React, { useState } from 'react'
import './App.css'
import TitleBar from "./components/Title"
import ListComponent from "./components/List"
function App() {

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 w-3/4 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-10">
          <div>
            <TitleBar />
          </div>
          <div>
            <ListComponent />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
