import React from 'react'
import './tabularList.css'

const TabularList = ({ list }) =>  {
  return (
    <div className='tc pt2 pb5'>
      <table className='tc w-auto list'>
          <tbody>
            <tr>
              {renderTableHeader(list)}
            </tr>
            {renderTableDataList(list)}
          </tbody>
      </table>
    </div>
  )
}

const renderTableDataList = (list) => {
  return list.map((employee, idx) => {
    let { id, first_name, last_name, address, join_date, cell_phone, work_phone, home_phone} = employee
    join_date = join_date.split('T')[0];

    return (
      <tr key={idx}>
        <td>{id}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{address}</td>
        <td>{join_date}</td>
        <td>{cell_phone || '-'}</td>
        <td>{work_phone || '-'}</td>
        <td>{home_phone || '-'}</td>
      </tr>
    )
  })
}

const renderTableHeader = (list) => {
  const header = list.length && Object.keys(list[0])

  if (header) {
    return header.map((key, index) => {
      return <th key={index} className='pa3 bg-dark-green white'>{key.toUpperCase()}</th>
    })
  }
  return ''
}

export default TabularList