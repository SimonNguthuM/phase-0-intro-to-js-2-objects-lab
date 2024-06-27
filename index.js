const employee = {
    name: 'Shay',
    streetAddress: '22nd Ave'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmp1 = { ...employee};
    newEmp1[key] = value;

    return newEmp1;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value; 
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmp2 = {...employee}
    delete newEmp2[key];
    return newEmp2
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}