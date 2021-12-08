import React, { Component } from 'react'
import TabularList from './components/TabularComponent/tabularList'
import Form from './components/FormComponent/form'
import SearchBox from './components/searchBox'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      searchField: '',
      employeeList: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/getEmployees')
      .then(response => response.json())
      .then(data => {
        this.setState({ employeeList: data })
      })
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render () {
    const { employeeList, searchField } = this.state;
    const filteredList = employeeList.filter(employee => {
      return employee.first_name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className='pl5 pr5'>
        <h1 className='f1'>Employees</h1>
        <Form />
        <hr className='w-auto mb4'/>
        {(!employeeList.length) ?
          <h1>Loading</h1> :
          (
            <div>
              <SearchBox searchChange={this.onSearchChange}/>
              <TabularList list={filteredList} />
            </div>
          )
        }
      </div>  
    )
  }
}

export default App;
