const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId'
}

const getDepartmentCollection = [
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
]

function insertEmployee(data) {
    let employees = getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

function updateEmployee(data) {
    let employees = getAllEmployees();
    let recordIndex = employees.findIndex(x => x.id == data.id);
    employees[recordIndex] = { ...data }
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

function deleteEmployee(id) {
    let employees = getAllEmployees();
    employees = employees.filter(x => x.id != id)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));
    //map departmentID to department title
    let departments = getDepartmentCollection;
    return employees.map(x => ({
        ...x,
        department: departments[x.departmentId - 1].title
    }))
}

const employeeService = {
    getAllEmployees,
    deleteEmployee,
    updateEmployee,
    insertEmployee,
    generateEmployeeId,
    getDepartmentCollection
}

export default employeeService