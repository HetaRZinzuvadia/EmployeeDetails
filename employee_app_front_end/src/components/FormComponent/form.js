import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      joinDate: '',
      cellPhone: '',
      workPhone: '',
      homePhone: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios.post('http://localhost:3000/addEmployee', this.state)
      .then(data => {
        console.log(data)
      })
    window.location.reload(false); 
    this.setState({ firstName: '', lastName: '', address: '', joinDate: '', cellPhone: '', workPhone: '', homePhone: '' })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render () {
    const labelClasses = 'pa2 dark-green'
    const inputClasses = 'b--none bb-l w-auto'
    return (
      <div className='pb3'>
        <h2>Add new employee</h2>
        <form className='flex flex-column' onSubmit={this.handleSubmit}>
          <label className={labelClasses}>
            First Name* <br/>
            <input type='text' id='first_name' name='firstName' value={this.state.firstName} onChange={this.handleChange} required className={inputClasses} />
          </label>
          <label className={labelClasses}>
            Last Name* <br/>
            <input type='text' id='last_name' name='lastName' value={this.state.lastName} onChange={this.handleChange} required className={inputClasses} />
          </label>
          <label className={labelClasses}>
            Address* <br/>
            <input type='text' id='address' name='address' value={this.state.address} onChange={this.handleChange} required className={inputClasses} />
          </label>
          <label className={labelClasses}>
            Date of joining <br/>
            <input type='date' id='join_date' name='joinDate' value={this.state.joinDate} onChange={this.handleChange} className={inputClasses} />
          </label>
          <label className={labelClasses}>
            Cell Phone <br/>
            <input type='text' id='cell_phone' name='cellPhone' value={this.state.cellPhone} onChange={this.handleChange} className={inputClasses} />
          </label>
          <label className={labelClasses}>
            Work Phone <br/>
            <input type='text' id='work_phone' name='workPhone' value={this.state.workPhone} onChange={this.handleChange} className={inputClasses} />
          </label>
          <label className={labelClasses}>
            Home Phone <br/>
            <input type='text' id='home_phone' name='homePhone' value={this.state.homePhone} onChange={this.handleChange} className={inputClasses} />
          </label>

          <input className='w-20 ma2 pa2 bg-dark-green white' type='submit' value='Add new employee'/>
        </form>
      </div>
    )
  }
}


export default Form