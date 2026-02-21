import React from 'react'
import {useState,useEffect} from 'react'

function EmployeeInfo() {
    const [emp, setEmp]=useState({
        fullName:" ",
        phone:" ",
        skill:[],
        country:" "
    })
    const handleEmployee=(e)=>{
        const[name,value,type ,checked]=e.target;
        setEmp((prev)=>({
            ...prev,
            [name]:
            type ==="checkbox" 
            ?
           checked 
       
           ?[...prev[name],value]
           : prev[name].filter((item) => item !==value)
           :value,
        }));

    }
  return (
    <div>
      <form>
        <label>Name</label>
        <input type ='text' name='fullName' value ={emp.fullName}onChange={handleEmployee}/>
        <br/> 
         <label>Phone Number</label>
       < input type ='text' name='phone' value ={emp.phone}onChange={handleEmployee}/>
       <br/>
       <label>Skills</label>
       
        < input type ='checkbox' name='skill' value = {"JAVA"} onChange={handleEmployee}/>
        < input type ='checkbox' name='skill' value = {"REACT"} onChange={handleEmployee}/>
         < input type ='checkbox' name='skill' value = {"ANGULAR"} onChange={handleEmployee}/>
    <br/>
    <label>  Country</label>
    <select name ='country' >
        <option value ={" "} > select</option>
        <option value ={"india"} > India</option>
        <option value ={"us"} > USA</option>
    </select>
    <input type ='submit' onSubmit></input>
      </form>
    </div>
  )
}

export default EmployeeInfo
