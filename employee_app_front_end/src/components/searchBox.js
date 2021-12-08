import React from 'react'


const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pb2'>
      <input
        className='pa2 ba b--green bg-lightest-green'
        type='search'
        placeholder='Search Employee'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox