//requerir el modelo
const employeeCtrl = {};
const Employee = require("../models/Employee");


employeeCtrl.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
  
};

employeeCtrl.createEmployee = async (req, res) => {
  
  res.send({message: 'employee created'});
  const newEmployee = new Employee(req.body);
  console.log(newEmployee)
  await newEmployee.save()
}

employeeCtrl.getEmployee = async (req, res) => {
 
  const employee = await Employee.findById(req.params.id)
  res.send(employee)
}

employeeCtrl.editEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body)
  res.json({status: 'Employee updated'})
}

employeeCtrl.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id)
  res.json({status: 'Employee Deleted'})
}

module.exports = employeeCtrl;
