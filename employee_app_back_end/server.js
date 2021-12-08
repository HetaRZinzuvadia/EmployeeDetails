const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');

const app = express();
const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'hzinzuvadia',
    password : '',
    database : 'employee'
  }
});
const table = 'employee_details';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('The application is running.');
})

app.post('/addEmployee', (req, res) => {
  const newEmployee = req.body;
  const { firstName, lastName, address, joinDate, cellPhone, workPhone, homePhone } = newEmployee
  db(table).insert({
    first_name: firstName,
    last_name: lastName,
    address: address,
    join_date: joinDate,
    cell_phone: cellPhone,
    work_phone: workPhone,
    home_phone: homePhone
  }).then(data => {
    res.json('Success: added an employee');
  }).catch(err => {
    console.log('An error occured while adding an employee.', err)
  })
});

app.delete('/deleteEmployee', (req, res) => {
  const { id } = req.params;
  let data = db(table).where('id', id).del();
  res.json('deleted');
});

app.get('/getEmployees', (req, res) => {
  db.select('*').from(table).then(employees => {
    if (employees) {
      res.json(employees);
    }
  }).catch(err =>
    res.status(400).json('Error occurred while fetching employee records.')
  );
});

app.get('/getEmployee/:id', (req, res) => {
  const { id } = req.params || 1;
  db.select('*').from(table).where({ id }).then(employee => {
    if (employee) {
      res.json(employee[0]);
    }
  }).catch(err =>
    res.status(400).json(`Error occurred while fetching employee record with id ${id}.`)
  );
});

app.listen(3000, () => {
  console.log('Listening at port 3000');
})
