import React ,{useState}from 'react';

function Employee() { 
    const [employee,setEmployee] =useState({
        name :"Ruth",
        age:19,
        salary :300000
    });
  return (
    <div>
        salary :
      <input type="number" value={employee.salary} onChange={(e) =>{setEmployee({...employee,salary :e.target.value})}}/>
    </div>
  );
}

export default Employee;
