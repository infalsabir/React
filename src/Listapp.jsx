import React from 'react'
import Navbar from './navbar'
function Listapp() {

  return (
    <div>
        {<Navbar/>}
        <h1 className='text-xl font-bold text-center'> My List</h1>
        <input type = 'text'></input>
      
    <div>
      <label htmlFor="list" className="block text-sm font-medium leading-6 text-gray-900">
        list
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
       
        </div>
        <input
          id="list"
          name="list"
          type="text"
          placeholder="0.00"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>



    </div>
  )
}

export default Listapp